import * as React from 'react';
import Header from '../components/Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import '../styles/global.module.css';
import type { HeadFC } from 'gatsby';

const MainPage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
    </>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
