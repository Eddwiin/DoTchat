import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import APP_ROUTES from "../utils/route-config";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { Provider } from "react-redux";
import rootReducer from "@/redux/reducers";
import { createStore } from "redux";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import api from "../utils/api";

const AuthContainer = lazy(() => import("./auth/auth-container"));
const HomeContainer = lazy(() => import("./chat/home-container"));
const Error404 = lazy(() => import("./shared").then(module => ({ default: module.Error404})));

const store = createStore(rootReducer);

const requireLogin = (to, from, next) => {
  console.log("requireLogin",)
  api.get(APP_ROUTES.GET_PROFILE, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token") 
    }
  })
  .then(({ data: { _id } }) => {
    console.log({ _id })
    if (_id) {
      next.redirect(APP_ROUTES.HOME)
    } else {
      localStorage.removeItem("access_token");
      next.redirect(APP_ROUTES.AUTH)
    }
    
  })
  .catch(_ => {
    localStorage.removeItem("access_token");
    next.redirect(APP_ROUTES.AUTH)
  })
}


const App = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <GuardProvider guards={[requireLogin]}>
          <Switch>
            <GuardedRoute exact path="/" render={() => <Redirect to={APP_ROUTES.AUTH} />}></GuardedRoute>
            <GuardedRoute exact path={APP_ROUTES.AUTH} component={AuthContainer}></GuardedRoute>
            <GuardedRoute exact path={APP_ROUTES.HOME} component={HomeContainer} meta={{ auth: true }}></GuardedRoute>
            <Route exact path={APP_ROUTES.ERROR} component={Error404}></Route>
            <Redirect to={APP_ROUTES.ERROR}></Redirect>
          </Switch>
        </GuardProvider>
      </Suspense>
    </Router>

    <ToastsContainer store={ToastsStore} />
  </Provider>
);

export default App;
