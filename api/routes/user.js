const UserController = require("./../controllers/user");

module.exports = app => {
  app.put("/public/updatePassword", UserController.updatePassword);
};
