import React, { useState }  from 'react'
import { FormGroup, Button, LinkTo } from './../shared';
import APP_ROUTES from '../../configs/routes';

const Registration = ({ style }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rPassword, setRPassword] = useState("");

    return (
        <form className="auth__layout__content">
            <h1 className="auth__layout__content__title">Sign up</h1>

            <div style={style.input}>
                <FormGroup
                    inputStyle={{ width: "85%" }}
                    label="Username"
                    name="username"
                    placeholder="Type your username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>

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

            <div style={style.input}>
                <FormGroup
                    inputStyle={{ width: "85%" }}
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Type your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div style={style.input}>
                <FormGroup
                    inputStyle={{ width: "85%" }}
                    label="Retype password"
                    name="RPassword"
                    type="password"
                    placeholder="Retype your password"
                    value={rPassword}
                    onChange={e => setRPassword(e.target.value)}
                />
            </div>


            <div className="auth__layout__content__link">
                <LinkTo redirect={APP_ROUTES.SIGN_IN}>Sign in</LinkTo>
            </div>

            <div style={style.btn}  className="auth__layout__content__submit">
                <Button label="Sign up" width="w-65" />
            </div>

        </form>
    )
}


export default Registration