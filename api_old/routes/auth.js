const { check } = require("express-validator");

const AuthController = require("../controllers/auth");

module.exports = app => {
  app.post(
    "/auth/login",
    [check("email").isEmail(), check("password").isLength({ min: 10 })],
    AuthController.signIn
  );

  app.get("/public/isAuth", AuthController.isAuth);

  app.get("/private/loggout", AuthController.signOut);

  app.get(
    "/auth/forgotPassword",
    [check("email").isEmail()],
    AuthController.forgotPassword
  );

  app.post(
    "/auth/saveUser",
    [
      check("email").isEmail(),
      check("pseudo")
        .isAlphanumeric()
        .isLength({ min: 3, max: 30 }),
      check("password").isLength({ min: 10 })
    ],
    AuthController.saveUser
  );

  app.get(
    "/auth/isTokenResetPassValid/:token",
    AuthController.isTokenResetPassValid
  );
};
