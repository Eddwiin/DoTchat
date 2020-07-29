import React, { lazy } from 'react';
import './auth.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import APP_ROUTES from '../../utils/routes';

const Layout = lazy(() => import('./../shared').then(mod => ({ default: mod.Layout })));
const LoginForm = lazy(() => import('./login.form'));
const RegistrationForm = lazy(() => import('./registration.form'));
const ForgetPasswordForm = lazy(() => import('./forget-password.form'));
const ResetPasswordForm = lazy(() => import('./reset-password.form'));


export default function AuthContainer() {

    const style = {
        input: {
            padding: "2.5rem"
        },
        btn: {
            display: "flex",
            justifyContent: "center"
        }
    }

    const loadRoutes = () => {
        return (
            <Switch>
                <Route path={APP_ROUTES.SIGN_IN} render={() => <LoginForm style={style} />}></Route>
                <Route path={APP_ROUTES.SIGN_UP} render={() => <RegistrationForm style={style} />}></Route>
                <Route path={APP_ROUTES.FORGET_PASSWORD} render={() => <ForgetPasswordForm style={style} />}></Route>
                <Route path={APP_ROUTES.RESET_PASSWORD} render={() => <ResetPasswordForm style={style} />}></Route>
                <Redirect to={{ pathname: APP_ROUTES.SIGN_IN }} ></Redirect>
            </Switch>
        )
    }

    return (
        <div className="auth">
            <div className="auth__content">
                <h1 className="auth__content__title">
                    <span className="auth__content__title--main">DotChat</span>
                    <span className="auth__content__title--sub">
                        Communicate with the world
                     </span>
                </h1>
            </div>

            <div className="auth__layout">
                <Layout>
                    {loadRoutes()}
                </Layout>
            </div>
        </div>
    )

}
