const async = require("async");
const crypto = require("crypto");
const User = require("./../models/user");
const nodemailer = require("nodemailer");
const helpers = require("./../utils/helpers");

const AuthController = {};

AuthController.signIn = (req, res, next) => {
  User.findOne(
    { email: req.body.user.email, password: req.body.user.password },
    (err, user) => {
      if (err) helpers.catchError(res, err);
      else if (!user)
        return res.status(404).json({ message: "User not found " });
      else if (!!req.session.user)
        return res
          .status(403)
          .json({ message: "You have already a session active" });
      else {
        req.session.user = user;
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

AuthController.forgotPassword = (req, res, next) => {
  if (!req.query.email) {
    return res.status(400).json({ message: "You must pass email param" });
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
              (process.env.HOST || "http://localhost:5000") +
              "/reset-password/" +
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
  User.findOne(
    { resetPasswordToken: req.params.token },
    { resetPasswordExpires: { $gt: Date.now() } }
  ).exec((err, user) => {
    if (err) helpers.catchError(res, err);
    else if (!user)
      return res
        .status(404)
        .json({ message: "your token wasn't valid or you already validate" });
    else return res.status(200).json(user._id);
  });
};

module.exports = AuthController;
