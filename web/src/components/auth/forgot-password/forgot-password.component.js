import React from 'react';
import {  Row, Col, Button } from 'react-bootstrap';
import { InputComponent } from '../../generics/input/input.component';
import { emailValidator } from '../../../core/validators/auth-form.validation';

export default class ForgotPasswordComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: ''
            }
        }

        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }


    canBeSubmitted() {
        return (
            !emailValidator(this.state.user.email)
        )
    }

    handleChangeEvent(event) {
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={{ span: 8, offset: 2}}>
                        <InputComponent config={{
                                controlId: 'emailCtrl',
                                label: 'Email',
                                type: 'email',
                                name: 'email',
                                mdCol: '12'
                            }}
                            changeHandler={this.handleChangeEvent} ></InputComponent> 
                    </Col> 
                </Row>


                <Row className="p-3">
                    <Col>
                        <Button onClick={ (e) => this.props.submit(e, {...this.state.user})}
                                disabled={this.canBeSubmitted()}
                                className="w-75" variant="primary" type="submit">Send</Button>
                    </Col>
                </Row> 
            </div>
        )
    }
}
