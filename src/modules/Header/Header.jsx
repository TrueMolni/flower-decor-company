import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';

import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Logo from '../../shared/components/Logo';
import PhoneLink from 'shared/components/PhoneLink';

import css from './header.module.css';

import { navData } from 'shared/data/navData';

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => {
    setIsShow(false);
    document.body.style.overflow = 'visible';
  };

  const showMenu = () => {
    setIsShow(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <header className={css.header}>
      <div className={css.wrapper + ' container'}>
        <Logo />
        <Navigation
          data={navData}
          navStyle={css.navigation}
          navItemStyle={css.item}
          navLinkStyle={css.link}
          navListStyle={css.navList}
        />
        <PhoneLink className={css.phone} />
        <button className={css.burger} onClick={showMenu}>
          <MenuIcon />
        </button>

        {isShow && (
          <MobileMenu
            closeHandler={handleClose}
            className={isShow && css.isShow}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
