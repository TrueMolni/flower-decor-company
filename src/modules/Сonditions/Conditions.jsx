import React from "react";
import PropTypes from "prop-types";

import Button from "../../shared/components/Button";

import { items } from "./items";
import image1 from "../../shared/images/conditions/conditions_1x.png";
// import image2 from "../../shared/images/conditions/conditions_2x.png";

import css from "./conditions.module.css";

const Conditions = ({ title }) => {
  const list = items.map(({ id, text }) => (
    <li key={id}>
      <p>{text}</p>
    </li>
  ));

  return (
    <div className={css.wrapper}>
      <div className={css.contentWrapper}>
        <h2 className={css.title}>{title}</h2>
        <ul>{list}</ul>
        <Button text={"Зв'язатися з нами"} />
      </div>
      <img width="592" src={image1} alt="wedding couple" />
    </div>
  );
};

export default Conditions;

Conditions.propTypes = {
  title: PropTypes.string,
};
