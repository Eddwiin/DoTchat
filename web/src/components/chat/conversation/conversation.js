import React from "react";
import { Message } from "@/components/shared";

import "./conversation.scss";

const Conversation = () => {
  return (
    <div className="conversation">
      <div className="conversation__primary">
        <Message />
      </div>
      <div className="conversation__secondary">
        <Message color="secondary" />
      </div>

      <div className="conversation__primary">
        <Message />
      </div>
      <div className="conversation__secondary">
        <Message color="secondary" />
      </div>

      <div className="conversation__primary">
        <Message />
      </div>
      <div className="conversation__secondary">
        <Message color="secondary" />
      </div>

      <div className="conversation__primary">
        <Message />
      </div>
      <div className="conversation__secondary">
        <Message color="secondary" />
      </div>

      <div className="conversation__primary">
        <Message />
      </div>
      <div className="conversation__secondary">
        <Message color="secondary" />
      </div>

      <div className="conversation__primary">
        <Message />
      </div>
      <div className="conversation__secondary">
        <Message color="secondary" />
      </div>
    </div>
  );
};

export default Conversation;
