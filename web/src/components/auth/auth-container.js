import React, { useState } from "react";
import { Button } from "@/components/shared";
// import AuthRouter from "./auth-router";
import "./auth-container.scss";

const AuthContainer = props => {
  const [openLayout, setOpenLayout] = useState(false);

  setTimeout(() => {
    console.log("test", openLayout);
  }, 2000);

  return (
    <div className="view-index">
      <div className="view-index__body">
        <h1 className="view-index__title">
          <span className="view-index__title--main">DotChat</span>
          <span className="view-index__title--sub">
            Communicate with the world
          </span>
        </h1>
        <Button label="SIGN IN" path="#sign-in" isAnimate={true} />
      </div>

      <div className="view-index__layout">Test</div>
    </div>
  );
};

export default AuthContainer;
