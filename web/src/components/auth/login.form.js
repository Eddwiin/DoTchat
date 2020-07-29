import React, { useState } from 'react';
import { FormGroup, Button, LinkTo } from '../shared';
import APP_ROUTES from '../../utils/routes';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { SHA256 } from 'crypto-js';
import LOGIN from './graphql/mutations/login';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { useHistory } from 'react-router-dom';
import { setAccessToken } from '../../utils/localstorage';


export default function LoginForm({ style }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login] = useMutation(LOGIN)
    const { handleSubmit, register, errors } = useForm();
    const history = useHistory();

    const onSubmit = () => {
        login({
            variables: {
                email,
                password: SHA256(password).toString()
            }
        }).then(({ data: { login: { access_token } } }) => {
            if (!access_token) {
                return ToastsStore.success('Error login', 4000);
            }
            setAccessToken(access_token);
            return history.push(APP_ROUTES.CHAT)

        }).catch(console.error);
    }

    return (
        <form
            className="auth__layout__content"
            onSubmit={handleSubmit(onSubmit)}>

            <h1 className="auth__layout__content__title">Sign in</h1>

            <div style={style.input}>
                <FormGroup
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Type your email"
                    inputStyle={{ width: "85%" }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    register={register({
                        required: "This is required",
                    })}
                    errors={errors}
                    required
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
                    register={register({
                        required: "This is required",
                    })}
                    errors={errors}
                    required
                />
            </div>

            <div className="auth__layout__content__link">
                <LinkTo redirect={APP_ROUTES.SIGN_UP}>Create an account</LinkTo>
                <LinkTo redirect={APP_ROUTES.FORGET_PASSWORD}>Forget password</LinkTo>
            </div>

            <div style={style.btn} className="auth__layout__content__submit">
                <Button label="Sign in" width="w-65" />
            </div>

            <ToastsContainer store={ToastsStore} />
        </form>
    )

}