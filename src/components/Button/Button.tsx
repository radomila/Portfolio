import React from 'react';
import * as styles from './Button.module.css';

type ButtonProps = {
  buttonType: 'primary' | 'secondary';
  text: string;
  onClick?: () => void;
};

const Button = ({ buttonType, text, onClick }: ButtonProps) => {
  const buttonClassName =
    buttonType === 'primary' ? styles.primary : styles.secondary;
  return (
    <button className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
