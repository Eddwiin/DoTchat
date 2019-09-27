import React from 'react';
import {  Button, Row, Col } from 'react-bootstrap';
import { InputComponent } from '../../generics/input/input.component';
import { emailValidator, passwordValidator } from '../../../core/auth-form.validation';
import { Link } from 'react-router-dom';

export default class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            }
        }
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }

    handleChangeEvent(e) {
        const user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({ user });
    }

    canBeSubmitted() {
        return (
            !emailValidator(this.state.user.email) ||
            !passwordValidator(this.state.user.password)
        )
    }
    
    submit() {
        console.log("submit");
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <InputComponent config={{
                            controlId: 'emailCtrl',
                            label: 'Email',
                            type: 'email',
                            name: 'email',
                        }}
                        changeHandler={this.handleChangeEvent} ></InputComponent> 
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <InputComponent config={{
                            controlId: 'passwordCtrl',
                            label: 'Password',
                            type: 'password',
                            name: 'password',
                        }}
                        changeHandler={this.handleChangeEvent} ></InputComponent> 
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Link to='/auth/forget-password'>Password forgot ?</Link>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button onClick={this.submit.bind(this)} disabled={this.canBeSubmitted()} variant="primary" type="submit">Log in</Button>
                    </Col>
                </Row>

            </div>
        )
    }
}

