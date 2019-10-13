import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import { InputComponent } from '../../generics/input/input.component';
import { emailValidator, passwordValidator } from '../../../core/validators/auth-form.validation';
import { Link } from 'react-router-dom';
import  ButtonSubmitComponent from './../buttonSubmit/buttonSubmit.component';

export default class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonLabel: 'Log in',
            buttonClass: 'w-50',
            user: {
                email: '',
                password: '',
            },
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
    
    render() {
        const ButtonSubmit = ButtonSubmitComponent({...this.state}, this.canBeSubmitted.bind(this));

        return (
            <Row>
                <Col md={{ span: 12, offset: 3}}>
                    <Row>
                        <Col xs={8} md={12}>
                            <InputComponent config={{
                                controlId: 'emailCtrl',
                                label: 'Email',
                                type: 'email',
                                name: 'email',
                                mdCol: '7'
                            }}
                            changeHandler={this.handleChangeEvent} ></InputComponent> 
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={8} md={12}>
                            <InputComponent config={{
                                controlId: 'passwordCtrl',
                                label: 'Password',
                                type: 'password',
                                name: 'password',
                                mdCol: '7'
                            }}
                            changeHandler={this.handleChangeEvent} ></InputComponent> 
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Link to='/auth/forget-password'>Password forgot ?</Link>
                        </Col>
                    </Row>
                    <ButtonSubmit />
                </Col>
            </Row>
        )
    }
}

