import css from "./header.module.css";

const Header = () => {
  return (
    <div className={css.wrapper}>
      <a className={css.logo} href="#">
        Flower Decor Company
      </a>
      <nav className={css.navigation}>
        <ul className={css.navList}>
          <li>
            <a href="#" className={css.link}>Замовити</a>
          </li>
          <li>
            <a href="#" className={css.link}>Про нас</a>
          </li>
          <li>
            <a href="#" className={css.link}>Блог</a>
          </li>
          <li>
            <a href="#" className={css.link}>Каталог</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
