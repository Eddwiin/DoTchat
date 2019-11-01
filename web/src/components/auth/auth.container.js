import React, { lazy } from 'react';
import authLogo from './../../assets/images/auth-logo.png'
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import './auth.scss';

const LoginComponent = lazy(() => import('./login/login.component'));
const RegistrationComponent = lazy(() => import('./registration/registration.component'));
const ForgotPasswordComponent = lazy(() => import('./forgot-password/forgot-password.component'));

export default class AuthContainer extends React.Component {

    loadComponent() {

        switch (this.props.match.params.action) {

            case 'login':
                return <LoginComponent loadComponent={this.loadComponent.bind(this)}/>
            
            case 'registration':
                return <RegistrationComponent {...this.props}/>

            case 'forgot-password':
                return <ForgotPasswordComponent />
            
            default:
                this.props.history.push('/error404');
                break;
        }

    }

    isInputValid(fn) {
        if (fn) 
            return 'form-control is-valid';
        return 'form-control is-invalid';
    }

    render() {
        return(
            <Container>
                <Col md={{ offset: 3}}>
                    <Card className="card-signin my-5">
                        <Card.Body>
                            <Row>
                                <Col xs={{ span: 8, offset: 8}} md={{ span: 6, offset: 5}} className="pb-4">
                                    <Image src={authLogo} className="w-25" alt="logo" roundedCircle />
                                </Col>
                            </Row>

                            { this.loadComponent() }
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        )
    }
}