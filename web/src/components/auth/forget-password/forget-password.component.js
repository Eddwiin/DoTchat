import React from 'react';
import { InputComponent }  from '../../generics/input/input.component';
import {  Row, Col } from 'react-bootstrap';

export default class ForgetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <InputComponent config={{
                                controlId: 'emailCtrl',
                                label: 'Email',
                                type: 'email',
                                name: 'email',
                            }}
                            changeHandler={this.handleChangeEvent} ></InputComponent> 
                    </Col>
                </Row>
            </div>
        )
    }

}