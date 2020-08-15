/// <reference path='./layout.d.ts'/>

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Menu from './menu';
import './styles.css';

const Layout: React.FC = ({ children }) => {
  const [isMenuOpen, setMenuOpenState] = useState(false);
  const toggleMenu = () => {
    setMenuOpenState(!isMenuOpen);
  };
  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
      >
        {isMenuOpen ? (
          <Menu toggleMenu={toggleMenu} />
        ) : (
          <>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()} Sidharth D, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </>
        )}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
