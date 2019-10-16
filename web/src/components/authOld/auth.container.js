import React from 'react';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import authLogo from './../../assets/images/auth-logo.png'
import './auth.scss';
import LoginComponent from './login/login.component';
import RegistrationComponent from './registration/registration.component';
import ForgotPasswordComponent from './forgot-password/forgot-password.component';
import NotFoundComponent from '../generics/not-found/not-found.component';

export default class AuthContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    loadComponent() {

        switch (this.props.match.params.action) {
        
            case 'login':
                return <LoginComponent 
                                loadComponent={this.loadComponent.bind(this)}
                                submit={this.submit.bind(this)} />
            
            case 'registration':
                return <RegistrationComponent submit={this.submit.bind(this)}  />

            case 'forgot-password':
                return <ForgotPasswordComponent submit={this.submit.bind(this)} />
            
            default:
                return <NotFoundComponent />
        }

    }


    submit(event, user) {
        console.log(user);
        event.preventDefault();
    }

    render() {
        return(
            <Container>
                <div className="offset-3 card card-signin my-5">
                    <div className="card-body">
                        <Row>
                            <Col className="pb-4" xs={{ span: 8, offset: 2}} md={{ span: 6, offset: 5 }}>
                                <Image src={authLogo} className="w-25" alt="logo" roundedCircle />
                            </Col>
                        </Row>

                        <Form>
                            { this.loadComponent() }
                        </Form>
                    </div>
                </div>
            </Container>
        )
    }
}