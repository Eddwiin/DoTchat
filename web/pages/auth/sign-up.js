import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import CREATE_USER from './../api/mutations/create-user';
import { LinkTo, Button, Input } from '../../shared';
import style from './index.module.scss';
import APP_ROUTES from '../../configs/routes';
import { emailRegex, passwordRegex } from '../../utils/validators';

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleSubmit, register, errors } = useForm();
    const [rPassword, setRPassword] = useState("");

    const [createUser] = useMutation(CREATE_USER);

    const onSubmit = () => {
        createUser({
            variables: {
                username,
                email,
                password: SHA256(password).toString()
            }
        }).then(({ data }) => {
            // if (data.createUser) {
            //     ToastsStore.success('User has been created', 4000);
            //     return history.push(APP_ROUTES.SIGN_IN);
            // }

            // return ToastsStore.error('Error !', 3000);
        }).catch(console.error);
     }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={style.auth__layout__content}>

            <h1 className={style.auth__layout__content__title}>Sign up</h1>

            <div className={style.auth__layout__content__input}>
                <Input label="username" name="username" placeholder="Type your username"
                    value={username} onChange={e => setUsername(e.target.value)} inputStyle={{ width: "85%" }}
                    refs={register({
                        required: "Username is required",
                        minLength: {
                            value: 2,
                            message: 'Username must contains 2 letters minimum'
                        },

                    })}
                    errors={errors?.username && <React.Fragment> {errors.username.message} </React.Fragment>} />
            </div>

            <div className={style.auth__layout__content__input}>
                <Input label="email" name="email" placeholder="Type your email"
                    value={email} onChange={e => setEmail(e.target.value)} inputStyle={{ width: "85%" }}
                    refs={register({
                        required: "Email is required",
                        pattern: {
                            value: emailRegex(),
                            message: "Email is invalid"
                        }
                    })}
                    errors={errors?.email && <React.Fragment> {errors.email.message} </React.Fragment>} />
            </div>

            <div className={style.auth__layout__content__input}>
                <Input type="password" label="password" name="password" placeholder="Type your password"
                    value={password} onChange={e => setPassword(e.target.value)} inputStyle={{ width: "85%" }}
                    refs={register({
                        required: "Password is required",
                    })}
                    errors={errors?.password && <React.Fragment> {errors.password.message} </React.Fragment>} />
            </div>

            <div className={style.auth__layout__content__input}>
                <Input type="password" label="Retype password" name="rPassword" placeholder="Retype your password"
                    value={rPassword} onChange={e => setRPassword(e.target.value)} inputStyle={{ width: "85%" }}
                    refs={register({
                        required: "Password is required",
                        pattern: {
                            value: passwordRegex(),
                            message: "The password must contain 8 characters"
                        },
                        validate: value => value !== password
                    })}
                    errors={errors && errors.rPassword && <React.Fragment> {errors.rPassword.message} </React.Fragment>} />
            </div>


            <div className={style.auth__layout__content__link}>
                <LinkTo href={APP_ROUTES.SIGN_IN}>Sign in</LinkTo>
            </div>

            <div className={style.auth__layout__content__submit}>
                <Button label="Sign up" />
            </div>

        </form>
    )
}