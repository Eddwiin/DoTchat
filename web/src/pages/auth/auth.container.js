import React, { lazy } from 'react';
import style from './auth.module.scss';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import APP_ROUTES from '../../utils/routes';
import { Button } from './../../UI'
import * as actionCreators from './store/actions';
import { connect } from 'react-redux';

const Layout = lazy(() => import('../../UI').then(mod => ({ default: mod.Layout })));
const LoginForm = lazy(() => import('./forms/login'));
const RegistrationForm = lazy(() => import('./forms/registration'));
const ForgetPasswordForm = lazy(() => import('./forms/forget-password'));
const ResetPasswordForm = lazy(() => import('./forms/reset-password'));

const AuthContainer = ({ isLayoutOpen, setLayoutOpen }) => {

    const history = useHistory();

    const loadRoutes = () => (
        <Switch>
            <Route path={APP_ROUTES.SIGN_IN} render={() => <LoginForm style={style} />}></Route>
            <Route path={APP_ROUTES.SIGN_UP} render={() => <RegistrationForm style={style} />}></Route>
            <Route path={APP_ROUTES.FORGET_PASSWORD} render={() => <ForgetPasswordForm style={style} />}></Route>
            <Route path={APP_ROUTES.RESET_PASSWORD} render={() => <ResetPasswordForm style={style} />}></Route>
            <Redirect to={{ pathname: APP_ROUTES.AUTH }} ></Redirect>
        </Switch>
    );

    const openLayout = () => {
        setLayoutOpen(true);
        history.push(APP_ROUTES.SIGN_IN);
    }

    const closeLayout = () => {
        setLayoutOpen(false);
        history.push(APP_ROUTES.AUTH);
    }

    return (
        <div className={style.auth}>
            <div className={style.auth__content}>
                <h1 className={style.auth__content__title}>
                    <span className={style.auth__content__title_main}>DotChat</span>
                    <span className={style.auth__content__title_sub}>
                        Communicate with the world
                     </span>
                </h1>

                <div className={style.auth__content__btn}>
                    <Button
                        onClick={openLayout}
                        label="Start now"
                        color="light"
                        isAnimate={true} />
                </div>
            </div>

            <div className={style.auth__layout}>
                {isLayoutOpen && <Layout closeLayout={closeLayout}>
                    {loadRoutes()}
                </Layout>}
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        isLayoutOpen: state.authLayout.isOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLayoutOpen: (value) => dispatch(actionCreators.setLayoutOpen(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);