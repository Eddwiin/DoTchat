const UserController = require("./../controllers/user");

module.exports = app => {
  app.post("/saveUser", UserController.saveUser);
  app.put("/updatePassword", UserController.updatePassword);
};
