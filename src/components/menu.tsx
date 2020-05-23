import React from 'react';
import { Link } from 'gatsby';

type Props = {
  toggleMenu: () => void;
};

const Menu: React.FC<Props> = ({ toggleMenu }) => (
  <div className="menu-container">
    <Link
      to="/about"
      className="menu-button menu-button-green"
      onClick={toggleMenu}
    >
      About
    </Link>
    <Link
      to="/page-2"
      className="menu-button menu-button-blue"
      onClick={toggleMenu}
    >
      Blog
    </Link>
    <Link to="/" className="menu-button menu-button-pink" onClick={toggleMenu}>
      Firstbyte
    </Link>
  </div>
);

export default Menu;
