import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const AuthContainer = lazy(() => import("./auth/auth-container"));
const Error404 = lazy(() => import("./shared/error-404"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/auth" />}></Route>
        <Route path="/auth" component={AuthContainer}></Route>
        <Route component={Error404}></Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
