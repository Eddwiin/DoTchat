const User = require("./../models/user");
const ObjectId = require("mongoose").Types.ObjectId;

const UserController = {};

UserController.updatePassword = (req, res, next) => {
  User.findOneAndUpdate(
    { _id: ObjectId(req.body._id) },
    { password: req.body.user.password }
  ).exec((err, updated) => {
    if (err) helpers.catchError(res, err);

    return res.status(200).json(updated);
  });
};

module.exports = UserController;
