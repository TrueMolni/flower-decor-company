import React from "react";
import PropTypes from "prop-types";

import css from "./title.module.css";

const Title = ({ title, size }) => {
  const markup = (size) => {
    switch (size) {
      case "h1":
        return <h1 className={css.mainTitle}>{title}</h1>;

      case "h2":
        return <h2 className={css.title}>{title}</h2>;

      case "h3":
        return <h3 className={css.subTitle}>{title}</h3>;

      default:
        return <h4 className={css.subTitle}>{title}</h4>;
    }
  };

  return <>{markup(size)}</>;
};

export default Title;

Title.defaultProps = {
  title: "Light, Fast & Powerful",
  size: "h1",
};

Title.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
};
