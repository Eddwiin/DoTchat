import React, { lazy } from "react";
import APP_ROUTES from "../../utils/route-config";
import { Route } from "react-router-dom";

const Modal = lazy(() => import("@/components/shared/modal"));
const Login = lazy(() => import("@/components/auth/login"));
const Registration = lazy(() => import("@/components/auth/registration"));
const ForgetPassword = lazy(() => import("@/components/auth/forget-password"));
const ResetPassword = lazy(() => import("@/components/auth/reset-password"));

const AuthRouter = props => {
  const closeModal = () => {
    const { history } = props;
    history.push(APP_ROUTES.AUTH);
  };

  return (
    <div>
      <Route
        exact
        path={APP_ROUTES.SIGNIN}
        render={() => (
          <Modal closeModal={closeModal} title="Login">
            <Login></Login>
          </Modal>
        )}
      ></Route>

      <Route
        exact
        path={APP_ROUTES.SIGNUP}
        render={() => (
          <Modal closeModal={closeModal} title="Registration">
            <Registration></Registration>
          </Modal>
        )}
      ></Route>

      <Route
        exact
        path={APP_ROUTES.FORGETPASSWORD}
        render={() => (
          <Modal closeModal={closeModal} title="Password forget ?">
            <ForgetPassword></ForgetPassword>
          </Modal>
        )}
      ></Route>

      <Route
        exact
        path={APP_ROUTES.RESETPASSWORD}
        render={() => (
          <Modal closeModal={closeModal} title="Reset password">
            <ResetPassword></ResetPassword>
          </Modal>
        )}
      ></Route>
    </div>
  );
};

export default AuthRouter;
