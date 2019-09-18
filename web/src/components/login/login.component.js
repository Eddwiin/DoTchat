import React from 'react';
import { Form , Button, Row, Col} from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';

export class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            }
        };
    }

    handleChange(event){
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    render () {
        return (
            <Form>
                <Form.Group as={Row} controlId="emailCtrl">
                    <Form.Label column sm="2">Email</Form.Label>
                    <Col sm="4">
                        <Form.Control
                        type="email"
                        name="email"
                        value={this.state.user.email}
                        onChange={this.handleChange.bind(this)}
                        />
                    </Col>
                
                </Form.Group>

                <Form.Group as={Row} controlId="passwordCtrl">
                    <Form.Label column sm="2">Password</Form.Label>
                        <Form.Control
                        type="password"
                        name="password"
                        value={this.state.user.password}
                        onChange={this.handleChange.bind(this)}
                        />
                </Form.Group>
                 
               <Button variant="primary">Submit</Button>
            </Form>
        );
    }
}

export default LoginComponent;