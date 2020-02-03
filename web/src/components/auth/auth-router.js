import React, { lazy } from "react";
import APP_ROUTES from "../../utils/route-config";
import "@scss/components/auth/auth-router.scss";
import { Route } from "react-router-dom";

const Login = lazy(() => import("@/components/auth/login"));
const Registration = lazy(() => import("@/components/auth/registration"));
const ForgetPassword = lazy(() => import("@/components/auth/forget-password"));
const ResetPassword = lazy(() => import("@/components/auth/reset-password"));

const AuthRouter = props => {
  return (
    <div>
      <Route
        exact
        path={APP_ROUTES.SIGNIN}
        render={() => (
          <div className="auth-router">
            <Login></Login>
          </div>
        )}
      ></Route>

      <Route
        exact
        path={APP_ROUTES.SIGNUP}
        render={() => (
          <div className="auth-router">
            <Registration></Registration>
          </div>
        )}
      ></Route>

      <Route
        exact
        path={APP_ROUTES.FORGETPASSWORD}
        render={() => (
          <div className="auth-router">
            <ForgetPassword></ForgetPassword>
          </div>
        )}
      ></Route>

      <Route
        exact
        path={APP_ROUTES.RESETPASSWORD}
        render={() => (
          <div className="auth-router">
            <ResetPassword></ResetPassword>
          </div>
        )}
      ></Route>
    </div>
  );
};

export default AuthRouter;
