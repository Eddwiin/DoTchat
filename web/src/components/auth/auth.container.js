import React, { lazy } from 'react';
import authLogo from './../../assets/images/auth-logo.png'
import './auth.scss';

const LoginComponent = lazy(() => import('./login/login.component'));
const RegistrationComponent = lazy(() => import('./registration/registration.component'));
const ForgotPasswordComponent = lazy(() => import('./forgot-password/forgot-password.component'));
const NotFoundComponent = lazy(() => import('../generics/not-found/not-found.component'));

export default class AuthContainer extends React.Component {

    loadComponent() {

        switch (this.props.match.params.action) {

            case 'login':
                return <LoginComponent loadComponent={this.loadComponent.bind(this)}/>
            
            case 'registration':
                return <RegistrationComponent {...this.props}/>

            case 'forgot-password':
                return <ForgotPasswordComponent />
            
            default:
                return <NotFoundComponent />
        }

    }

    render() {
        return(
            <div className="container">
                <div className="offset-3 card card-signin my-5">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xs-8 offset-xs-8 col-md-6 offset-md-5 pb-4">
                                <img src={authLogo} className="w-25" alt="logo" />
                            </div>
                        </div>

                        { this.loadComponent() }
                    </div>
                </div>
            </div>
        )
    }
}