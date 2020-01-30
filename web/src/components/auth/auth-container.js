import React, { useState } from "react";
import Button from "@/components/shared/button";

import "@scss/components/auth/auth-container.scss";
import APP_ROUTES from "../../utils/route-config";
import AuthRouter from "./auth-router";

const AuthContainer = props => {
  const [isOpenModal, setIsOpenModal] = useState(true);

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
          <Button
            onClick={() => setIsOpenModal(!isOpenModal)}
            label="SIGN IN"
            path={APP_ROUTES.LOGIN}
            isAnimate={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
