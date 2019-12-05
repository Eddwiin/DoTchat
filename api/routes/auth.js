const AuthController = require("../controllers/auth");

module.exports = app => {
  app.post("/auth/signIn", AuthController.signIn);
  app.get("/public/isAuth", AuthController.isAuth);
  app.get("/private/signOut", AuthController.signOut);
  app.get("/auth/forgotPassword", AuthController.forgotPassword);
  app.post("/auth/saveUser", AuthController.saveUser);
  app.get(
    "/auth/isTokenResetPassValid/:token",
    AuthController.isTokenResetPassValid
  );
};
