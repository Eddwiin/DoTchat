import React from 'react';
import { Container, Form, Row, Col, Image } from 'react-bootstrap';
import AuthRouterComponent from './auth.router';
import './auth.scss';
import authLogo from './../../assets/images/auth-logo.png'

export default class AuthContainer extends React.Component {

    render() {
        return (
            <Container>
                <div className="offset-3 card card-signin my-5">
                    <div className="card-body">
                        <Form>
                            <Row>
                                <Col className="pb-4" xs={{ span: 8, offset: 2}} md={{ span: 6, offset: 5 }}>
                                    <Image src={authLogo} className="w-25" alt="logo" roundedCircle />
                                </Col>
                            </Row>
                            <AuthRouterComponent></AuthRouterComponent>
                        </Form>
                    </div>
                </div>
            </Container>
        )
    }
}

