import React from 'react';
import { InputComponent } from '../../generics/input/input.component';
import { Button, Row, Col } from 'react-bootstrap';
import { nameValidator, emailValidator, passwordValidator, passwordsHasSame } from '../../../core/validators/auth-form.validation';

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
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <InputComponent config={{
                                    controlId: 'lastNameCtrl',
                                    label: 'Last Name',
                                    name: 'lastName',
                                    mdCol: '8'
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
                                    mdCol: '8'
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
                                mdCol: '8'
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
                                mdCol: '8'
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
                                mdCol: '8'
                            }} 
                                changeHandler={this.handleChangeEvent}></InputComponent> 
                            </Col>
                        </Row>

                          <Row>
                            <Col>
                                <Button onClick={this.submit.bind(this)} disabled={this.canBeSubmitted()}
                                        className="m-3" variant="primary" type="submit">Registration</Button>
                            </Col>
                        </Row> 
                    </Col>
                   
                </Row>
            
            </div>
        )
    }
}