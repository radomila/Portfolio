import React from 'react';
import ProjectCard from './ProjectCard';
import forester from '../images/forester.png';
import forkify from '../images/forkify.png';
import bankist from '../images/bankist.png';
import mapty from '../images/mapty.png';
import flightAdvisor from '../images/flight-advisor.png';
import '../styles/styles.css';

const Projects = () => {
  const projects = {
    project1: {
      text: 'Forester component is implemented in the SolidJS library as a part of my bachelor thesis, which is focused on performance comparison in the terms of optimization. Forester is based on a tree structure and its purpose is to create, update or delete nodes. It contains two possible previews, language switcher and some other features.',
      githubLink: 'https://github.com/radomila/SolidJS---Forester',
      netlifyLink: '',
    },

    project2: {
      text: 'Forkify app is a simple recipe app implemented in Javascript as a part of the course. Its purpose is searching recipes among with other details. It is based on the MVC architecture and objected-oriented programming. ',
      githubLink: 'https://github.com/radomila/forkify-course',
      netlifyLink: 'https://forkify-radomila.netlify.app/',
    },

    project3: {
      text: 'Bankist is another app created as a part of a JavaScript course. You can take a look and see some advanced work with the DOM.',
      githubLink: '',
      netlifyLink: '',
    },

    project4: {
      text: 'Flight Advisor is a React app using MaterialUI. It will be done and fully functional among with the registration very soon. Stay tuned!',
      githubLink: 'https://github.com/radomila/Flight-Advisor',
      netlifyLink: '',
    },

    project5: {
      text: 'Mapty is an app for tracking your workouts. Mapty is using Leaflet library.',
      githubLink: '',
      netlifyLink: '',
    },
  };
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-cards">
        <ProjectCard
          img={forester}
          header="Forester"
          text={projects.project1.text}
          github={projects.project1.githubLink}
          netlify={projects.project1.netlifyLink}
        />
        <ProjectCard
          img={forkify}
          header="Forkify"
          text={projects.project2.text}
          github={projects.project2.githubLink}
          netlify={projects.project2.netlifyLink}
        />
        <ProjectCard
          img={bankist}
          header="Bankist"
          text={projects.project3.text}
          github={projects.project3.githubLink}
          netlify={projects.project3.netlifyLink}
        />
        <ProjectCard
          img={mapty}
          header="Mapty"
          text={projects.project5.text}
          github={projects.project5.githubLink}
          netlify={projects.project5.netlifyLink}
        />
        <ProjectCard
          img={flightAdvisor}
          header="Flight Advisor"
          text={projects.project4.text}
          github={projects.project4.githubLink}
          netlify={projects.project4.netlifyLink}
        />
      </div>
    </div>
  );
};

export default Projects;
