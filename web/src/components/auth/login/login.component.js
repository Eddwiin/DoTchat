import React, { useState } from 'react';
import { InputComponent } from '../../generics/input/input.component';
import { Link } from 'react-router-dom';
// import gql from 'graphql-tag';

// const GET_USER_BY_EMAIL = gql`
//     query userByEmail($email: String!) {
//         userByEmail(email: $email) {
//             firstName,
//             lastName,
//             email
//         }
//     }
// `

const LoginComponent = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <div className="col-md-12 offset-md-3" >
                <div className="row">
                    <div className="col-xs-8 col-md-12" >
                        <InputComponent config={{
                            controlId: 'emailCtrl',
                            label: 'Email',
                            type: 'email',
                            name: 'email',
                            mdCol: '7'
                        }}
                        changeHandler={event => setEmail(event.target.value)} ></InputComponent> 
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-8 col-md-12">
                        <InputComponent config={{
                            controlId: 'passwordCtrl',
                            label: 'Password',
                            type: 'password',
                            name: 'password',
                            mdCol: '7'
                        }}
                        changeHandler={event => setPassword(event.target.value)} ></InputComponent> 
                    </div>
                </div>

                <div className="row">
                    <Link to='/auth/forgot-password' >Password forgot ?</Link>
                </div>

                <div className="row p-3">
                    <button className="btn btn-primary w-50" variant="primary" type="submit">Log in</button>
                </div> 

            </div>
        </form>
    )

}

export default LoginComponent;