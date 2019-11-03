import React, { lazy } from 'react';
import authLogo from './../../assets/images/auth-logo.png'
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import './auth.scss';
import { INITIAL_AUTH_ROUTES } from './../../utils/configs/route.config';

const LoginComponent = lazy(() => import('./login/login.component'));
const RegistrationComponent = lazy(() => import('./registration/registration.component'));
const ForgotPasswordComponent = lazy(() => import('./forgot-password/forgot-password.component'));
const Error404Compoennt = lazy(() => import('./../share/error-404.component'));

export default class AuthContainer extends React.Component {

    loadRoutes() {
        return (
            <Switch>
                <Route exact path={INITIAL_AUTH_ROUTES.SIGNIN} render={(props) =>
                     <LoginComponent {...props} />}>
                </Route>
                <Route exact path={INITIAL_AUTH_ROUTES.SIGNUP} render={(props) => 
                    <RegistrationComponent loadMessage={this.loadMessage.bind(this)} />}>
                </Route>
                <Route exact path={INITIAL_AUTH_ROUTES.FORGOTPASSWORD} render={(props) =>
                    <ForgotPasswordComponent loadMessage={this.loadMessage.bind(this)} />}>
                </Route>  
                <Route component={Error404Compoennt}></Route>
            </Switch>
        )
    }

    loadMessage (message, type="danger") {
        return (
            <div className={"alert alert-" + type} role="alert">
               { message }
            </div>
        )
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
                            
                            {this.loadRoutes()}
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        )
    }
}