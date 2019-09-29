import React from 'react';
import {  Row, Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export class InputComponent extends React.Component {
    
    render() {
        const mdCol = this.props.config.mdCol || '6';

        return (
            <div>
                <Form.Group as={Row} controlId={this.props.config.controlId}>
                    <Col md={{ span: mdCol }}>
                        <Form.Label>{this.props.config.label}</Form.Label>
                        <Form.Control
                            type={(this.props.config.type) ? this.props.config.type : 'text' }
                            name={this.props.config.name}
                            onChange={this.props.changeHandler}
                        />
                    </Col>
                </Form.Group>
            </div>
        )
    }
}

InputComponent.propTypes = {
    config: PropTypes.shape({
        controlId: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
        name: PropTypes.string.isRequired,
        mdCol: PropTypes.string
    }).isRequired,
}

