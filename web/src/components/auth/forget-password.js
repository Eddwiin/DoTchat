import React, { useState } from 'react';
import { FormGroup, Button, LinkTo } from "./../shared";
import APP_ROUTES from '../../utils/routes';

const ForgetPassword = ({ style }) => {
    const [email, setEmail] = useState("");

    return (
        <form className="auth__layout__content">
            <h1 className="auth__layout__content__title">Forget password</h1>
            <div style={style.input}>
                <FormGroup
                    inputStyle={{ width: "85%" }}
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Type your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className="auth__layout__content__link">
                <LinkTo redirect={APP_ROUTES.SIGN_IN}>Sign in</LinkTo>
            </div>

            <div style={style.btn} className="auth__layout__content__submit">
                <Button label="Send email" width="w-65" />
            </div>
        </form>
    )
}

export default ForgetPassword;