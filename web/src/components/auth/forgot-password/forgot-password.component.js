import React, { useState } from 'react';
import { emailValidator } from '../../../core/validators/auth-form.validation';
import API from './../../../core/services/api.service';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const canBeSubmitted = () => {
        return (
            !emailValidator(email)
        )
    }

    return (
            <div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" 
                                    onChange={ e => setEmail(e.target.value) }/>
                        </div>
                    </div> 
                </div>


                <div className="row p-3">
                    <div className="col offset-2">
                        <button disabled={canBeSubmitted()} className="btn btn-primary w-75"
                             type="submit">Send</button>
                    </div>
                </div> 
        </div>
    )
}

export default ForgotPassword;