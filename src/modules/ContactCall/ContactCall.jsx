import React from 'react';
// import PropTypes from "prop-types";

import Title from '../../shared/components/Title';
import Button from '../../shared/components/Button';

import css from './contact-call.module.css';

const ContactCall = () => {
  return (
    <section className={css.section}>
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
        <div className={css.contentWrapper + ' container'}>
          <Title customClass={css.mainTitle} title={'Пишіть нам'} size={'h2'} />
          <p className={css.description}>Створимо ефектний декор</p>

          <Button customClass={css.callBtn} text={'Замовити'} />
        </div>
      </div>
    </section>
  );
};

// ContactCall.propTypes = {};

export default ContactCall;
