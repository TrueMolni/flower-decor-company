import PropTypes from "prop-types";

import Button from "../../../shared/components/Button";
import Title from "../../../shared/components/Title";

import css from "./feature.module.css";

const Feature = ({ title, text }) => {
  return (
    <li className={css.item}>
      <Title size={"h3"} title={title} />
      <p className={css.text}>{text}</p>
      <Button customClass={css.btn} text={"Переглянути"} />
    </li>
  );
};

export default Feature;

Feature.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
