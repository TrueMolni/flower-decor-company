import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from "prop-types";

// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import TwitterIcon from '@mui/icons-material/Twitter';

import {
  BsInstagram,
  BsPinterest,
  BsFacebook,
  BsTwitter,
} from 'react-icons/bs';

import css from './footer.module.css';

const Footer = props => {
  return (
    <footer className={css.footer}>
      <div className={css.container + ' conatiner'}>
        <Link className={css.logo} href="/">
          Flower Decor Company
        </Link>
        <div className={css.contactsWrapper}>
          <p className={css.text + ' ' + css.accent}>Контакти</p>
          <p className={css.text}>Маєте запитання чи пропозиції?</p>
          <Link className={css.link + ' link'} to="mailto:example@mail.com">
            example@mail.com
          </Link>
          <p className={css.text}>Маєте питання? Телефонуйте</p>
          <Link className={css.link + ' link'} to="tel:+01 598 269 4756">
            +01 598 269 4756
          </Link>
        </div>
        <div>
          <p className={css.text + ' ' + css.accent}>Слідкуйте за нами</p>
          <ul className={css.socialMediaLinks}>
            <li>
              <Link className={css.icon} to="/">
                {/* <FacebookOutlinedIcon className={css.icon} /> */}
                <BsFacebook className={css.icon} />
              </Link>
            </li>
            <li>
              <Link className={css.icon} to="/">
                {/* <InstagramIcon className={css.icon} /> */}
                <BsInstagram className={css.icon} />
              </Link>
            </li>
            <li>
              <Link className={css.icon} to="/">
                {/* <PinterestIcon className={css.icon} /> */}
                <BsPinterest className={css.icon} />
              </Link>
            </li>
            <li>
              <Link className={css.icon} to="/">
                {/* <TwitterIcon className={css.icon} /> */}
                <BsTwitter className={css.icon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// Footer.propTypes = {};

export default Footer;
