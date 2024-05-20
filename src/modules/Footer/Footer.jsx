import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Logo from 'shared/components/Logo';
import PhoneLink from 'shared/components/PhoneLink';

import { BsInstagram } from 'react-icons/bs';

import css from './footer.module.css';

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.f', {
      scrollTrigger: {
        trigger: '.f',
        start: 'top 60%',
        end: 'top 10%',
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
        <Logo className={css.logo} />
        <div className={css.contactsWrapper}>
          <p className={css.text + ' ' + css.accent}>Контакти</p>
          <p className={css.text}>Email:</p>
          <Link className={css.link + ' link'} to="mailto:example@mail.com">
            example@mail.com
          </Link>
          <p className={css.text}>Телефонуйте:</p>
          <PhoneLink />
        </div>
        <div>
          <p className={css.text + ' ' + css.accent}>Слідкуйте за нами</p>
          <ul className={css.socialMediaLinks}>
            <li>
              <a
                title={'Сторінка компанії в Instagram'}
                aria-label={
                  'Перейти на сторінку компанії в Instagram в новій вкладці'
                }
                rel="noopener noreferrer nofollow"
                target="_blank"
                className={css.icon}
                href="https://instagram.com/flowerdecorcompany?igshid=MWQwMG9hejFwcDRmcQ=="
              >
                <BsInstagram className={css.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
