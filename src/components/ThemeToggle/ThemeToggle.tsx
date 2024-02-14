import React from 'react';
import { useThemeToggleContext } from '../Context/ThemeContext';
import * as styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeToggleContext();

  const handleThemeToggle = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const dark = theme === 'dark';

  return (
    <div
      className={`${styles.switcher} ${dark ? styles.active : ''}`}
      onClick={handleThemeToggle}
    >
      <div className={`${styles.flicker} ${dark ? styles.active : ''}`}></div>
      <div className={`${dark ? styles.sun : styles.moon}`}></div>
    </div>
  );
};

export default ThemeToggle;
