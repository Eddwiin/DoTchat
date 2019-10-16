import React from 'react';
import { InputComponent } from '../../generics/input/input.component';

const ForgotPassword = () => {
    return (
            <div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <InputComponent config={{
                                controlId: 'emailCtrl',
                                label: 'Email',
                                type: 'email',
                                name: 'email',
                                mdCol: '12'
                            }}
                            changeHandler={this.handleChangeEvent} ></InputComponent> 
                    </div> 
                </div>


                <div className="row p-3">
                    <div className="col">
                        <button disabled={this.canBeSubmitted()} className="btn btn-primary w-75"
                             type="submit">Send</button>
                    </div>
                </div> 
        </div>
    )
}

export default ForgotPassword;