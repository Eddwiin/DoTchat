import React from "react";
import { Button } from "@/components/shared";
import "./error-404.scss";
import { useHistory } from "react-router-dom";

const Error404 = () => {
  const history = useHistory();

  return (
    <div className="error">
      <div className="error__page-not-found">Oops! Page not found</div>
      <div className="error__404">404</div>
      <div className="error__message">
        The page you are looking for can't be found!
      </div>
      <Button label="Back" onClick={() => history.goBack()} />
    </div>
  );
};
export { Error404 };
