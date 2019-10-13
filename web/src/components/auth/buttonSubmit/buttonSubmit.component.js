import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { SHA256 } from 'crypto-js';

const ButtonSubmitComponent = (data, canBeSubmitted) => {
    return  class ButtonSubmitComponent extends React.Component {

        submit(event) {
            if (data.user.password) {
                data.user.password = SHA256(data.user.password).toString();
            }
            delete data.user.rPassword;
            console.log("submit Button", data);
            event.preventDefault();
        };
    
        render() {
            return (
                <Row className="p-3">
                    <Col>
                        <Button onClick={this.submit.bind(this)} disabled={canBeSubmitted()}
                                className={data.buttonClass} variant="primary" type="submit">{data.buttonLabel}</Button>
                    </Col>
                </Row> 
            )
        }
    }
}

export default ButtonSubmitComponent;