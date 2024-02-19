import React from 'react';
import githubImg from '../../icons/github.svg';
import netlifyImg from '../../icons/netlify.png';
import { CardProps } from '../../types/types';
import * as styles from './Card.module.css';

interface ProjectCardProps {
  card: CardProps;
}

const ProjectCard = ({ card }: ProjectCardProps) => {
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
          <img src={githubImg} alt="Github link" />
        </a>
        <a href={card.netlify} rel="noreferrer">
          <img src={netlifyImg} alt="Netlify link" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
