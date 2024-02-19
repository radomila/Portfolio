import React, { ReactNode } from 'react';
import * as styles from './Header.module.css';

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <div className={styles.header}>{children}</div>;
};

export default Header;
