const UserController = require("./../controllers/user");

module.exports = app => {
  app.post("/public/saveUser", UserController.saveUser);
  app.put("/public/updatePassword", UserController.updatePassword);
};
