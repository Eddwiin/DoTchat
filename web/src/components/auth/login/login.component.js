import React from 'react';
import {  Button } from 'react-bootstrap';
import { InputComponent } from '../../generics/input.component';

export default class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            }
        }
    }

    handleChange(e) {
        const user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({ user });
    }

    render() {
        return (
            <div>

                <InputComponent config={{
                    controlId: 'emailCtrl',
                    label: 'Email',
                    type: 'email',
                    name: 'email',
                    mdCol: '4',
                }} ></InputComponent> 

                <InputComponent config={{
                    controlId: 'passwordCtrl',
                    label: 'Password',
                    type: 'password',
                    name: 'password',
                    mdCol: '4',
                }} ></InputComponent> 
    

                <Button variant="primary" type="submit">Log in</Button>
            </div>
        )
    }
}

