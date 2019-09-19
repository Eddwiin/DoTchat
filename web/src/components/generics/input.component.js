import React from 'react';
import {  Row, Col, Form } from 'react-bootstrap';

export class InputComponent extends React.Component {

    render() {
        return (
            <div>
                <Form.Group as={Row} controlId={this.props.config.controlId}>
                    <Col md={(this.props.config.mdCol) ? this.props.config.mdCol : '4' }>
                        <Form.Label>{this.props.config.label}</Form.Label>
                        <Form.Control
                            type={(this.props.config.type) ? this.props.config.type : 'text' }
                            name={this.props.config.name}
                        />
                    </Col>
                </Form.Group>
            </div>
        )
    }
}

InputComponent.PropTypes = {
    config: React.PropTypes.shape({
        controlId: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        type: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        mdCol: React.PropTypes.string
    }).isRequired,
}

