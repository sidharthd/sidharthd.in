import React from 'react';
import { Link } from 'gatsby';
import { close, menu } from '../icons';

type Props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<Props> = ({ isMenuOpen, toggleMenu }: Props) => (
  <header>
    <Link to="/">Sidharth D</Link>
    <img src={isMenuOpen ? close : menu} alt="menu" className="toggle-menu" onClick={toggleMenu} />
  </header>
);

export default Header;
