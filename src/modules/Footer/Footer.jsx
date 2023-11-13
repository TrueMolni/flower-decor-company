import { useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Link } from 'react-router-dom';
// import PropTypes from "prop-types";

// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import TwitterIcon from '@mui/icons-material/Twitter';

import {
  BsInstagram,
  // BsPinterest,
  // BsFacebook,
  // BsTwitter,
} from 'react-icons/bs';

import css from './footer.module.css';

const Footer = props => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.f', {
      scrollTrigger: {
        trigger: '.f',
        start: 'top 50%',
        end: 'top 10%',
        // snap: 1,
        // scrub: 1,
        // markers: true,
        // toggleActions: 'restart pause reverse pause',
      },
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'power4.out',
    });
  }, []);

  return (
    <footer className={css.footer + ' f'}>
      <div className={css.container + ' conatiner'}>
        <Link className={css.logo} href="/">
          Flower Decor Company
        </Link>
        <div className={css.contactsWrapper}>
          <p className={css.text + ' ' + css.accent}>Контакти</p>
          <p className={css.text}>Email:</p>
          <Link className={css.link + ' link'} to="mailto:example@mail.com">
            example@mail.com
          </Link>
          <p className={css.text}>Телефонуйте:</p>
          <Link className={css.link + ' link'} to="tel:+380661093240">
            +380 66 109 3240
          </Link>
        </div>
        <div>
          <p className={css.text + ' ' + css.accent}>Слідкуйте за нами</p>
          <ul className={css.socialMediaLinks}>
            {/* <li>
              <Link className={css.icon} to="/">
                <BsFacebook className={css.icon} />
              </Link>
            </li> */}
            <li>
              <Link
                target="_blank"
                className={css.icon}
                to="https://instagram.com/flowerdecorcompany?igshid=MWQwMG9hejFwcDRmcQ=="
              >
                {/* <InstagramIcon className={css.icon} /> */}
                <BsInstagram className={css.icon} />
              </Link>
            </li>
            {/* <li>
              <Link className={css.icon} to="/">
                
                <BsPinterest className={css.icon} />
              </Link>
            </li> */}
            {/* <li>
              <Link className={css.icon} to="/">
            
                <BsTwitter className={css.icon} />
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

// Footer.propTypes = {};

export default Footer;
