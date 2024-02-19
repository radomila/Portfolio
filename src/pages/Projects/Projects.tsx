import React from 'react';
import ProjectCard from '../../components/Card/Card';
import { data } from '../../data';
import Title from '../../components/Title';
import * as styles from './Projects.module.css';

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement> | null;
}

const Projects = ({ projectsRef }: ProjectsProps) => {
  return (
    <section className={styles.projects} ref={projectsRef}>
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
