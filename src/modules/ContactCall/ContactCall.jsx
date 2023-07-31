import React from "react";
// import PropTypes from "prop-types";

import Title from "../../shared/components/Title";
import Button from "../../shared/components/Button";

import css from "./contact-call.module.css";

const ContactCall = (props) => {
  return (
    <section>
      <div className={css.container}>
        <div className={css.background}>
          <div className={css.contentWrapper}>
            <Title
              customClass={css.title}
              size={"h2"}
              title={"Хочете замовити декор?"}
            />
            <p className={css.description}>Зв'яжіться з нами</p>
            <Button text={"Зв’язатись"} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ContactCall.propTypes = {};

export default ContactCall;
