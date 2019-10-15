import React from 'react';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import AppRouter from './auth.router';
import './auth.scss';
import authLogo from './../../assets/images/auth-logo.png'

export default class AuthContainer extends React.Component {

    submit(event) {
        console.log("submit auth");
        event.preventDefault();
    }
    render() {
        return (
            <Container>
                <div className="offset-3 card card-signin my-5">
                    <div className="card-body">
                        <Row>
                            <Col className="pb-4" xs={{ span: 8, offset: 2}} md={{ span: 6, offset: 5 }}>
                                <Image src={authLogo} className="w-25" alt="logo" roundedCircle />
                            </Col>
                        </Row>

                        <Form>
                            <AppRouter></AppRouter>
                        </Form>
                    </div>
                </div>
            </Container>
        )
    }
}

