import React from 'react';
import { Container, Form, Row, Col, Image } from 'react-bootstrap';
import AuthRouterComponent from './auth.router';
import './auth.scss';
import authLogo from './../../assets/images/auth-logo.png'

export default class AuthContainer extends React.Component {

    render() {
        return (
            <Container>
                <div className="p-5">
                    <Form>
                        <Row>
                            <Col xs={{ span: 8, offset: 2}} md={{ span: 6, offset: 4 }}>
                                <Image src={authLogo} className="w-25" alt="logo" roundedCircle />
                            </Col>
                        </Row>
                        <AuthRouterComponent></AuthRouterComponent>
                    </Form>
                </div>
            </Container>
        )
    }
}

