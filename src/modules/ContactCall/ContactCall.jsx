// import { useState, useEffect } from 'react';
// import PropTypes from "prop-types";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Title from '../../shared/components/Title';
import Button from '../../shared/components/Button';
import HeroModal from 'shared/components/HeroModal';

import { useToggle } from 'shared/hooks/useToggle';

import css from './contact-call.module.css';

const ContactCall = () => {
  // const [userData, setUserData] = useState([]);
  const { open, close, isOpen } = useToggle();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.g', {
      scrollTrigger: {
        trigger: '.g',
        start: 'top 50%',
        end: 'top 10%',
      },
      opacity: 1,
      x: 0,
      duration: 2,
      ease: 'power4.out',
    });
  }, []);

  // const onSubmit = user => {
  //   setUserData(prev => [...prev, user]);
  //   console.log(userData);
  // };

  return (
    <section id="order" className={css.section}>
      {/* <div className={css.container}>
        <div className={css.background}>
          <div className={css.contentWrapper}>
            <Title
              customClass={css.title}
              size={"h2"}
              title={
                "Наша ціль - культивувавати декор, флористику як мистецтво"
                "Для зв'язку з нами"
              }
            />
            <p className={css.description}>
              Якщо наші цілі співпадають - давайте створювати!
            </p>
            <Button text={"Зв’язатись"} />
          </div>
        </div>
      </div> */}
      {/* From Hero */}
      <div className={css.bg}>
        <div className={css.contentWrapper + ' container g'}>
          <span>
            <Title
              customClass={css.mainTitle}
              title={'Пишіть нам'}
              size={'h2'}
            />
          </span>
          <p className={css.description}>Створимо ефектний декор</p>

          <Button onClick={open} customClass={css.callBtn} text={'Замовити'} />
        </div>
      </div>
      <HeroModal isOpen={isOpen} close={close} />
    </section>
  );
};

// ContactCall.propTypes = {};

export default ContactCall;
