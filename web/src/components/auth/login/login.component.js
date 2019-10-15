import React from 'react';
import {  Row, Col, Button } from 'react-bootstrap';
import { InputComponent } from '../../generics/input/input.component';
import { Link } from 'react-router-dom';
import { emailValidator, passwordValidator } from '../../../core/validators/auth-form.validation';

export default class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            }
        }

        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }

    canBeSubmitted() {
        return (
            !emailValidator(this.state.user.email) ||
            !passwordValidator(this.state.user.password)
        )
    }

    handleChangeEvent(event) {
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    render() {
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
                        <Link to='/auth/forgot-password' onClick={this.props.loadComponent} >Password forgot ?</Link>
                    </Col>
                </Row>

                <Row className="p-3">
                    <Col>
                        <Button onClick={(e) => this.props.submit(e, {...this.state.user})} 
                                disabled={this.canBeSubmitted()}
                                className="w-50" variant="primary" type="submit">Log in</Button>
                    </Col>
                </Row> 

            </Col>
        </Row>
        )
    }
}
