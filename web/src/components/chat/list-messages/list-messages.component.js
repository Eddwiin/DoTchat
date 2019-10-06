import React from 'react';
import Message from './message/message.component';
import './list-messages.scss';

export default class ListMessagesComponent extends React.Component {

    render() {
        return (
            <div>
               <Message></Message>
               <Message></Message>
            </div>
        )
    }
}