import React, { lazy } from "react";
import Button from "@/components/shared/button";

import "@scss/components/auth/auth-container.scss";

const Popup = lazy(() => import("@/components/shared/popup"));
const Login = lazy(() => import("@/components/auth/login"));

const openPopup = props => {
  if (props.location.pathname === "/auth/login") {
    return (
      <Popup>
        <Login></Login>
      </Popup>
    );
  }
};

const AuthContainer = props => (
  <div>
    <div className="view-index">
      <div className="view-index__body">
        <h1 className="view-index__title">
          <span className="view-index__title--main">DotChat</span>
          <span className="view-index__title--sub">
            Communicate with the world
          </span>
        </h1>
        <Button label="Sign in" path="/auth/login" />
      </div>
    </div>

    {openPopup(props)}
  </div>
);

export default AuthContainer;
