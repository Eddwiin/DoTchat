const async = require("async");
const User = require("./../models/user");
const ObjectId = require("mongoose").Types.ObjectId;

const UserController = {};

UserController.saveUser = (req, res, next) => {
  async.waterfall(
    [
      done => {
        User.findOne({ email: req.body.user.email }).exec((err, user) => {
          if (user) {
            return res.status(200).json({ isUserExist: true });
          }
          done(err);
        });
      },
      done => {
        const user = new User({
          _id: ObjectId(),
          lastName: req.body.user.lastName,
          firstName: req.body.user.firstName,
          email: req.body.user.email,
          password: req.body.user.password
        });

        user.save((err, userAdded) => {
          if (err) {
            done(err);
          }
          return res.status(200).json(true);
        });
      }
    ],
    err => res.status(500).json(err)
  );
};

UserController.updatePassword = (req, res, next) => {
  User.findOneAndUpdate(
    { _id: ObjectId(req.body.user._id) },
    { password: req.body.user.password }
  ).exec((err, updated) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(updated);
  });
};

module.exports = UserController;
