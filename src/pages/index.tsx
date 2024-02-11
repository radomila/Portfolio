import React from 'react';
import Header from '../components/Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import '../styles/global.module.css';
import type { HeadFC } from 'gatsby';

const MainPage = () => {
  return (
    <div id="light">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
