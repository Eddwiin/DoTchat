import React from 'react';
import ListUsersComponent from './list-users/list-users.component';
import Writting from './writting/writting.component';
import { Row } from 'react-bootstrap';

export default class ChatContainer extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <ListUsersComponent></ListUsersComponent>
                    <Writting></Writting>
                </Row>
            </div>
        )
    }
}