import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import css from "./header.module.css";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const showMenu = () => {
    setIsShow(true);
  };

  return (
    <header className={css.header}>
      <div className={css.wrapper + " container"}>
        <a className={css.logo + " link"} href="#">
          Flower Decor Company
        </a>
        <nav className={css.navigation}>
          <ul className={css.navList}>
            <li className={css.item}>
              <a href="#" className={css.link}>
                Замовити
              </a>
            </li>
            <li className={css.item}>
              <a href="#" className={css.link}>
                Про нас
              </a>
            </li>
            <li className={css.item}>
              <a href="#" className={css.link}>
                Блог
              </a>
            </li>
            <li className={css.item}>
              <a href="#" className={css.link}>
                Каталог
              </a>
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
