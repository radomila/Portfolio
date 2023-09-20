import React from 'react';
import ProjectCard from './ProjectCard';
import forester from '../images/forester.png';
import forkify from '../images/forkify.png';
import bankist from '../images/bankist.png';
import mapty from '../images/mapty.png';
import flightAdvisor from '../images/flight-advisor.png';
import '../styles/styles.css';

const Projects = () => {
  const projects = [
    {
      img: forester,
      header: 'Forester',
      text: 'Forester component is implemented in the SolidJS library as a part of my bachelor thesis, which is focused on performance comparison in the terms of optimization. Forester is based on a tree structure and its purpose is to create, update or delete nodes. It contains two possible previews, language switcher and some other features.',
      githubLink: 'https://github.com/radomila/SolidJS---Forester',
      netlifyLink: '',
    },

    {
      img: forkify,
      header: 'Forkify',
      text: 'Forkify app is a simple recipe app implemented in Javascript as a part of the course. Its purpose is searching recipes among with other details. It is based on the MVC architecture and objected-oriented programming. ',
      githubLink: 'https://github.com/radomila/forkify-course',
      netlifyLink: 'https://forkify-radomila.netlify.app/',
    },

    {
      img: bankist,
      header: 'Bankist',
      text: 'Bankist is another app created as a part of a JavaScript course. You can take a look and see some advanced work with the DOM.',
      githubLink: '',
      netlifyLink: '',
    },

    {
      img: flightAdvisor,
      header: 'Flight Advisor',
      text: 'Flight Advisor is a React app using MaterialUI. It will be done and fully functional among with the registration very soon. Stay tuned!',
      githubLink: 'https://github.com/radomila/Flight-Advisor',
      netlifyLink: '',
    },

    {
      img: mapty,
      header: 'Mapty',
      text: 'Mapty is an app created as a part of a JavaScript course - it is a good option for tracking your workouts. It also uses the Leaflet library',
      githubLink: '',
      netlifyLink: '',
    },
  ];
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-cards">
        {projects.map((project: any) => {
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
