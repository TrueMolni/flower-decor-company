import { useState, useEffect } from 'react';
import { GiSunflower } from 'react-icons/gi';
// import { BsMoonStars } from 'react-icons/bs';

import { BsFillMoonStarsFill } from 'react-icons/bs';
import css from './dark-theme-btn.module.css';

const DarkThemeBtn = () => {
  const STORAGE_KEY = 'darkTheme';

  const getStoredTheme = () => {
    try {
      const storedTheme = localStorage.getItem(STORAGE_KEY);
      return storedTheme === 'true';
    } catch (error) {
      console.error('Помилка при отриманні даних з localStorage:', error);
      return false;
    }
  };

  const [darkTheme, setDarkTheme] = useState(getStoredTheme());

  const handleClick = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme.toString());
    } catch (error) {
      console.error('Помилка при збереженні даних в localStorage:', error.name);
    }
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
    <div className={css.themeBtn} onClick={handleClick}>
      {darkTheme ? (
        <GiSunflower className={css.iconPosition + ' ' + css.iconStyle} />
      ) : (
        // <BsMoonStars className={css.iconPosition + ' ' + css.iconStyle} />
        <BsFillMoonStarsFill
          className={css.iconPosition + ' ' + css.iconStyle}
        />
      )}
    </div>
  );
};

export default DarkThemeBtn;
