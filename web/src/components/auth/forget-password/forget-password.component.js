import React from 'react';
import { InputComponent }  from '../../generics/input/input.component';
import {  Row, Col, Button } from 'react-bootstrap';
import { emailValidator } from '../../../core/validators/auth-form.validation';

export default class ForgetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
            }
        }
    }
    
    canBeSubmitted() {
        return (
            !emailValidator(this.state.user.email)
        )
    }

    submit() {}

    render() {
        return (
            <Row>
                <Col md={{ span: 12, offset: 3}}>
                    <Row>
                        <Col xs={{ span: 8 }} md={12}>
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
                            <Button onClick={this.submit.bind(this)} disabled={this.canBeSubmitted()} 
                                    variant="primary" type="submit">Send</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }

}