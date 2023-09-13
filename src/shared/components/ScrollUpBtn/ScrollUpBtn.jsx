import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

import css from './scroll-up-btn.module.css';

const ScrollUpBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={css.topToBtm}>
      {showTopBtn && (
        <FaAngleUp
          onClick={goToTop}
          className={css.iconPosition + ' ' + css.iconStyle}
        />
      )}
    </div>
  );
};
export default ScrollUpBtn;
