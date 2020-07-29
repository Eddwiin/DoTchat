import React, { lazy, useState, useEffect } from 'react';
import { Button } from './../shared/button/button';
import './auth.scss';
import { Switch, Route, useHistory } from 'react-router-dom';
import APP_ROUTES from '../../utils/routes';

const Layout = lazy(() => import('./../shared').then(mod => ({ default: mod.Layout })));
const LoginForm = lazy(() => import('./login.form'));
const RegistrationForm = lazy(() => import('./registration.form'));
const ForgetPassword = lazy(() => import('./forget-password'));
const ResetPassword = lazy(() => import('./reset-password'));

const AuthContainer = () => {

    const [isLayoutOpen, setIslayoutOpen] = useState(false);
    const [isLoadPage, setLoadPage] = useState(true);
    const history = useHistory();

    const style = {
        input: {
            padding: "2.5rem"
        },
        btn: {
            paddingTop: "3rem",
            display: "flex",
            justifyContent: "center"
        }
    }

    useEffect(() => {
        if (isLoadPage) { 
            history.push(APP_ROUTES.AUTH);
            setLoadPage(false);
        }
    }, [isLoadPage, history])
    
    const loadRoutes = () => {
        return (
            <Switch>
                <Route path={APP_ROUTES.SIGN_IN} render={() => <LoginForm style={style} />}></Route>
                <Route path={APP_ROUTES.SIGN_UP} render={() => <RegistrationForm style={style} />}></Route>
                <Route path={APP_ROUTES.FORGET_PASSWORD} render={() => <ForgetPassword style={style} />}></Route>
                <Route path={APP_ROUTES.RESET_PASSWORD} render={() => <ResetPassword style={style} />}></Route>
            </Switch>
        )
    }

    const navigate = () => {
        setIslayoutOpen(true);
        history.push(APP_ROUTES.SIGN_IN)
    }

    const closeLayout = () => {
        setIslayoutOpen(false);
        history.push(APP_ROUTES.AUTH)
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

                <div className="auth__content__btn">
                    <Button
                        onClick={navigate}
                        label="Start now"
                        color="light"
                        isAnimate={true} />
                </div>
            </div>

            <div className="auth__layout">
                {isLayoutOpen && <Layout closeLayout={closeLayout}>
                    {loadRoutes()}
                </Layout>}
            </div>
        </div>
    )
}

export default AuthContainer;