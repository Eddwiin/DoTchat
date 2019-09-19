import React from 'react';
import LoginComponent from './login/login.component';
import RegistrationComponent from './registration/registration.component';
import { Container, Form } from 'react-bootstrap';
import NotFoundComponent from './../utils/NotFound/not-found.component';

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
                    <Form>
                        {this.loadComponentByAction()}
                    </Form>
                </Container>
            </div>
        )
    }
}

