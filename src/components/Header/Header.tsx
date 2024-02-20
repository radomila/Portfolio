import React, { ReactNode } from 'react';
import { useThemeToggleContext } from '../Context/ThemeContext';
import * as styles from './Header.module.css';

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  const { theme } = useThemeToggleContext();

  return (
    <div className={`${styles.header} ${theme === 'dark' ? styles.dark : ''}`}>
      {children}
    </div>
  );
};

export default Header;
