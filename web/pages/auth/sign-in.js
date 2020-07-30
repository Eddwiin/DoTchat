import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './index.module.scss';
import { Input, Button, LinkTo } from '../../shared';
import { emailRegex } from '../../utils/validators';
import APP_ROUTES from '../../configs/routes';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router'
import LOGIN  from './../api/mutations/login';

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleSubmit, register, errors } = useForm();
    const [login] = useMutation(LOGIN)
    const router = useRouter();

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
            return router.push(APP_ROUTES.CHAT)

        }).catch(console.error);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={style.auth__layout__content}>

            <h1 className={style.auth__layout__content__title}>Sign in</h1>
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
                    errors={errors && errors.email && <React.Fragment>{errors.email.message}</React.Fragment>}
                />
            </div>

            <div className={style.auth__layout__content__input}>
                <Input type="password" label="password" name="password" placeholder="Type your password"
                    value={password} onChange={e => setPassword(e.target.value)} inputStyle={{ width: "85%" }}
                    refs={register({
                        required: "Password is required",
                    })}
                    errors={errors && errors.password && <React.Fragment> {errors.password.message} </React.Fragment>} />
            </div>

            <div className={style.auth__layout__content__link}>
                <LinkTo href={APP_ROUTES.SIGN_UP}>Create an account</LinkTo>
                <LinkTo href={APP_ROUTES.FORGET_PASSWORD}>Forget password</LinkTo>
            </div>

            <div className={style.auth__layout__content__submit}>
                <Button label="Sign in" />
            </div>

        </form>
    )
}