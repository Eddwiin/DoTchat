import React, { useState } from 'react';
import { emailValidator, passwordValidator } from '../../../core/validators/auth-form.validation';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

const LoginComponent = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const canBeSubmitted = () => {
        return (
            !emailValidator(email) ||
            !passwordValidator(password)
        )
    }

    return (
        <Form>
            <Form.Group>
                <Col md={{ span: 8, offset: 2}}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" 
                        onChange={ e => setEmail(e.target.value) }/>
                </Col>
            </Form.Group>

             <Form.Group>
                <Col md={{ span: 8, offset: 2}}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" 
                            onChange={ e => setPassword(e.target.value )}/>
                </Col>
            </Form.Group> 

            <Row>
                <Col md={{ offset: 3}} className="p-2">
                    <Link to='/auth/forgot-password' onClick={props.loadComponent}>Password forgot ?</Link>
                </Col>
            </Row>

            <Row>
                <Col md={{ offset: 2}}>
                    <Button variant="primary" className="w-75"  type="submit"
                            disabled={canBeSubmitted()}>Log in</Button>
                </Col>
            </Row> 

        </Form>
    )

}

export default LoginComponent;