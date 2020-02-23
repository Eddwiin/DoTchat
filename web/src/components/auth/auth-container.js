import React from "react";
import { Button } from "@/components/shared";
import APP_ROUTES from "../../utils/route-config";
// import AuthRouter from "./auth-router";
import "./auth-container.scss";

const AuthContainer = props => {
  return (
    <div>
      <div className="view-index">
        <div className="view-index__body">
          <h1 className="view-index__title">
            <span className="view-index__title--main">DotChat</span>
            <span className="view-index__title--sub">
              Communicate with the world
            </span>
          </h1>
          <Button label="SIGN IN" path={APP_ROUTES.SIGNIN} isAnimate={true} />
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
