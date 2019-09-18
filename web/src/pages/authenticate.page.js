import React from 'react';
import LoginComponent from '../components/login/login.component';


export class AuthenticatePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <LoginComponent></LoginComponent>
            </div>
        )
    }
} 