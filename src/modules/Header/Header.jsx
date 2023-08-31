import { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

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
        <Link to={'/'} className={css.logo + ' link'}>
          Flower Decor Company
        </Link>
        <Navigation
          data={navData}
          navStyle={css.navigation}
          navItemStyle={css.item}
          navLinkStyle={css.link}
          navListStyle={css.navList}
        />
        <button className={css.burger} onClick={showMenu}>
          <MenuIcon />
        </button>
        {isShow && <MobileMenu closeHandler={handleClose} />}
      </div>
    </header>
  );
};

export default Header;
