import React from 'react';
import PropTypes from 'prop-types';

import css from './title.module.css';

const Title = ({ title, size, customClass }) => {
  const markup = size => {
    switch (size) {
      case 'h1':
        return (
          <h1
            className={
              !customClass ? css.mainTitle : css.mainTitle + ' ' + customClass
            }
          >
            {title}
          </h1>
        );

      case 'h2':
        return (
          <h2
            className={!customClass ? css.title : css.title + ' ' + customClass}
          >
            {title}
          </h2>
        );

      case 'h3':
        return (
          <h3
            className={
              !customClass ? css.subTitle : css.subTitle + ' ' + customClass
            }
          >
            {title}
          </h3>
        );

      default:
        return <h4 className={css.subTitle}>{title}</h4>;
    }
  };

  return <>{markup(size)}</>;
};

export default Title;

Title.defaultProps = {
  title: 'Light, Fast & Powerful',
  size: 'h1',
  customClass: '',
};

Title.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  customClass: PropTypes.string,
};
