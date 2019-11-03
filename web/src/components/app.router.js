import React, { lazy, Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const AuthContainer = lazy(() => import('./auth/auth.container'))
const ChatContainer = lazy(() => import('./chat/chat.container'));

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
             <Route exact path="/auth/:action" component={AuthContainer}></Route>
             <Route exact path="/home/chat" component={ChatContainer}></Route>
             <Redirect from="/" to="/auth/signIn"></Redirect>
         </Switch>
    </Suspense>
)

export default AppRouter;


