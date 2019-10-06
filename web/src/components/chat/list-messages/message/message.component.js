import React from 'react';
import './message.scss';

export default class MessageComponent extends React.Component {

    render() {
        return(
            <div className="test">
                <div className="d-flex flex-row-reverse">
                    <div className="p-2 w-25">
                        <div className="p-2 message  message-send">
                            Hello ! jdeio jio jioj ioj oin, oin io io jioj oi fzefezdcsd vfdvf vf gr gfre zdz dzd s sdcsd cds cd scds cds cds
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row">
                    <div className="p-2 w-25">
                        <div className="message p-2 message-receive">
                            Hello ! jdeio jio jioj ioj oin, oin io io jioj oi fzefezdcsd vfdvf vf gr gfre zdz dzd s sdcsd cds cd scds cds cds
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}