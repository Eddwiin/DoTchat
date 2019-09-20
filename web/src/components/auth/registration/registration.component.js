import React from 'react';
import { InputComponent } from '../../generics/input.component';
import { Button } from 'react-bootstrap';
import { nameValidator, emailValidator, passwordValidator, passwordsHasSame } from './../../../core/validator.form';

export default class RegistrationComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: {
                lastName: '',
                firstName: '',
                email: '',
                password: '',
                rPassword: '',
            }        
        }
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }

    canBeSubmitted() {
        return (
            !nameValidator(this.state.user.lastName) ||
            !nameValidator(this.state.user.firstName) ||
            !emailValidator(this.state.user.email) ||
            !passwordValidator(this.state.user.password) ||
            !passwordValidator(this.state.user.rPassword) ||
            !passwordsHasSame(this.state.user.password, this.state.user.rPassword)
        );
    }

    handleChangeEvent(event) {
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    submit() {
        console.log("submit");
    }

    render() {
        return(
            <div>
                <InputComponent config={{
                    controlId: 'lastNameCtrl',
                    label: 'Last Name',
                    name: 'lastName' }} 
                    changeHandler={this.handleChangeEvent}></InputComponent> 

                <InputComponent config={{
                    controlId: 'firstNameCtrl',
                    label: 'First Name',
                    name: 'firstName'}} 
                    changeHandler={this.handleChangeEvent}></InputComponent> 

                <InputComponent config={{
                    controlId: 'EmailCtrl',
                    label: 'Email',
                    type: 'email',
                    name: 'email'}} 
                    changeHandler={this.handleChangeEvent}></InputComponent> 

                <InputComponent config={{
                    controlId: 'PasswordCtrl',
                    label: 'Password',
                    type: 'password',
                    name: 'password'}}
                    changeHandler={this.handleChangeEvent} 
                    ></InputComponent> 

                <InputComponent config={{
                    controlId: 'rPasswordCtrl',
                    label: 'Repeat password',
                    type: 'password',
                    name: 'rPassword'}} 
                    changeHandler={this.handleChangeEvent}></InputComponent> 

                <Button onClick={this.submit.bind(this)} disabled={this.canBeSubmitted()} variant="primary" type="submit">Registration</Button>

            </div>
        )
    }
}