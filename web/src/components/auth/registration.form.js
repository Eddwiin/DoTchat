import React, { useState } from 'react';
import { FormGroup, Button, LinkTo } from './../shared';
import APP_ROUTES from '../../utils/routes';
import { useForm } from "react-hook-form";
import CREATE_USER from './graphql/mutations/create-user';
import { useMutation, useQuery } from '@apollo/client';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { SHA256 } from 'crypto-js';
import { useHistory } from 'react-router-dom';
import { passwordRegex, emailRegex } from '../../utils/validators';
import FIND_USER_BY_EMAIL from './graphql/queries/find-user-by-email';

export default function RegistrationForm({ style }) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rPassword, setRPassword] = useState("");
    const { handleSubmit, register, errors } = useForm();
    const history = useHistory();

    const [createUser] = useMutation(CREATE_USER);
    const { data } = useQuery(FIND_USER_BY_EMAIL, {
        variables: { email }
    });
    
    const onSubmit = () => {
        createUser({
            variables: {
                username,
                email,
                password: SHA256(password).toString()
            }
        }).then(({ data }) => {
            if (data.createUser) {
                ToastsStore.success('User has been created', 4000);
                return history.push(APP_ROUTES.SIGN_IN);
            }

            return ToastsStore.error('Error !', 3000);
        }).catch(console.error);
    }

    return (
        <form
            className="auth__layout__content"
            onSubmit={handleSubmit(onSubmit)}>

            <h1 className="auth__layout__content__title">Sign up</h1>

            <div style={style.input}>
                <FormGroup
                    inputStyle={{ width: "85%" }}
                    label="Username"
                    name="username"
                    placeholder="Type your username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    register={register({
                        required: "This is required",
                        minLength: {
                            value: 2,
                            message: 'Username must contains 2 letters minimum'
                        },
                        validate: async _ => await !data
                    })}
                    errors={errors}
                    required
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
                    required
                    register={register({
                        required: "This is required",
                        pattern: {
                            value: emailRegex(),
                            message: "invalid email address"
                        },
                        validate: _ => password === rPassword
                    })}
                    errors={errors}
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
                    required
                    register={register({
                        required: "This is required",
                        pattern: {
                            value: passwordRegex(),
                            message: "The password must contain 8 characters"
                        },
                        validate: _ => password === rPassword
                    })}
                    errors={errors}
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
                    required
                    register={register({
                        required: "This is required",
                        pattern: {
                            value: passwordRegex(),
                            message: "The password must contain 8 characters"
                        }

                    })}
                    errors={errors}
                />
            </div>


            <div className="auth__layout__content__link">
                <LinkTo redirect={APP_ROUTES.SIGN_IN}>Sign in</LinkTo>
            </div>

            <div style={style.btn} className="auth__layout__content__submit">
                <Button label="Sign up" width="w-65" />
            </div>

            <ToastsContainer store={ToastsStore} />
        </form>
    )
}

