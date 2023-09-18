import React from 'react';
import github from '../icons/github.svg';
import netlify from '../icons/netlify.png';
import '../styles/styles.css';

type ProjectCardProps = {
  img?: any;
  header: string;
  text: string;
  github: string;
  netlify: string;
};

const ProjectCard = (card: ProjectCardProps) => {
  return (
    <div className="card">
      <div className="card-picture">
        <img src={card.img} alt="Project picture" />
      </div>

      <div className="card-info">
        <h2>{card.header}</h2>
        <p>{card.text}</p>
      </div>

      <div className="project-cards-icons">
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
