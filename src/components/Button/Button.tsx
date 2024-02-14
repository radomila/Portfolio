import React from 'react';
import * as styles from './Button.module.css';

type ButtonProps = {
  buttonType: 'primary' | 'secondary';
  text: string;
  targetSectionName?: string;
  onClick?: () => void;
};

const Button = (button: ButtonProps) => {
  const buttonClassName =
    button.buttonType === 'primary' ? styles.primary : styles.secondary;
  return (
    <button className={buttonClassName} onClick={button.onClick}>
      {button.text}
    </button>
  );
};

export default Button;
