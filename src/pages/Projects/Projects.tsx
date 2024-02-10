import React from 'react';
import ProjectCard from '../../components/Card/Card';
import data from './data';
import * as styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projects}>
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
