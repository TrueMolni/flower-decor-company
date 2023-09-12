import PropTypes from 'prop-types';

import css from './button.module.css';

const Button = ({ onClick, text, children, customClass }) => {
  return (
    <button
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
};

Button.defaultProps = {
  text: 'Click',
  customClass: '',
};
