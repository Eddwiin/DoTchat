import React, { useState } from 'react';
import { FormGroup, Button, LinkTo } from './../shared';
import APP_ROUTES from '../../configs/routes';

const Login = ({ style }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="auth__layout__content">
            <h1 className="auth__layout__content__title">Sign in</h1>

            <div style={style.input}>
                <FormGroup
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Type your username"
                    inputStyle={{ width: "85%" }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div style={style.input}>
                <FormGroup
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Type your password"
                    inputStyle={{ width: "85%" }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div className="auth__layout__content__link">
                {/* <LinkTo redirect={APP_ROUTES.SIGN_UP}>Create an account</LinkTo> */}
                <LinkTo redirect={APP_ROUTES.FORGET_PASSWORD}>Forget password</LinkTo>
            </div>

            <div style={style.btn} className="auth__layout__content__submit">
                <Button label="Sign in" width="w-65" />
            </div>
        </form>
    )
}

export default Login;