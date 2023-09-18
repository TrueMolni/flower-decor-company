import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { GiSunflower } from 'react-icons/gi';
import { BsMoonStars } from 'react-icons/bs';

import css from './dark-theme-btn.module.css';

const DarkThemeBtn = props => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleClick = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (!darkTheme) {
      if (document.body.classList.contains(css.darkTheme)) {
        document.body.classList.remove(css.darkTheme);
      }

      document.body.classList.add(css.lightTheme);
    } else {
      if (document.body.classList.contains(css.lightTheme)) {
        document.body.classList.remove(css.lightTheme);
      }
      document.body.classList.add(css.darkTheme);
    }
  }, [darkTheme]);

  return (
    <div
      className={css.themeBtn}
      onClick={handleClick}

      //   text={darkTheme === true ? 'Light' : 'Dark'}
    >
      {darkTheme ? (
        <GiSunflower className={css.iconPosition + ' ' + css.iconStyle} />
      ) : (
        <BsMoonStars className={css.iconPosition + ' ' + css.iconStyle} />
      )}
    </div>
  );
};

// DarkThemeBtn.propTypes = {};

export default DarkThemeBtn;
