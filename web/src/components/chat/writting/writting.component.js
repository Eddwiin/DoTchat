import React from 'react';
import './writting.scss';

export default class WrittingComponent extends React.Component {

    render() {
        return (
           <div className="position-absolute">
                <div className="fixed-bottom">
                    <div className="input-group type-msg mb-2 offset-4">
                        <textarea type="text" className="form-control" placeholder="Type your message here..."
                         aria-label="Type your message here..." aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">Send</button>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}