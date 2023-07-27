import PropTypes from "prop-types";

const Button = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
};
