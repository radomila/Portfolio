import React from 'react';
import '../styles/styles.css';

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
    button.buttonType === 'primary' ? 'button-primary' : 'button-secondary';
  return (
    <button onClick={handleScroll} className={buttonClassName}>
      {button.text}
    </button>
  );
};

export default Button;
