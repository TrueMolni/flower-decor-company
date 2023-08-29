import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

import css from './header.module.css';

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const showMenu = () => {
    setIsShow(true);
  };

  return (
    <header className={css.header}>
      <div className={css.wrapper + ' container'}>
        <Link to={'/'} className={css.logo + ' link'}>
          Flower Decor Company
        </Link>
        <nav className={css.navigation}>
          <ul className={css.navList}>
            <li className={css.item}>
              <NavLink to="/" className={css.link}>
                Замовити
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/" className={css.link}>
                Про нас
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/" className={css.link}>
                Блог
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/gallery" className={css.link}>
                Галерея
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className={css.burger} onClick={showMenu}>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
