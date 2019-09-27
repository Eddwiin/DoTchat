import React from 'react';
import { Container, Form } from 'react-bootstrap';
import AuthRouterComponent from './auth.router';

export default class AuthContainer extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <AuthRouterComponent></AuthRouterComponent>
                    </Form>
                </Container>
            </div>
        )
    }
}

