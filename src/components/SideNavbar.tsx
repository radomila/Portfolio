import React, { useState } from 'react';
import hamburgerMenu from '../icons/hamburger-menu.svg';
import cross from '../icons/cross.png';
import '../styles/styles.css';

const SideNavbar = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuIsOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="responsive-menu">
        <button onClick={handleMenuOpen}>
          <img src={hamburgerMenu} alt="hamburger-menu" />
        </button>
        {isMenuOpen && (
          <div className="toggle-menu">
            <button onClick={handleMenuOpen}>
              <img className="close-logo" src={cross} alt="cross" />
            </button>
            <ul className="toggle-items">
              <li>About me</li>
              <li>Education</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SideNavbar;
