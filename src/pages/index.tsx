import React, { useRef } from 'react';
import Header from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import Navbar from '../components/Navbar/Navbar';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import { useThemeToggleContext } from '../components/Context/ThemeContext';
import { handleScroll } from '../functions/handleScroll';
import type { HeadFC } from 'gatsby';
import * as styles from '../styles/global.module.css';

const MainPage = () => {
  const { theme } = useThemeToggleContext();
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const onMenuItemClick = (type: string) => {
    if (type === 'home') {
      handleScroll({ sectionRef: homeRef });
    }

    if (type === 'projects') {
      handleScroll({ sectionRef: projectsRef });
    }

    if (type === 'experience') {
      handleScroll({ sectionRef: experienceRef });
    }
  };

  return (
    <div className={theme === 'dark' ? styles.dark : styles.light}>
      <Header>
        <Logo />
        <Navbar onMenuItemClick={onMenuItemClick} />
        <ThemeToggle />
      </Header>
      <Home sectionRef={homeRef} onMenuItemClick={onMenuItemClick} />
      <Projects sectionRef={projectsRef} />
      <Experience sectionRef={experienceRef} />
    </div>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
