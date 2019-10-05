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
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                </div>
            </div>
            // <div className="messages-content">
            //     <div className="search-bar">
            //         <Row>
            //             <Col md={4}>
            //                 <div className="recent_heading">Recents</div>
            //             </Col>

            //             <Col>
            //                 <div className="srch_bar">
            //                     <div className="stylish-input-group">
            //                         <input type="text" className="search-bar"  placeholder="Search" />
            //                         <span className="input-group-addon">
            //                         <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
            //                         </span> 
            //                     </div>
            //                 </div>
            //             </Col>
            //         </Row>
            //     </div>
         
            //     <div className="inbox_chat">
            //         <CardComponent></CardComponent>
            //     </div>
    
            // </div>
        )
    }
}