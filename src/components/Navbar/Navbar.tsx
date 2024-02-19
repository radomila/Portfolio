import React from 'react';
import * as styles from './Navbar.module.css';

interface NavbarProps {
  onMenuItemClick: (name: string) => void;
}

const Navbar = ({ onMenuItemClick }: NavbarProps) => {
  return (
    <ul className={styles.navbar}>
      <li onClick={() => onMenuItemClick('home')}>Home</li>
      <li onClick={() => onMenuItemClick('projects')}>Projects</li>
      <li onClick={() => onMenuItemClick('experience')}>Experience</li>
      {/* TODO: Finish contact section  */}
      {/* <li>Contact</li> */}
    </ul>
  );
};

export default Navbar;
