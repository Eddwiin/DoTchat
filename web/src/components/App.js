import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import APP_ROUTES from './../configs/routes';

const AuthContainer = lazy(() => import('./auth/auth.container'));
const Error404 = lazy(() => import("./shared").then(module => ({ default: module.Error404})));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to={APP_ROUTES.AUTH}></Redirect>}></Route>
          <Route path={APP_ROUTES.AUTH}  component={AuthContainer}></Route>
          <Route component={Error404}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
