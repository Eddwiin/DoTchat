import React, { lazy, useEffect, useState } from "react";
import { Button } from "@/components/shared";
import "./auth-container.scss";
import { useHistory, useLocation } from 'react-router-dom';

const Layout = lazy(() => import('../shared').then(module => ({ default: module.Layout })));
const Login = lazy(() => import("./login"));
const Registration = lazy(() => import("./registration"));
const ForgetPassword = lazy(() => import("./forget-password"));
const ResetPassword = lazy(() => import("./reset-password"));

const AuthContainer = () => {

  const history = useHistory();
  const location = useLocation();
  const [type, setType] = useState("");

  useEffect(() => {
    setType(new URLSearchParams(location.search).get("type"));
  }, [location])

  const loadComponent = () => {

    switch(type) {

      case 'login':
        return <Login configQueryParams={configQueryParams} />;

      case 'registration':
        return <Registration configQueryParams={configQueryParams}  />;
      
      case 'forget-password': 
        return <ForgetPassword configQueryParams={configQueryParams} />;

      case "reset-password":
        return <ResetPassword configQueryParams={configQueryParams} />;
      
      default: 
        return setType(undefined);
    }
  }

  const configQueryParams = (queryParams) => {
    
    switch(queryParams) {

      case 'login': 
        history.replace({ search: "?type=login"});
        break;

      case 'registration': 
        history.replace({ search: "?type=registration"});
        break;

      case 'forget-password': 
        history.replace({ search: "?type=forget-password"});
        break;

      case 'reset-password': 
        history.replace({ search: "?type=reset-password"});
        break;
      
      default: 
        history.replace({ search: "" });
        break;
    }
  }

  const closeLayout = () => {
    setType("");
    history.replace({ search: '' })
    loadComponent();
  }
  
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
            onClick={() => { setType("login");  configQueryParams("login") }}
            label="Start now"
            color="light"
            isAnimate={true}
          />
        </div>
      </div>

    
      {type && <div className="container__layout">
          <Layout closeLayout={closeLayout} >
              { loadComponent() }
          </Layout>
        </div> }   
    </div>
  );
};

export default AuthContainer;
