import React from 'react';
import * as styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  return (
    <div className={styles.switcher}>
      <div className={styles.flicker}></div>
      <div className={styles.moon}></div>
    </div>
  );
};

export default ThemeToggle;
