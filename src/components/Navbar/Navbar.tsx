import React from 'react';
import * as styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li>Home</li>
      <li>Projects</li>
      <li>About me</li>
      <li>Contact</li>
    </ul>
  );
};

export default Navbar;
