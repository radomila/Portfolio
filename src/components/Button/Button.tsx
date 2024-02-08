import React from 'react';
import * as styles from './Button.module.css';

type ButtonProps = {
  buttonType: 'primary' | 'secondary';
  text: string;
  targetSectionName?: string;
};

const Button = (button: ButtonProps) => {
  const handleScroll = () => {
    const targetSection = document.querySelector(
      `.${button.targetSectionName}`
    );
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  const buttonClassName =
    button.buttonType === 'primary' ? styles.primary : styles.secondary;
  return (
    <button onClick={handleScroll} className={buttonClassName}>
      {button.text}
    </button>
  );
};

export default Button;
