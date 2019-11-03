import React from 'react';
import { nameValidator, emailValidator, passwordValidator, passwordsHasSame } from '../../core/validators/auth-form.validation';
import { SHA256 } from 'crypto-js';
import { Form, Row, Col, Button } from 'react-bootstrap';
import API from '../../core/services/api.service';

import { INITIAL_AUTH_ROUTES } from './../../utils/configs/route.config';

const INITIAL_STATE = {
    lastName: '',
    firstName: '',
    email: '',
    password: '',
    rPassword: '',
    message: '',
};

export default class RegistrationComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {...INITIAL_STATE};
        this.handleChange = this.handleChange.bind(this);
        this.canBeSubmitted = this.canBeSubmitted.bind(this);
    }

    componentDidMount() {
        this.setState({ message: this.props
            .loadMessage('The password must contain : 8 characters, 1 number, 1 lowercase and 1 uppercase character.', 
            'info') })
    }

    canBeSubmitted() {
        return (
            !nameValidator(this.state.lastName) ||
            !nameValidator(this.state.firstName) ||
            !emailValidator(this.state.email) ||
            !passwordValidator(this.state.password) ||
            !passwordValidator(this.state.rPassword) ||
            !passwordsHasSame(this.state.password, this.state.rPassword)
        );
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value })
    }

    handleSubmit() {
        const user = {
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            email: this.state.email,
            password: SHA256(this.state.password).toString()
        }
   
        API.post('saveUser', { user })
            .then((response) => {
                if(response.data.isUserExist) 
                    this.setState({ message: this.props.loadMessage('Email is already exists in database') });
                else 
                    this.props.history.push(INITIAL_AUTH_ROUTES.SIGNIN);
                
            }).catch( err => {
                this.setState({ message: this.props.loadMessage('Something wrong ! Contact the team if the problem persists') });
            });
    }

    render() {
        return (
            <Form onSubmit={ e => {
                e.preventDefault();
               this.handleSubmit()
            }}>
                {this.state.message}
                <Row>
                    <Col>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} 
                                        isValid={nameValidator(this.state.lastName)} isInvalid={!nameValidator(this.state.lastName)}/>
                        </Form.Group>
                
                        <Form.Group controlId="firstName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} 
                                        isValid={nameValidator(this.state.firstName)} isInvalid={!nameValidator(this.state.firstName)}/>
                        </Form.Group>
                
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} 
                                        isValid={emailValidator(this.state.email)} isInvalid={!emailValidator(this.state.email)}/>
                        </Form.Group>
                    </Col>
                
                    <Col>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} 
                                          isValid={passwordValidator(this.state.password)  && passwordsHasSame(this.state.password, this.state.rPassword) } 
                                          isInvalid={!passwordValidator(this.state.password) || !passwordsHasSame(this.state.password, this.state.rPassword)}
                                        />
                        </Form.Group>
    
                        <Form.Group controlId="rPassword">
                            <Form.Label>Retype password</Form.Label>
                            <Form.Control type="password" name="rPassword" value={this.state.rPassword} onChange={this.handleChange} 
                                        isValid={passwordValidator(this.state.rPassword) && passwordsHasSame(this.state.password, this.state.rPassword)} 
                                        isInvalid={!passwordValidator(this.state.rPassword) || !passwordsHasSame(this.state.password, this.state.rPassword)} />
                        </Form.Group>
                    </Col>
                  
                </Row>
    
                <Row className="p-3"> 
                    <Col md={{ offset: 2}}>
                        <Button  variant="primary" type="submit"
                                disabled={this.canBeSubmitted()} className="w-75"> Sign up </Button>
                    </Col>
                </Row>
            </Form> 
        )
    }
}
// const RegistrationComponent = (props) => {

//     const [lastName, setLastName] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [rPassword, setRPassword] = useState('');
//     const [message, setMessage] = useState(() => 
//         props.loadMessage('The password must contain : 8 characters, 1 number, 1 lowercase and 1 uppercase character.', 'info') 
//      );
    
//     const canBeSubmitted = () => {
//         return (
//             !nameValidator(lastName) ||
//             !nameValidator(firstName) ||
//             !emailValidator(email) ||
//             !passwordValidator(password) ||
//             !passwordValidator(rPassword) ||
//             !passwordsHasSame(password, rPassword)
//         );
//     }



//     const handleSubmit = () => {
//         const user = {
//             lastName: lastName,
//             firstName: firstName,
//             email: email,
//             password: SHA256(password).toString()
//         }
   
//         API.post('saveUser', { user })
//             .then((response) => {
//                 if(response.data.isUserExist) 
//                     setMessage(() => props.loadMessage('Email is already exists in database'));
//             }).catch( err => {
//                setMessage(() => props.loadMessage('Something wrong ! Contact the team if the problem persists'))
//             });
//     }
    

//     return (
//         <Form onSubmit={ e => {
//             e.preventDefault();
//             handleSubmit()
//         }}>
//             {message}
//             <Row>
//                 <Col>
//                     <Form.Group controlId="lastName">
//                         <Form.Label>Last name</Form.Label>
//                         <Form.Control type="text" name="lastName" value={lastName} onChange={ e => setLastName(e.target.value) } 
//                                     isValid={nameValidator(lastName)} isInvalid={!nameValidator(lastName)}/>
//                     </Form.Group>
            
//                     <Form.Group controlId="firstName">
//                         <Form.Label>FirstName</Form.Label>
//                         <Form.Control type="text" name="firstName" value={firstName} onChange={ e => setFirstName(e.target.value) } 
//                                     isValid={nameValidator(firstName)} isInvalid={!nameValidator(firstName)}/>
//                     </Form.Group>
            
//                     <Form.Group controlId="email">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" name="email" value={email} onChange={ e => setEmail(e.target.value) } 
//                                     isValid={emailValidator(email)} isInvalid={!emailValidator(email)}/>
//                     </Form.Group>
//                 </Col>
            
//                 <Col>
//                     <Form.Group controlId="password">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" name="password" value={password} onChange={ e => setPassword(e.target.value) } 
//                                       isValid={passwordValidator(password)  && passwordsHasSame(password, rPassword) } 
//                                       isInvalid={!passwordValidator(password) || !passwordsHasSame(password, rPassword)}
//                                     />
//                     </Form.Group>

//                     <Form.Group controlId="rPassword">
//                         <Form.Label>Retype password</Form.Label>
//                         <Form.Control type="password" name="rPassword" value={rPassword} onChange={ e => setRPassword(e.target.value) } 
//                                     isValid={passwordValidator(rPassword) && passwordsHasSame(password, rPassword)} 
//                                     isInvalid={!passwordValidator(rPassword) || !passwordsHasSame(password, rPassword)} />
//                     </Form.Group>
//                 </Col>
              
//             </Row>

//             <Row className="p-3"> 
//                 <Col md={{ offset: 2}}>
//                     <Button  variant="primary" type="submit"
//                             disabled={canBeSubmitted()} className="w-75"> Registration </Button>
//                 </Col>
//             </Row>
//         </Form>
//     )
// }   

// export default RegistrationComponent;