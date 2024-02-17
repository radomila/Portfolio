import React, { useRef } from 'react';
import Header from '../components/Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import { useThemeToggleContext } from '../components/Context/ThemeContext';
import type { HeadFC } from 'gatsby';
import * as styles from '../styles/global.module.css';

const MainPage = () => {
  const { theme } = useThemeToggleContext();
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div className={theme === 'dark' ? styles.dark : styles.light}>
      <Header />
      <Home projectsRef={projectsRef} />
      <Projects projectsRef={projectsRef} />
      <Experience />
    </div>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
