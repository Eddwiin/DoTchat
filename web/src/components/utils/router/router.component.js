import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContainer from '../../auth/auth.container';
import NotFoundComponent from '../NotFound/not-found.component';
import ChatContainer from '../../chat/chat.container';

export default class RouterComponent extends React.Component {
    render() {
     return (
        <Switch>
            <Route exact path="/auth/:action" component={AuthContainer}></Route>
            <Route exact path="/home/chat" component={ChatContainer}></Route>
            <Redirect from="/" to="/auth/login"></Redirect>
            <Route component={NotFoundComponent}></Route>
        </Switch>
     )   
    }
}


