import React from "react";
import PropTypes from "prop-types";
import style from "./link-to.module.scss";
import Link from 'next/link';

const LinkTo = ({ children, href = "" }) => {
  return (
    <div className={style.link}>
      <Link href={href} ><a>{children}</a></Link>
    </div>
  );
};

LinkTo.propTypes = {
  href: PropTypes.string.isRequired
};

export { LinkTo };
