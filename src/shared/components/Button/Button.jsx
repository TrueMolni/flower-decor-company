import PropTypes from 'prop-types';

import css from './button.module.css';

const Button = ({ onClick, text, children, customClass, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={customClass ? css.btn + ' ' + customClass : css.btn}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  customClass: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  text: 'Click',
  customClass: '',
  type: 'button',
};
