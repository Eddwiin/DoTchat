import React from "react";
import { Input } from "@/components/shared";

import "./write-text.scss";

const WriteText = () => {
  return (
    <footer className="write-text">
      <div className="write-text__content">
        <Input placeholder="Type your message here" />
        <span className="write-text__content__send">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
            ></path>
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default WriteText;
