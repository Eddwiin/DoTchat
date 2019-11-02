import React, { useState } from 'react';
import { emailValidator } from '../../../core/validators/auth-form.validation';
import { Row, Col, Form, Button } from 'react-bootstrap';
import API from './../../../core/services/api.service';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const canBeSubmitted = () => {
        return (
            !emailValidator(email)
        )
    }

    const handleSubmit = () => {
        API.get(`forgotPassword/${email}`)
            .then(console.log)
            .catch(console.error)
    }

    return (
            <Form onSubmit={ e => {
                e.preventDefault();
                handleSubmit()
            }}>
                <Row>
                    <Col md={{ span: 8, offset: 2}}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"  name="email" onChange={ e => setEmail(e.target.value) }
                                          isValid={emailValidator(email)} isInvalid={!emailValidator(email)}/>
                        </Form.Group>
                    </Col> 
                </Row>


                <Row className="p-3">
                    <Col md={{ offset: 2 }}>
                        <Button  variant="primary" type="submit" disabled={canBeSubmitted()} 
                                 className=" w-75">Send</Button>
                    </Col>
                </Row> 
        </Form>
    )
}

export default ForgotPassword;