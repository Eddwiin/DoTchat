import React, { lazy, useState, useEffect } from "react";
import { Button } from "@/components/shared";
import "./auth-container.scss";
import APP_ROUTES from "../../utils/route-config";
import { Route, useHistory } from 'react-router-dom';

const Layout = lazy(() => import('./../shared').then(module => ({ default: module.Layout })));
const Login = lazy(() => import("./login"));
const Registration = lazy(() => import("./registration"));
const ForgetPassword = lazy(() => import("./forget-password"));
const ResetPassword = lazy(() => import("./reset-password"));

const AuthContainer = () => {
  const [isOpenLayout, setIsOpenLayout] = useState(false);
  const history = useHistory()

  const loadComponent = () => {
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
    const routeMatched = [APP_ROUTES.SIGNIN, APP_ROUTES.SIGNUP, APP_ROUTES.FORGETPASSWORD, APP_ROUTES.RESETPASSWORD]
                            .includes(history.location.pathname);
    if (routeMatched) {
      setIsOpenLayout(true)
    } else if (!routeMatched && history.location.pathname !== "/auth") {
      history.push(APP_ROUTES.ERROR);
    }
  }, [history, isOpenLayout])

  const openLayout = () => {
    history.push(APP_ROUTES.SIGNIN);
    setIsOpenLayout(true);
  };

  const closeLayout = () => {
    history.push(APP_ROUTES.AUTH)
    setIsOpenLayout(false);
    loadComponent();
  };

  return (
    <div className="container">
      <div className="container__content">
        <h1 className="container__content__title">
        <span className="container__content__title--main">DotChat</span>
          <span className="container__content__title--sub">
            Communicate with the world
          </span>
        </h1>

        <div className="container__content__btn">
          <Button
            onClick={openLayout}
            label="Start now"
            color="light"
            isAnimate={true}
          />
        </div>

      </div>


      {isOpenLayout && <div className="container__layout">
          <Layout closeLayout={closeLayout} >
              { loadComponent() }
          </Layout>
   
        </div> }   
    </div>
  );
};

export default AuthContainer;
