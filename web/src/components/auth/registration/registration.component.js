import React from 'react';
import { InputComponent } from '../../generics/input.component';
import { Button } from 'react-bootstrap';

export default class RegistrationComponent extends React.Component {

    render() {
        return(
            <div>
                <InputComponent config={{
                    controlId: 'lastNameCtrl',
                    label: 'Last Name',
                    type: 'text',
                    name: 'LastName',
                    mdCol: '4',
                }} ></InputComponent> 

                <InputComponent config={{
                    controlId: 'firstNameCtrl',
                    label: 'First Name',
                    type: 'text',
                    name: 'FirstName',
                    mdCol: '4',
                }} ></InputComponent> 

                <InputComponent config={{
                    controlId: 'EmailCtrl',
                    label: 'Email',
                    type: 'email',
                    name: 'email',
                    mdCol: '4',
                }} ></InputComponent> 

                <InputComponent config={{
                    controlId: 'PasswordCtrl',
                    label: 'Password',
                    type: 'password',
                    name: 'password',
                    mdCol: '4',
                }} ></InputComponent> 

                <InputComponent config={{
                    controlId: 'rPasswordCtrl',
                    label: 'Repeat password',
                    type: 'password',
                    name: 'rPassword',
                    mdCol: '4',
                }} ></InputComponent> 

                <Button variant="primary" type="submit">Registration</Button>

            </div>
        )
    }
}