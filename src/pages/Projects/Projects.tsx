import React from 'react';
import ProjectCard from '../../components/Card/Card';
import data from './data';
import * as styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.cards}>
        {data.map((project: any) => {
          return (
            <ProjectCard
              img={project.img}
              header={project.header}
              text={project.text}
              github={project.githubLink}
              netlify={project.netlifyLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
