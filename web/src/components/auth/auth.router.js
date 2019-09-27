import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginComponent from './login/login.component';
import RegistrationComponent from './registration/registration.component';
import NotFoundComponent from '../generics/not-found/not-found.component';
import ForgetPassword from './forget-password/forget-password.component';

export default class AuthRouterComponent extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/auth/login" component={LoginComponent}></Route>
                <Route exact path="/auth/registration" component={RegistrationComponent}></Route>
                <Route exact path="/auth/forget-password" component={ForgetPassword}></Route>
                <Route component={NotFoundComponent}></Route>
            </Switch>
        )
    }
}