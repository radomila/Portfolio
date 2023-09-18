import * as React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import type { HeadFC } from 'gatsby';

const MainPage = () => {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
    </>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
