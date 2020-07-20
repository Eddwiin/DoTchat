import React, { useState } from 'react';
import { FormGroup, Button, LinkTo } from "./../shared";
import APP_ROUTES from '../../utils/routes';

const ResetPassword = ({ style }) => {
    const [password, setPassword] = useState("");
    const [rPassword, setRPassword] = useState("");

    return (
        <form className="auth__layout__content" >
            <h1 className="auth__layout__content__title">Reset</h1>

            <div style={style.input}>
                <FormGroup
                inputStyle={{ width: "85%" }}
                label="Password"
                name="password"
                type="password"
                placeholder="Type your password"
                value={password}
                required="required"
                onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div style={style.input}>
                <FormGroup
                inputStyle={{ width: "85%" }}className="auth__layout__content__submit"
                label="Retype password"
                name="rPassword"
                type="password"
                placeholder="Retype your password"
                value={rPassword}
                required="required"
                onChange={e => setRPassword(e.target.value)}
                />
            </div>

            <div className="auth__layout__content__link">
                <LinkTo redirect={APP_ROUTES.SIGN_IN}>Sign in</LinkTo>
            </div>

            <div style={style.btn} className="auth__layout__content__submit">
                <Button label="Reset" width="w-65" />
            </div>

        </form>
    )
}

export default ResetPassword