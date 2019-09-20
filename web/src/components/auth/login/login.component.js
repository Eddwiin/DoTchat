import React from 'react';
import {  Button } from 'react-bootstrap';
import { InputComponent } from '../../generics/input.component';
import { emailValidator, passwordValidator } from './../../../core/validator.form';

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

                <InputComponent config={{
                    controlId: 'emailCtrl',
                    label: 'Email',
                    type: 'email',
                    name: 'email',
                }}
                changeHandler={this.handleChangeEvent} ></InputComponent> 

                <InputComponent config={{
                    controlId: 'passwordCtrl',
                    label: 'Password',
                    type: 'password',
                    name: 'password',
                }}
                changeHandler={this.handleChangeEvent} ></InputComponent> 

                <Button onClick={this.submit.bind(this)} disabled={this.canBeSubmitted()} variant="primary" type="submit">Log in</Button>

            </div>
        )
    }
}

