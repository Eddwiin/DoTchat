import React, { useState } from 'react';
import { emailValidator } from '../../../core/validators/auth-form.validation';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { SHA256 } from 'crypto-js';

import API from './../../../core/services/api.service';

const ForgotPassword = () => {
    let [email, setEmail] = useState('');

    const canBeSubmitted = () => {
        return (
            !emailValidator(email)
        )
    }

    const handleClick = (e) => {
        e.preventDefault();
        email = SHA256(email).toString()
    
        API.get(`forgotPassword/${email}`)
            .then((data) => {
                console.log(data);
            });
    }
    return (
            <Form onSubmit={handleClick}>
                <Col md={{ offset: 2 }}>
                    <Form.Group controlId="email">
                        <Form.Label column md="3">Email</Form.Label>
                        <Col md={{ span: 8}}>
                            <Form.Control md={{ span: 8}} type="email"  name="email" value={email}
                                 onChange={ e => setEmail(e.target.value) } isValid={emailValidator(email)}
                                 isInvalid={!emailValidator(email)} />
                        </Col>
                    </Form.Group >
                </Col>


                <Row className="p-3 pl-4">
                    <Col md={{ offset: 2}}>
                        <Button variant="primary" type="submit" onClick={handleClick}
                                disabled={canBeSubmitted()} style={{ width: '80%' }}>Send</Button>
                    </Col>
                </Row> 
        </Form>
    )
}

export default ForgotPassword;