import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import ContactForm from '../../components/ContactForm/ContactForm';
import { ReferenceProps } from '../../types/types';
import * as styles from './Home.module.css';

interface HomeProps extends ReferenceProps {
  onMenuItemClick: (name: string) => void;
}

const About = ({ sectionRef, onMenuItemClick }: HomeProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className={styles.introduction} ref={sectionRef}>
      <div>
        <p className={styles.name}>Hello World!👋</p>
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
            onClick={() => onMenuItemClick('projects')}
          />
          {modalIsOpen && <ContactForm handleModalOpen={handleModalOpen} />}
        </div>
      </div>
    </div>
  );
};

export default About;
