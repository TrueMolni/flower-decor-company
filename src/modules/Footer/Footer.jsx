import React from "react";
// import PropTypes from "prop-types";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

import css from "./footer.module.css";

const Footer = (props) => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <a className={css.logo} href="#">
          Flower Decor Company
        </a>
        <div>
          <p>Контакти</p>
          <p>Маєте запитання чи пропозиції?</p>
          <a href="mailto:example@mail.com">example@mail.com</a>
          <p>Маєте питання? Телефонуйте</p>
          <a href="tel:+01 598 269 4756">+01 598 269 4756</a>
        </div>
        <div>
          <ul className={css.socialMediaLinks}>
            <li>
              <a href="#">
                <FacebookOutlinedIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <PinterestIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// Footer.propTypes = {};

export default Footer;
