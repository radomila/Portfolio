import React from 'react';
import github from '../../icons/github.svg';
import netlify from '../../icons/netlify.png';
import * as styles from './Card.module.css';

type ProjectCardProps = {
  img?: string;
  header: string;
  text: string;
  github: string;
  netlify: string;
};

const ProjectCard = (card: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.picture}>
        <img src={card.img} alt="Project picture" />
      </div>

      <div className={styles.info}>
        <h2>{card.header}</h2>
        <p>{card.text}</p>
      </div>

      <div className={styles.icons}>
        <a href={card.github} rel="noreferrer">
          <img src={github} alt="Github link" />
        </a>
        <a href={card.netlify} rel="noreferrer">
          <img src={netlify} alt="Netlify link" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
