import React from 'react';

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            }
        };

        this.handleChange.bind(this);
    }

    handleChange(event){
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    render () {
        return (
            <form>
                <input
                type="email"
                name="email"
                value={this.state.user.email}
                onChange={this.handleChange}
                />

                <input
                type="password"
                name="email"
                value={this.state.user.password}
                onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default Login;