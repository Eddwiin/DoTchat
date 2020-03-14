import React, { lazy, useState, useEffect } from "react";
import { Button } from "@/components/shared";
import "./auth-container.scss";
import APP_ROUTES from "../../utils/route-config";
import { Route, useRouteMatch } from 'react-router-dom';

const Login = lazy(() => import("./login/login"));
const Registration = lazy(() => import("./registration/registration"));
const ForgetPassword = lazy(() => import("./forget-password/forget-password"));
const ResetPassword = lazy(() => import("./reset-password/reset-password"));

const AuthContainer = props => {
  const [isOpenLayout, setIsOpenLayout] = useState(false);
  const route = useRouteMatch();

  const loadComponent = () => {
    console.log(APP_ROUTES.RESETPASSWORD);
    return (
      <React.Fragment>
        <Route exact path={APP_ROUTES.SIGNIN} component={Login}></Route>
        <Route exact path={APP_ROUTES.SIGNUP} component={Registration}></Route>
        <Route exact path={APP_ROUTES.FORGETPASSWORD} component={ForgetPassword}></Route>
        <Route exact path={APP_ROUTES.RESETPASSWORD} component={ResetPassword}></Route>
      </React.Fragment>
    )
  };

  useEffect(() => {
    if (route.url !== "auth") {
      setIsOpenLayout(true);
    }   
  }, [route]);

  const openLayout = event => {
    props.history.push(APP_ROUTES.SIGNIN);
    setIsOpenLayout(true);
  };

  const closeLayout = () => {
    props.history.push(APP_ROUTES.AUTH);
    setIsOpenLayout(false);
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
          onClick={openLayout}
          label="Start now"
          color="light"
          isAnimate={true}
        />
      </div>

      {isOpenLayout && (
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
