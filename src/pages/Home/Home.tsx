import React, { useState } from 'react';
import profile from '../../images/programmer.svg';
import Button from '../../components/Button/Button';
import ContactForm from '../../components/ContactForm/ContactForm';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import * as styles from './Home.module.css';

const About = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className={styles.introduction}>
      <div>
        <p className={styles.name}>Hello World!</p>
        <p className={styles.text}>
          Welcome to my corner of the web. I'm Radomila, a passionate software
          engineering student with a focus on frontend development. I thrive on
          creating user experiences and crafting interfaces for the digital
          world.
        </p>

        <div className={styles.buttons}>
          <div onClick={handleModalOpen}>
            <Button buttonType="primary" text="Contact" />
          </div>
          <Button
            buttonType="secondary"
            text="Projects"
            targetSectionName="projects"
          />
          {modalIsOpen && <ContactForm handleModalOpen={handleModalOpen} />}
        </div>
      </div>
      <img className={styles.picture} src={profile} alt="profile" />
    </div>
  );
};

export default About;
