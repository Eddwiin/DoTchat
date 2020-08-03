import React from "react";
import style from  "./error404.module.scss";
import { useHistory } from "react-router-dom";
import { Button } from '../button/button';
import APP_ROUTES from "../../utils/routes";
// import APP_ROUTES from "../../../utils/route-config";

const Error404 = () => {
  const history = useHistory();

  return (
    <div className={style.error}>
      <div className={style.error__pageNotFound}>Oops! Page not found</div>
      <div className={style.error__404}>404</div>
      <div className={style.error__message}>
        The page you are looking for can't be found!
      </div>
      <Button label="Back" onClick={() => history.push(APP_ROUTES.DEFAULT)} />
    </div>
  );
};
export { Error404 };
