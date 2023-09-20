import React from 'react';
import DarkMode from './DarkModeButton';
import '../styles/styles.css';

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>Projects</li>
      <li>About me</li>
      <li>Contact</li>
      <DarkMode />
    </ul>
  );
};

export default Navbar;
