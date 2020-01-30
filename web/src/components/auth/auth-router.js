import React, { lazy, useState } from "react";
import APP_ROUTES from "../../utils/route-config";
import { Route } from "react-router-dom";

const Modal = lazy(() => import("@/components/shared/modal"));
const Login = lazy(() => import("@/components/auth/login"));
const ForgetPassword = lazy(() => import("@/components/auth/forget-password"));

const AuthRouter = props => {
  const closeModal = () => {
    const { history } = props;
    history.push(APP_ROUTES.AUTH);
  };

  return (
    <Modal closeModal={closeModal}>
      <Route exact path={APP_ROUTES.LOGIN} component={Login}></Route>
      <Route
        exact
        path={APP_ROUTES.FORGETPASSWORD}
        component={ForgetPassword}
      ></Route>
    </Modal>
  );
};

export default AuthRouter;
