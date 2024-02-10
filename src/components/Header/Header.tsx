import React from 'react';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import * as styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Logo />
        <Navbar />
        <ThemeToggle />
      </div>
    </>
  );
};

export default Header;
