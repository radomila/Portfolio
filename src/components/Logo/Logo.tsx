import React from 'react';
import codingLogo from '../../icons/coding-logo.png';
import * as styles from './Logo.module.css';

const Logo = () => {
  return (
    <h3 className={styles.portfolio}>
      <img src={codingLogo} alt="logo" />
      Portfolio.
    </h3>
  );
};

export default Logo;
