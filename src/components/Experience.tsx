import React from 'react';
import Title from './Title';
import ExperienceTimeline from './ExperienceTimeline';
import '../styles/styles.css';

const Experience = () => {
  return (
    <div className="experienceSec">
      <Title titleType="primary" text="" />
      <ExperienceTimeline />
    </div>
  );
};

export default Experience;
