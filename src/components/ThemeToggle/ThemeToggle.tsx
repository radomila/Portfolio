import React, { useState } from 'react';
import * as styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleTheme = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${styles.switcher} ${isActive ? styles.active : ''}`}
      onClick={toggleTheme}
    >
      <div
        className={`${styles.flicker} ${isActive ? styles.active : ''}`}
      ></div>
      <div className={`${isActive ? styles.sun : styles.moon}`}></div>
    </div>
  );
};

export default ThemeToggle;
