import React from "react";

const Error404 = () => (
  <div className="error">
    <div className="error__404">404</div>
    <div className="error__page-not-found">Page not found</div>
    <a className="error__go-back" href={"/"}>
      Back
    </a>
  </div>
);
export default Error404;
