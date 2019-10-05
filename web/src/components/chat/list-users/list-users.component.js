import React from 'react';
import './list-users.scss';
import { Row, Col, Image } from 'react-bootstrap';
import CardComponent from './card/card.component';

export default class ListUsersComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }

    handleChangeEvent(e) {

    }

    render() {
        return (
            <div className="container-cards">
                <div className="container-search">
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="Search a chat" />
                    </div>
                </div>


                <div className="list-cards">
                    <CardComponent></CardComponent>
                </div>
            </div>
        )
    }
}