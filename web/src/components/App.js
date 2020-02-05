import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import APP_ROUTES from "../utils/route-config";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { Provider } from "react-redux";
import rootReducer from "@/redux/reducers";
import { createStore } from "redux";

const AuthContainer = lazy(() => import("./auth/auth-container"));
const HomeContainer = lazy(() => import("./chat/home-container"));
const Error404 = lazy(() => import("./shared/error-404"));

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/auth" />}></Route>
          <Route path={APP_ROUTES.AUTH} component={AuthContainer}></Route>
          <Route path={APP_ROUTES.HOME} component={HomeContainer}></Route>
          <Route component={Error404}></Route>
        </Switch>
      </Suspense>
    </Router>

    <ToastsContainer store={ToastsStore} />
  </Provider>
);

export default App;
