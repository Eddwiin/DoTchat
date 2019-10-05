import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import './card.scss';

export default class CardComponent extends React.Component {

    render() {
        return(
            <div className="user-card">
                <Row>
                    <Col md={{ span: 2 }}>
                        <Image className="avatar" src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/>
                    </Col>

                    <Col md={{ span: 8 }}>
                        <div className="resume-conversation">
                            <span className="user-name">Eddwiin <span className="hour-message">29/09/2019</span> </span>
                            <p className="last-sentence">Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                        </div>
                    </Col>
    
                </Row>
                
            </div>
        )
    }
}