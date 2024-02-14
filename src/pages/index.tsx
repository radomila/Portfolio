import React, { useRef } from 'react';
import Header from '../components/Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import * as styles from '../styles/global.module.css';
import type { HeadFC } from 'gatsby';
import { useThemeToggleContext } from '../components/Context/ThemeContext';

const MainPage = () => {
  const { theme } = useThemeToggleContext();

  const myRef = useRef<HTMLDivElement>(null);
  return (
    <div className={theme === 'dark' ? styles.dark : styles.light}>
      <Header />
      <Home myRef={myRef} />
      <About />
      <Projects myRef={myRef} />
    </div>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
