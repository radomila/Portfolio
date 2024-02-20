import React from 'react';
import ProjectCard from '../../components/Card/Card';
import { data } from '../../data';
import Title from '../../components/Title';
import { ReferenceProps } from '../../types/types';
import * as styles from './Projects.module.css';

const Projects = ({ sectionRef }: ReferenceProps) => {
  return (
    <section className={styles.projects} ref={sectionRef}>
      <Title titleType="primary" text="Projects" />
      <div className={styles.cards}>
        {data.map((card) => {
          return <ProjectCard card={card} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
