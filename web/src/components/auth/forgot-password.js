import React from 'react';
import { emailValidator } from '../../core/validators/auth-form.validation';
import { Row, Col, Form, Button } from 'react-bootstrap';

import API from './../../core/services/api.service';

const INITIAL_STATE = {
    email: '',
    message: ''
}

export default class ForgotPasswordComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.canBeSubmitted = this.canBeSubmitted.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    canBeSubmitted() {
        return (
            !emailValidator(this.state.email)
        )
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value })
    }

    handleSubmit() {
        API.get(`forgotPassword/${this.state.email}`)
            .then(res => {
                this.setState({ message: this.props.loadMessage(`Click here to reset your password : ${res.data.urlToReset}`, 'info')})
            }).catch(err => {
                this.setState({ message: this.props.loadMessage(`Something wrong : ${err}`) })
            })   
    }

    render() {
        return (
            <Form onSubmit={ e => {
                e.preventDefault();
                this.handleSubmit()
            }}>
             {this.state.message}
                <Col md={{ offset: 2}}>
                    <Form.Group controlId="emailCtrl">
                        <Form.Label column md="10">Email</Form.Label>
                        <Col md="8">
                            <Form.Control type="email"  name="email" onChange={this.handleChange}
                                            isValid={emailValidator(this.state.email)} isInvalid={!emailValidator(this.state.email)}/>
                        </Col>
                    </Form.Group>
                </Col>

                <Row className="p-3">
                    <Col md={{ offset: 2 }}>
                        <Button  variant="primary" type="submit" disabled={this.canBeSubmitted()} 
                                 className="w-75" style={{ marginLeft: '10px' }}>Send</Button>
                    </Col>
                </Row> 
        </Form>
    )}
}

