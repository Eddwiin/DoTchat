import React, { lazy } from "react";
import Button from "@/components/shared/button";
import { Route } from "react-router-dom";

import "@scss/components/auth/auth-container.scss";

const Login = lazy(() => import("./login"));

const AuthContainer = () => (
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
);

export default AuthContainer;
