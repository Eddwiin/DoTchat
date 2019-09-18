import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            }
        }
    }

    handleChange(e) {
        const user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({ user });
    }

    render() {
        return (
            <Form>
                <Form.Group as={Row} controlId="emailCtrl">
                    <Col md="4">
                        <Form.Label>Email</Form.Label>
                            <Form.Control
                                column md="4"
                                type="email"
                                name="email"
                                value={this.state.user.email}
                                onChange={this.handleChange.bind(this)}
                            />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="passwordCtrl">
                    <Col md="4">
                        <Form.Label column md="2">Password</Form.Label>
                            <Form.Control
                                column md="4"
                                type="password"
                                name="password"
                                value={this.state.user.password}
                                onChange={this.handleChange.bind(this)}
                            />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit">Log in</Button>
            </Form>
        )
    }
}

