import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Button from './Button';
import ContactForm from './ContactForm';
import SocialMediaBar from './SocialMediaBar';
import '../styles/styles.css';

const Intro = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="introduction">
      <div className="introduction-text">
        <p className="introduction-brief">Radomila Hejhalová</p>
        <p className="introduction-paragraph">
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
        <div className="introduction-buttons">
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
      <div className="introduction-social-media">
        <SocialMediaBar />
      </div>
    </div>
  );
};

export default Intro;
