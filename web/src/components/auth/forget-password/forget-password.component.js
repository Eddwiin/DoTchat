import React from 'react';
import { InputComponent }  from '../../generics/input/input.component';
import {  Row, Col } from 'react-bootstrap';
import { emailValidator } from '../../../core/validators/auth-form.validation';
import  ButtonSubmitComponent from './../buttonSubmit/buttonSubmit.component';

export default class ForgetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonLabel: 'Send',
            buttonClass: 'w-75',
            user: {
                email: '',
            }
        }
        
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }
    
    canBeSubmitted() {
        return (
            !emailValidator(this.state.user.email)
        )
    }

    handleChangeEvent(e) {
        const user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({ user });
    }


    render() {
        const ButtonSubmit = ButtonSubmitComponent({...this.state}, this.canBeSubmitted.bind(this));

        return (
                <div>
                    <Row>
                        <Col  md={{ span: 8, offset: 2}}>
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
                    
                    <div className="offset-2">
                        <ButtonSubmit />
                    </div>
            </div>
        )
    }

}