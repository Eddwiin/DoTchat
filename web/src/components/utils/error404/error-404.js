import React from "react";
import { Button } from "@/components/shared";
import "./error-404.scss";

const Error404 = () => (
  <div className="error">
    <div className="error__page-not-found">Oops! Page not found</div>
    <div className="error__404">404</div>
    <div className="error__message">
      The page you are looking for can't be found!
    </div>
    <Button label="Back home" btnColor="primary"></Button>
  </div>
);
export default Error404;
