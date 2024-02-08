import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
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
        <p className={styles.name}>Radomila Hejhalová</p>
        <p className={styles.text}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'Frontend developer and Software Engineering student.'
                )
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
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
      <div className={styles.socials}>
        <SideNavbar />
      </div>
    </div>
  );
};

export default About;
