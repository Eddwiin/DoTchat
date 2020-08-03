import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./link-to.module.scss";

const LinkTo = ({ children, to = "" }) => {
  return (
    <div className={style.link}>
      <Link to={to} >{children}</Link>
    </div>
  );
};

LinkTo.propTypes = {
  to: PropTypes.string.isRequired
};

export { LinkTo };
