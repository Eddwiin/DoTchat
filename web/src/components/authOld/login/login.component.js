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
            <div className="row">
                <div class="col-12 offset-3">
                    <div className="row">
                        <div className="xs-8 md-12">
                            <InputComponent config={{
                                controlId: 'emailCtrl',
                                label: 'Email',
                                type: 'email',
                                name: 'email',
                                mdCol: '7'
                            }}
                            changeHandler={this.handleChangeEvent} ></InputComponent> 
                        </div>
                    </div>

                <div className="row">
                    <div className="col-xs-8 col-md-12">
                        <InputComponent config={{
                            controlId: 'passwordCtrl',
                            label: 'Password',
                            type: 'password',
                            name: 'password',
                            mdCol: '7'
                        }}
                        changeHandler={this.handleChangeEvent} ></InputComponent> 
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Link to='/auth/forgot-password' onClick={this.props.loadComponent} >Password forgot ?</Link>
                    </div>
                </div>

                <Row className="p-3">
                    <Col>
                        <Button onClick={(e) => this.props.submit(e, {...this.state.user})} 
                                disabled={this.canBeSubmitted()}
                                className="w-50" variant="primary" type="submit">Log in</Button>
                    </Col>
                </Row> 

            </div>
        </div>
        )
    }
}
