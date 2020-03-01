import React, { lazy, useState } from "react";
import { Button } from "@/components/shared";
import "./auth-container.scss";

const Login = lazy(() => import("./login/login"));
const Registration = lazy(() => import("./registration/registration"));
const ForgetPassword = lazy(() => import("./forget-password/forget-password"));
const ResetPassword = lazy(() => import("./reset-password/reset-password"));

const AuthContainer = props => {
  const [openLayout, setOpenLayout] = useState(false);

  const loadComponent = () => {
    const { hash } = window.location;

    switch (hash) {
      case "#sign-in":
        return <Login></Login>;

      case "#sign-up":
        return <Registration></Registration>;

      case "#forget-password":
        return <ForgetPassword></ForgetPassword>;

      case "#reset-password":
        return <ResetPassword></ResetPassword>;

      default:
        return setOpenLayout(false);
    }
  };

  const closeLayout = () => {
    props.history.push("");
    loadComponent();
  };

  return (
    <div className="view-index">
      <div className="view-index__body">
        <h1 className="view-index__title">
          <span className="view-index__title--main">DotChat</span>
          <span className="view-index__title--sub">
            Communicate with the world
          </span>
        </h1>
        <Button
          onClick={() => setOpenLayout(true)}
          label="SIGN IN"
          path="#sign-in"
          isAnimate={true}
        />
      </div>

      {openLayout && (
        <div className="view-index__layout">
          <span onClick={closeLayout} className="view-index__layout__close">
            &times;
          </span>
          {loadComponent()}
        </div>
      )}
    </div>
  );
};

export default AuthContainer;
