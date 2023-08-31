// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

import Navigation from '../Navigation';

import css from './mobile-menu.module.css';

import { navData } from '../../../shared/data/navData';

const MobileMenu = ({ closeHandler }) => {
  const handleClickOutside = event => {
    event.stopPropagation();
    if (
      !event.target.classList.contains('backdrop') &&
      !event.target.classList.contains('link')
    ) {
      return;
    }
    closeHandler();
  };

  return (
    <div onClick={handleClickOutside} className={css.backdrop + ' backdrop'}>
      <div className={css.mobileModal + ' container'}>
        <button onClick={closeHandler} className={css.closeBtn} type="button">
          <CloseIcon />
        </button>
        <Navigation
          navStyle={css.navigation}
          navItemStyle={css.item}
          navLinkStyle={css.link + ' link'}
          navListStyle={css.navList}
          data={navData}
        />
      </div>
    </div>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  closeHandler: PropTypes.func,
};
