import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './index.module.scss';
import { LinkTo, Button, Input } from '../../shared';
import APP_ROUTES from '../../configs/routes';

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [rPassword, setRPassword] = useState("");
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = () => { }

    return (
        <form
            className={style.auth__layout__content}
            onSubmit={handleSubmit(onSubmit)}>

            <h1 className={style.auth__layout__content__title}>Reset</h1>

            <div className={style.auth__layout__content__input}>
                <Input type="password" label="Password" name="password" placeholder="Type your password"
                    value={password} onChange={e => setPassword(e.target.value)} inputStyle={{ width: "85%" }}
                    refs={register({
                        required: "Password is required",
                        validate: value => value !== rPassword
                    })}
                    errors={errors && errors.password && <React.Fragment> {errors.password.message} </React.Fragment>} />
            </div>

            <div className={style.auth__layout__content__input}>
                <Input type="password" label="Retype password" name="rPassword" placeholder="Retype your password"
                    value={rPassword} onChange={e => setRPassword(e.target.value)} inputStyle={{ width: "85%" }}
                    refs={register({
                        required: "Password is required",
                        validate: value => value !== password
                    })}
                    errors={errors && errors.rPassword && <React.Fragment> {errors.rPassword.message} </React.Fragment>} />
            </div>

            <div className={style.auth__layout__content__link}>
                <LinkTo href={APP_ROUTES.SIGN_IN}>Sign in</LinkTo>
            </div>

            <div className={style.auth__layout__content__submit}>
                <Button label="Reset" width="w-65" />
            </div>
        </form>
    )
}