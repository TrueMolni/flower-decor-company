import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import React from "react";

const MobileMenu = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="mobile-menu" data-menu>
      <div className="container mobile-menu__container">
        <button className="closeBtn" type="button" data-menu-close>
          <CloseIcon />
        </button>
        <ul className="mobile-menu__list list">
          <li className="mobile-menu__item">
            <a
              className="mobile-menu__link link mobile-menu__link_current"
              href="./index.html"
            >
              Студія
            </a>
          </li>
          <li className="mobile-menu__item">
            <a className="mobile-menu__link link" href="./portfolio.html">
              Портфоліо
            </a>
          </li>
          <li className="mobile-menu__item">
            <a className="mobile-menu__link link" href="№">
              Контакти
            </a>
          </li>
        </ul>
        <ul className="mobile-menu__contacts list">
          <li className="mobile-contacts__item">
            <a
              className="mobile-contacts__link_phone link"
              href="tel:+380961111111"
            >
              +38 096 111 11 11
            </a>
          </li>
          <li className="mobile-contacts__item">
            <a
              className="mobile-contacts__link_email link"
              href="mailto:info@devstudio.com"
            >
              info@devstudio.com
            </a>
          </li>
        </ul>
        <ul className="list mobile-menu__media-list">
          <li className="mobile-menu__media-list-item">
            <a
              href="https://www.instagram.com"
              className="link mobile-menu__media-list-link"
              lang="en"
            >
              Instagram
            </a>
          </li>
          <li className="mobile-menu__media-list-item">
            <a
              href="https://twitter.com/"
              className="link mobile-menu__media-list-link"
              lang="en"
            >
              Twitter
            </a>
          </li>
          <li className="mobile-menu__media-list-item">
            <a
              href="https://www.facebook.com/"
              className="link mobile-menu__media-list-link"
              lang="en"
            >
              Facebook
            </a>
          </li>
          <li className="mobile-menu__media-list-item">
            <a
              href="https://www.linkedin.com/"
              className="link mobile-menu__media-list-link"
              lang="en"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
