import React, { lazy, Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';

const LoginComponent = lazy(() => import('./login/login.component'))
const RegistrationComponent = lazy(() => import('./registration/registration.component'))
const ForgetPassword = lazy(() => import('./forget-password/forget-password.component'))
const NotFoundComponent = lazy(() => import('../generics/not-found/not-found.component'));

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/auth/login" component={LoginComponent}></Route>
            <Route exact path="/auth/registration" component={RegistrationComponent}></Route>
            <Route exact path="/auth/forget-password" component={ForgetPassword}></Route>
            <Route component={NotFoundComponent}></Route>
        </Switch>
    </Suspense>
)

export default AppRouter;