import React from 'react';
import githubImg from '../../icons/github.svg';
import netlifyImg from '../../icons/netlify.png';
import * as styles from './Card.module.css';

type ProjectCardProps = {
  img?: string;
  header: string;
  text: string;
  github: string;
  netlify: string;
};

const ProjectCard = ({
  img,
  header,
  text,
  github,
  netlify,
}: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.picture}>
        <img src={img} alt="Project picture" />
      </div>

      <div className={styles.info}>
        <h2>{header}</h2>
        <p>{text}</p>
      </div>

      <div className={styles.icons}>
        <a href={github} rel="noreferrer">
          <img src={githubImg} alt="Github link" />
        </a>
        <a href={netlify} rel="noreferrer">
          <img src={netlifyImg} alt="Netlify link" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
