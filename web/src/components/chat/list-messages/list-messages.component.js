import React from 'react';
import Message from './message/message.component';
import './list-messages.scss';

export default class ListMessagesComponent extends React.Component {

    render() {
        return (
            <div className="list-messages">
                <div className="container-message ">
                    <Message></Message>
                </div>
                <div className="container-message">
                    <Message></Message>
                </div>
                <div className="container-message">
                    <Message></Message>
                </div>


                   <div className="container-message ">
                    <Message></Message>
                </div>
                <div className="container-message">
                    <Message></Message>
                </div>
                <div className="container-message">
                    <Message></Message>
                </div>


                   <div className="container-message ">
                    <Message></Message>
                </div>
                <div className="container-message">
                    <Message></Message>
                </div>
                <div className="container-message">
                    <Message></Message>
                </div>
            </div>
   
        )
    }
}