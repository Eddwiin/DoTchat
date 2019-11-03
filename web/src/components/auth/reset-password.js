import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { passwordValidator, passwordsHasSame } from '../../core/validators/auth-form.validation';

const INITIAL_STATE = {
    password: '',
    rPassword: ''
}

export default class ResetPasswordComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};

        this.handleChange = this.handleChange.bind(this);
        this.canBeSubmitted = this.canBeSubmitted.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    canBeSubmitted() {

    }

    render() {
        return (
                <Form>
                    <Col md={{ offset: 2}}>
                        <Form.Group controlId="passwordCtrl">
                            <Form.Label column md="10">Password</Form.Label>
                            <Col md="8">
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} 
                                    isValid={passwordValidator(this.state.password)  && passwordsHasSame(this.state.password, this.state.rPassword) } 
                                    isInvalid={!passwordValidator(this.state.password) || !passwordsHasSame(this.state.password, this.state.rPassword)}
                                ></Form.Control>
                            </Col>
                        </Form.Group>


                        <Form.Group controlId="rPassword">
                            <Form.Label column md="10">Retype password</Form.Label>
                            <Col md="8">
                                <Form.Control type="password" name="rPassword" value={this.state.rPassword} onChange={this.handleChange} 
                                            isValid={passwordValidator(this.state.rPassword) && passwordsHasSame(this.state.password, this.state.rPassword)} 
                                            isInvalid={!passwordValidator(this.state.rPassword) || !passwordsHasSame(this.state.password, this.state.rPassword)} />
                            </Col>
                        </Form.Group>
                    </Col>

                    <Row className="p-3"> 
                        <Col md={{ offset: 2}}>
                            <Button  variant="primary" type="submit"
                                    disabled={this.canBeSubmitted()} style={{ width: '75%', marginLeft: "10px" }}>Reset password </Button>
                        </Col>
                    </Row>
                </Form>
        )
    }
}