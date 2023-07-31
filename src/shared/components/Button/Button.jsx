import PropTypes from "prop-types";

import css from "./button.module.css";

const Button = ({ text, children, customClass }) => {
  return (
    <button className={customClass ? css.btn + " " + customClass : css.btn}>
      {text}
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  customClass: PropTypes.string,
};

Button.defaultProps = {
  text: "Click",
  customClass: "",
};
