import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { SHA256 } from 'crypto-js';

import { passwordValidator, passwordsHasSame } from '../../core/validators/auth-form.validation';
import API from '../../core/services/api.service';
import { INITIAL_AUTH_ROUTES } from './../../utils/configs/route.config';
import errorMessage, { passwordChangedMessage } from '../../utils/configs/auth-message.config';

const INITIAL_STATE = {
    _id: '',
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

    async componentDidMount() {
        const { match: { params: { token } }} = this.props;

        await API.get(`isTokenResetPassValid/${token}`)
            .then(res => {
                console.log(res);
                this.setState({ _id: res.data })
            })
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit() {
      
        API.put(`updateUserPassword`, {
            _id: this.state._id,
            password: SHA256(this.state.password).toString()
        }).then(response => {
            if(response) {
                this.props.loadMessage(passwordChangedMessage())
                this.props.history.push(INITIAL_AUTH_ROUTES.SIGNIN);
            } else {
                this.props.loadMessage(errorMessage())
            }
        }).catch(err => this.props.loadMessage(errorMessage()))
    }

    canBeSubmitted() {
        return (
            !passwordValidator(this.state.password) ||
            !passwordValidator(this.state.rPassword) ||
            !passwordsHasSame(this.state.password, this.state.rPassword)
        );
    }

    render() {
        return (
                <Form onSubmit={ e => {
                    e.preventDefault();
                    this.handleSubmit()
                }}>
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