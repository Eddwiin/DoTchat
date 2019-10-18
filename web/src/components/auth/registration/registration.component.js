import React, { useState } from 'react';
import { nameValidator, emailValidator, passwordValidator, passwordsHasSame } from '../../../core/validators/auth-form.validation';
import { SHA256 } from 'crypto-js';
import API from '../../../core/services/api.service';

const RegistrationComponent = (props) => {

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rPassword, setRPassword] = useState('');

    console.log(props);
    
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

    const handleSubmit = () => {
        const user = {
            lastName: lastName,
            firstName: firstName,
            email: email,
            password: SHA256(password).toString()
        }
   
        API.post('saveUser', { user })
            .then(console.log);
    }

    return (
        <form onSubmit={ e => {
            e.preventDefault();
            handleSubmit()
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