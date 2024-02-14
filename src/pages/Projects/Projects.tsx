import React from 'react';
import ProjectCard from '../../components/Card/Card';
import data from './data';
import * as styles from './Projects.module.css';

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement> | null;
}

const Projects = ({ projectsRef }: ProjectsProps) => {
  return (
    <section className={styles.projects} ref={projectsRef}>
      <h1>Projects</h1>
      <div className={styles.cards}>
        {data.map(({ img, header, text, githubLink, netlifyLink }) => {
          return (
            <ProjectCard
              img={img}
              header={header}
              text={text}
              github={githubLink}
              netlify={netlifyLink}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
