const AuthController = require("../controllers/auth");

module.exports = app => {
  app.get("/forgotPassword", AuthController.forgotPassword);
  app.get(
    "/isTokenResetPassValid/:token",
    AuthController.isTokenResetPassValid
  );
};
