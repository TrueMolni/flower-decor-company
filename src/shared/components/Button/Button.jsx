import PropTypes from "prop-types";

import css from "./button.module.css";

const Button = ({ text, children }) => {
  return (
    <button className={css.btn}>
      {text}
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
};
