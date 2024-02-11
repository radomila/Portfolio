import React from 'react';
import * as styles from './Button.module.css';

type ButtonProps = {
  buttonType: 'primary' | 'secondary';
  text: string;
  targetSectionName?: string;
};

const Button = ({ buttonType, text, targetSectionName }: ButtonProps) => {
  // TODO: refactor this using useRef
  const handleScroll = () => {
    const targetSection = document.querySelector(`.${targetSectionName}`);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  const buttonClassName =
    buttonType === 'primary' ? styles.primary : styles.secondary;
  return (
    <button onClick={handleScroll} className={buttonClassName}>
      {text}
    </button>
  );
};

export default Button;
