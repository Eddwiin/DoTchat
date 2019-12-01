const AuthController = require("../controllers/auth");

module.exports = app => {
  app.post("/public/signIn", AuthController.signIn);
  app.get("/isAuth", AuthController.isAuth);
  app.get("/private/signOut", AuthController.signOut);
  app.get("/public/forgotPassword", AuthController.forgotPassword);
  app.get(
    "/public/isTokenResetPassValid/:token",
    AuthController.isTokenResetPassValid
  );
};
