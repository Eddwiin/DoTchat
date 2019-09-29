import React from 'react';
import ListUsersComponent from './list-users/list-users.component';

export default class ChatContainer extends React.Component {

    render() {
        return (
            <div>
                <ListUsersComponent></ListUsersComponent>
            </div>
        )
    }
}