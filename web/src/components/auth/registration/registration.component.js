import React from 'react';
import { InputComponent } from '../../generics/input/input.component';
import { Button, Row, Col } from 'react-bootstrap';
import { nameValidator, emailValidator, passwordValidator, passwordsHasSame } from '../../../core/validators/auth-form.validation';
import { SHA256 } from 'crypto-js';

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
        const user = {...this.state.user};
        user.password = SHA256(user.password).toString();
        console.log("submit");
    }

    render() {
        return(
            <div>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <InputComponent config={{
                                    controlId: 'lastNameCtrl',
                                    label: 'Last Name',
                                    name: 'lastName',
                                    mdCol: '12'
                                }} 
                                    changeHandler={this.handleChangeEvent}></InputComponent> 
                            </Col>
                        </Row> 

                        <Row>
                            <Col>
                                <InputComponent config={{
                                    controlId: 'firstNameCtrl',
                                    label: 'First Name',
                                    name: 'firstName',
                                    mdCol: '12'
                                }} 
                                    changeHandler={this.handleChangeEvent}></InputComponent> 
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <InputComponent config={{
                                controlId: 'EmailCtrl',
                                label: 'Email',
                                type: 'email',
                                name: 'email',
                                mdCol: '12'
                            }} 
                                changeHandler={this.handleChangeEvent}></InputComponent> 
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row>
                            <Col>
                                <InputComponent config={{
                                controlId: 'PasswordCtrl',
                                label: 'Password',
                                type: 'password',
                                name: 'password',
                                mdCol: '12'
                            }}
                                changeHandler={this.handleChangeEvent} 
                                ></InputComponent> 
                            </Col>
                        </Row>

                         <Row>
                            <Col>
                                <InputComponent config={{
                                controlId: 'rPasswordCtrl',
                                label: 'Repeat password',
                                type: 'password',
                                name: 'rPassword',
                                mdCol: '12'
                            }} 
                                changeHandler={this.handleChangeEvent}></InputComponent> 
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="p-3">
                    <Col>
                        <Button onClick={this.submit.bind(this)} disabled={this.canBeSubmitted()}
                                className="offset-2 w-75" variant="primary" type="submit">Registration</Button>
                    </Col>
                </Row> 
            </div>
        )
    }
}