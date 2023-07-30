import React from "react";
import PropTypes from "prop-types";

import css from "./footer.module.css";

const Footer = (props) => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <a className={css.logo} href="#">
          Flower Decor Company
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
