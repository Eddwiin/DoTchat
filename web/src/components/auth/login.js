import React from 'react';
import { emailValidator, passwordValidator } from '../../core/validators/auth-form.validation';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { INITIAL_AUTH_ROUTES } from './../../utils/configs/route.config';

const INITIAL_STATE = {
    email: '',
    password: '', 
    message: '',
}

export default class LoginCompoennt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};

        this.canBeSubmitted = this.canBeSubmitted.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log("login props", props);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit() {

    }

    canBeSubmitted() {
        return (
            !emailValidator(this.state.email) ||
            !passwordValidator(this.state.password)
        )
    }

    render() {
        return (
            <Form onSubmit={ e => {
                e.preventDefault();
                this.handleSubmit();
            }}>
                <Form.Group>
                    <Col md={{ span: 8, offset: 2}}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={this.state.email}
                            onChange={this.handleChange}/>
                    </Col>
                </Form.Group>

                <Form.Group>
                    <Col md={{ span: 8, offset: 2}}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password}
                                onChange={this.handleChange}/>
                    </Col>
                </Form.Group> 

                <Row>
                    <Col md={{ offset: 3}} className="p-2">
                        <Link to={INITIAL_AUTH_ROUTES.FORGOTPASSWORD}>Password forgot ?</Link>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ offset: 2}}>
                        <Button variant="primary" className="w-75"  type="submit"
                                disabled={this.canBeSubmitted()}>Sign in</Button>
                    </Col>
                </Row> 
            </Form>
        )
    }

}
// const LoginComponent = (props) => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const canBeSubmitted = () => {
//         return (
//             !emailValidator(email) ||
//             !passwordValidator(password)
//         )
//     }

//     return (
//         <Form>
//             <Form.Group>
//                 <Col md={{ span: 8, offset: 2}}>
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control type="email" name="email" 
//                         onChange={ e => setEmail(e.target.value) }/>
//                 </Col>
//             </Form.Group>

//              <Form.Group>
//                 <Col md={{ span: 8, offset: 2}}>
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" name="password" 
//                             onChange={ e => setPassword(e.target.value )}/>
//                 </Col>
//             </Form.Group> 

//             <Row>
//                 <Col md={{ offset: 3}} className="p-2">
//                     <Link to={INITIAL_AUTH_ROUTES.FORGOTPASSWORD}>Password forgot ?</Link>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col md={{ offset: 2}}>
//                     <Button variant="primary" className="w-75"  type="submit"
//                             disabled={canBeSubmitted()}>Sign in</Button>
//                 </Col>
//             </Row> 

//         </Form>
//     )

// }

// export default LoginComponent;