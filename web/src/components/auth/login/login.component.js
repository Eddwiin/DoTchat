import React, { useState } from 'react';
import { emailValidator, passwordValidator } from '../../../core/validators/auth-form.validation';
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

    const canBeSubmitted = () => {
        return (
            !emailValidator(email) ||
            !passwordValidator(password)
        )
    }

    return (
        <form>
            <div className="form-group">
                <div className="col-8 offset-2">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" 
                            onChange={ e => setEmail(e.target.value) }/>
                </div>
            </div>

             <div className="form-group">
                <div className="col-8 offset-2">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" 
                            onChange={ e => setPassword(e.target.value )}/>
                </div>
            </div> 

            <div className="row">
                <div className="col offset-3 p-2">
                    <Link to='/auth/forgot-password' onClick={props.loadComponent}>Password forgot ?</Link>
                </div>
            </div>

            <div className="row offset-2">
                <button className="btn btn-primary w-75" variant="primary" type="submit"
                        disabled={canBeSubmitted()}>Log in</button>
            </div> 

        </form>
    )

}

export default LoginComponent;