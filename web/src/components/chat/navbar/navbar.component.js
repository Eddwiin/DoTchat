import React from 'react'
import { UserContext } from './../../../core/contexts/user.context'

export default class NavbarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }
    componentDidMount() {
        this.setState({ user: this.context })
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

NavbarComponent.contextType = UserContext