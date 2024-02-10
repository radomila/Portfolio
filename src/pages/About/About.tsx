import React from 'react';
import profile from '../../images/programmer.svg';
import * as styles from './About.module.css';

const About = () => {
  return (
    <section>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>Hello world!</h3>
          <p>
            Welcome to my corner of the web. I'm Radomila, a passionate software
            engineering student with a focus on frontend development. I thrive
            on creating user experiences and crafting interfaces for the digital
            world.
          </p>
          <p>Let's embark on this exciting journey together!</p>
          <div></div>
        </div>
        <img className={styles.picture} src={profile} alt="profile" />
      </div>
    </section>
  );
};

export default About;
