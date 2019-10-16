import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { nameValidator, emailValidator, passwordValidator,
             passwordsHasSame } from '../../../core/validators/auth-form.validation';

const ADD_USER =  gql`
    mutation AddUser($lastName: String!, $firstName: String!, $email: String!, $password: String!) {
        addUser(lastName: $lastName, firstName: $firstName, email: $email, password: $password) {
            id
        }
    }
`;

const RegistrationComponent = () => {

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rPassword, setRPassword] = useState('');
    
    const [addUser] = useMutation(ADD_USER);
 

    const canBeSubmitted = () => {
        return (
            !nameValidator(lastName) ||
            !nameValidator(firstName) ||
            !emailValidator(email) ||
            !passwordValidator(password) ||
            !passwordValidator(rPassword) ||
            !passwordsHasSame(password, rPassword)
        );
    }


    return (
        <form onSubmit={ e => {
            e.preventDefault();
            addUser({ variables : { lastName: lastName, firstName: firstName, email: email, password: password}})
        }}>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label> Last name</label>
                                <input type="text" className="form-control" name="lastName" 
                                    onChange={e => setLastName(e.target.value) }/>
                            </div>
                        </div>
                    </div> 

                    <div className="row">
                        <div className="col">
                             <div className="form-group">
                                <label> First name</label>
                                <input type="text" className="form-control" name="firstName" 
                                        onChange={ e => setFirstName(e.target.value )}/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" 
                                        onChange={ e => setEmail(e.target.value) }/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" 
                                        onChange={ e => setPassword(e.target.value )}/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Repeat password</label>
                                <input type="password" className="form-control" name="rPassword"
                                        onChange={ e => setRPassword(e.target.value )} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-3">
                <div className="col">
                    <button className="btn btn-primary offset-2 w-75" type="submit"
                            disabled={canBeSubmitted()}>Registration</button>
                </div>
            </div> 
        </form>
    )
}   

export default RegistrationComponent;