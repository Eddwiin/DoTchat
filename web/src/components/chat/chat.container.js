import React from 'react';
import ListUsersComponent from './list-users/list-users.component';
import WrittingComponent from './writting/writting.component';
import { Row } from 'react-bootstrap';
import ListMessagesComponent from './list-messages/list-messages.component';

export default class ChatContainer extends React.Component {

    render() {
        return (
            <div>
                <ListUsersComponent></ListUsersComponent>
            </div>
            // <Row>
            //     <ListUsersComponent></ListUsersComponent>
            //     <ListMessagesComponent></ListMessagesComponent>
            //     <WrittingComponent></WrittingComponent>
            // </Row>
        )
    }
}