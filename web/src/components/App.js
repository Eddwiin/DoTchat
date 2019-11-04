import React, { lazy, Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HeaderComponent from './layouts/header';
import INITIAL_APP_ROUTES from './../utils/configs/route.config';
import './App.css';

const AuthContainer = lazy(() => import('./auth/auth'))
const ChatContainer = lazy(() => import('./chat/chat.container'));

const App = () => {
  return (
    <div>
        <HeaderComponent></HeaderComponent>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
              <Route path={INITIAL_APP_ROUTES.AUTH} component={AuthContainer}></Route>
              <Route exact path={INITIAL_APP_ROUTES.CHAT} component={ChatContainer}></Route>
              <Redirect from="/" to={INITIAL_APP_ROUTES.DEFAULT}></Redirect>
          </Switch>
      </Suspense>
    </div>
  )
}

export default App;
