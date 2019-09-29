import React from 'react';
import './writting.scss';

export default class Writting extends React.Component {

    render() {
        return (
           <div className="footer">
                <div class="input-group">
                    <textarea className="form-control type_msg" placeholder="Write..." />
                    <div class="input-group-append">
                        <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}