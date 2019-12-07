const { check } = require("express-validator");
const UserController = require("./../controllers/user");

module.exports = app => {
  app.put(
    "/public/updatePassword",
    [check("password").isLength({ min: 10 })],
    UserController.updatePassword
  );
};
