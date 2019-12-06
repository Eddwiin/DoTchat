const User = require("./../models/user");
const ObjectId = require("mongoose").Types.ObjectId;
const { validationResult } = require("express-validator");
const helpers = require("./../utils/helpers");
const UserController = {};

UserController.updatePassword = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return helpers.paramsValidationErr(res, errors);
  }

  User.findOneAndUpdate(
    { _id: ObjectId(req.body._id) },
    { password: req.body.password }
  ).exec((err, updated) => {
    if (err) helpers.catchError(res, err);

    return res.status(200).json(updated);
  });
};

module.exports = UserController;
