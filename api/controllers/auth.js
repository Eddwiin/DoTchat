const crypto = require("crypto");
const User = require("./../models/user");
const nodemailer = require("nodemailer");
const helpers = require("./../utils/helpers");
const async = require("async");
const ObjectId = require("mongoose").Types.ObjectId;
const { validationResult } = require("express-validator");

const AuthController = {};

AuthController.signIn = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return helpers.paramsValidationErr(res, errors);
  }

  User.findOne(
    { email: req.body.email, password: req.body.password },
    (err, user) => {
      if (err) helpers.catchError(res, err);
      else if (!user)
        return res.status(400).json({ message: "User not found " });
      else if (!!req.session.user)
        return res
          .status(403)
          .json({ message: "You have already a session active" });
      else {
        req.session.user = user;
        res.setHeader("Set-Cookie", "loggedIn=true; HttpOnly");
        return res.status(200).json({ isAuth: true });
      }
    }
  );
};

AuthController.signOut = (req, res, next) => {
  req.session.destroy(err => {
    if (err) return helpers.catchError(res, err);
    res.status(200).json({ isUnAuth: true });
  });
};

AuthController.isAuth = (req, res) => {
  return res.status(200).json({ isAuth: !!req.session.user });
};

AuthController.saveUser = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return helpers.paramsValidationErr(res, errors);
  }

  async.waterfall(
    [
      done => {
        User.findOne({ email: req.body.email }).exec((err, user) => {
          if (user) {
            return res.status(200).json({ isUserExist: true });
          }
          done(err);
        });
      },
      done => {
        const user = new User({
          _id: ObjectId(),
          lastName: req.body.lastName,
          firstName: req.body.firstName,
          email: req.body.email,
          password: req.body.password
        });

        user.save((err, userAdded) => {
          if (err) {
            done(err);
          }
          return res.status(200).json(true);
        });
      }
    ],
    err => helpers.catchError(res, err)
  );
};

AuthController.forgotPassword = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return helpers.paramsValidationErr(res, errors);
  }

  async.waterfall(
    [
      done => {
        crypto.randomBytes(20, (err, buf) => {
          const token = buf.toString("hex");
          done(err, token);
        });
      },

      (token, done) => {
        User.findOneAndUpdate(
          { email: req.query.email },
          {
            resetPasswordToken: token,
            resetPasswordExpires: Date.now() + 3600000
          }
        ).exec((err, user) => {
          if (!user)
            return res
              .status(500)
              .json({ message: "Email wasn't found in database" });

          done(err, token, user);
        });
      },

      (token, user, done) => {
        nodemailer.createTestAccount().then(account => {
          const transport = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
              user: account.user,
              pass: account.pass
            }
          });

          const message = {
            to: user.email,
            from: account.user,
            subject: "Node.js Password Reset",
            text:
              "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
              "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
              (process.env.WEB_URL || "http://localhost:3000") +
              "/auth/reset-password/" +
              token +
              "\n\n" +
              "If you did not request this, please ignore this email and your password will remain unchanged.\n"
          };

          transport.sendMail(message, (err, info) => {
            if (err) done(err);
            else
              return res
                .status(200)
                .json({ urlToReset: nodemailer.getTestMessageUrl(info) });
          });
        });
      }
    ],
    err => helpers.catchError(res, err)
  );
};

AuthController.isTokenResetPassValid = (req, res, next) => {
  User.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: { $gte: Date.now() }
  }).exec((err, user) => {
    if (err) helpers.catchError(res, err);
    else if (!user)
      return res
        .status(404)
        .json({ message: "your token wasn't valid or you already validate" });
    else return res.status(200).json(user._id);
  });
};

module.exports = AuthController;
