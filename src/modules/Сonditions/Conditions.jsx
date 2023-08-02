import React from "react";
// import PropTypes from "prop-types";

import Title from "../../shared/components/Title";
import Button from "../../shared/components/Button";
import PhotoCard from "../../shared/components/PhotoCard";

import { items } from "./items";
import image1 from "../../shared/images/conditions/conditions_1x.png";
// import image2 from "../../shared/images/conditions/conditions_2x.png";

import css from "./conditions.module.css";

const Conditions = () => {
  const list = items.map(({ id, text }) => (
    <li key={id}>
      <p>{text}</p>
    </li>
  ));

  return (
    <div className={css.wrapper}>
      <div className={css.contentWrapper}>
        <Title size={"h2"} title={"Умови співпраці"} />
        <ul>{list}</ul>
        <Button text={"Зв'язатися з нами"} />
      </div>

      <PhotoCard
        img={image1}
        imageClass={""}
        customClass={""}
        width={"592"}
        alt={"wedding couple"}
      />
    </div>
  );
};

export default Conditions;

// Conditions.propTypes = {};
