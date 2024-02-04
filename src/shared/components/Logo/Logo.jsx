import { Link } from 'react-router-dom';

import css from './logo.module.css';

const Logo = ({ className = '' }) => (
  <Link to={'/'} className={css.logo + ' link ' + className}>
    Flower Decor Company
  </Link>
);
export default Logo;
