import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContainer from '../../auth/auth.container';
import NotFoundComponent from '../NotFound/not-found.component';

export default class RouterComponent extends React.Component {
    render() {
     return (
        <Switch>
            <Route exact path="/auth/:action" component={AuthContainer}></Route>
            <Redirect from="/" to="/auth/login"></Redirect>
            <Route component={NotFoundComponent}></Route>
        </Switch>
     )   
    }
}

