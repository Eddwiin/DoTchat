import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { SHA256 } from 'crypto-js';
import { ADD_USER } from './../../../core/services/user/user.mutation';
import { useMutation } from '@apollo/react-hooks';

const ButtonSubmitComponent = (state, canBeSubmitted) => {
    return class ButtonSubmitComponent extends React.Component {

        // submit(event) {
        //     if (state.user.password) {
        //         state.user.password = SHA256(state.user.password).toString();
        //     }
        //     delete state.user.rPassword;
            
        //     const [addUser, { data }] = useMutation(ADD_USER);

        //     event.preventDefault();
        // };
    
        render() {
            return (
                <Row className="p-3">
                    <Col>
                        <Button disabled={canBeSubmitted()} variant="primary" type="submit"
                                className={state.buttonClass}>{state.buttonLabel}</Button>
                    </Col>
                </Row> 
            )
        }
    }
}

export default ButtonSubmitComponent;