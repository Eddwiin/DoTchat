import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { SHA256 } from 'crypto-js';

import { emailValidator, passwordValidator } from '../../core/validators/auth-form.validation';
import { INITIAL_AUTH_ROUTES } from './../../utils/configs/route.config';
import API from './../../core/services/api.service';

const INITIAL_STATE = {
    email: '',
    password: '', 
    message: '',
}

export default class LoginCompoennt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};

        this.canBeSubmitted = this.canBeSubmitted.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit() {
        API.post('login', {
            email: this.state.email,
            password: SHA256(this.state.password).toString()
        }).then((user) => {
            
        })
    }

    canBeSubmitted() {
        return (
            !emailValidator(this.state.email) ||
            !passwordValidator(this.state.password)
        )
    }

    render() {
        return (
            <Form onSubmit={ e => {
                e.preventDefault();
                this.handleSubmit();
            }}>
                <Form.Group>
                    <Col md={{ span: 8, offset: 2}}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.email}
                            onChange={this.handleChange}/>
                    </Col>
                </Form.Group>

                <Form.Group>
                    <Col md={{ span: 8, offset: 2}}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password}
                                onChange={this.handleChange}/>
                    </Col>
                </Form.Group> 

                <Row>
                    <Col md={{ offset: 3}} className="p-2">
                        <Link to={INITIAL_AUTH_ROUTES.FORGOTPASSWORD}>Password forgot ?</Link>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ offset: 2}}>
                        <Button variant="primary" className="w-75"  type="submit"
                                disabled={this.canBeSubmitted()}>Sign in</Button>
                    </Col>
                </Row> 
            </Form>
        )
    }

}
