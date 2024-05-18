// import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const Navigation = ({
  data,
  navStyle,
  navItemStyle,
  navListStyle,
  navLinkStyle,
}) => {
  const elements = data.map(({ id, text, link }) => (
    <li className={navItemStyle} key={id}>
      {/* <NavLink className={navLinkStyle} to={link}>
        {text}
      </NavLink> */}
      <Link
        className={navLinkStyle}
        to={link}
        href="/"
        spy
        smooth
        duration={500}
      >
        {text}
      </Link>
    </li>
  ));

  return (
    <nav className={navStyle}>
      <ul className={navListStyle}>{elements}</ul>
    </nav>
  );
};

Navigation.propTypes = {
  data: PropTypes.array,
  navLinkStyle: PropTypes.string,
  navListStyle: PropTypes.string,
  navItemStyle: PropTypes.string,
};

export default Navigation;
