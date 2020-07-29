import React, { useState } from 'react';
import { Input, Button, LinkTo } from "../shared";
import APP_ROUTES from '../../utils/routes';
import { emailRegex } from '../../utils/validators';
import { useForm } from 'react-hook-form';

export default function ForgetPassword({ style }) {

    const [email, setEmail] = useState("");
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = () => { };

    return (
        <form
            className="auth__layout__content"
            onSubmit={handleSubmit(onSubmit)}>
            <h1 className="auth__layout__content__title">Forget password</h1>

            <div style={style.input}>
                <Input label="email" name="email" placeholder="Type your email"
                    value={email} onChange={e => setEmail(e.target.value)} style={{ width: "85%" }}
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

            <div className="auth__layout__content__link">
                <LinkTo redirect={APP_ROUTES.SIGN_IN}>Sign in</LinkTo>
            </div>

            <div style={style.btn} className="auth__layout__content__submit">
                <Button label="Send email" width="w-65" />
            </div>
        </form>
    )
}