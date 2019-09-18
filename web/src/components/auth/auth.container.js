import React from 'react';
import LoginComponent from './login/login.component';
import RegistrationComponent from './registration/registration.component';
import NotFoundComponent from '../NotFound/not-found.component';
import { Container } from 'react-bootstrap';

export default class AuthContainer extends React.Component {

    loadComponentByAction() {
        const action = this.props.match.params.action;
        return (
            <div>
                {( () => {
                    switch(action) {
                        case 'login':
                            return <LoginComponent></LoginComponent>;
                        case 'registration':
                            return <RegistrationComponent></RegistrationComponent>;
                        default: 
                            return <NotFoundComponent></NotFoundComponent>;
                    }
                })()}
            </div>
        )
    }

    render() {

        return (
            <div>
                <Container>
                    {this.loadComponentByAction()}
                </Container>
            </div>
        )
    }
}

