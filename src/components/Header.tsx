import React, { useState, useEffect } from 'react';
import SideNavbar from './SideNavbar';
import Navbar from './Navbar';
import codingLogo from '../icons/coding-logo.png';
import '../styles/styles.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="header">
        <h3>
          <img src={codingLogo} alt="logo" />
          Portfolio.
        </h3>
        {isMobile ? <SideNavbar /> : <Navbar />}
      </div>
    </>
  );
};

export default Header;
