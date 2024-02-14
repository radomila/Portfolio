import React from 'react';
import { useThemeToggleContext } from '../Context/ThemeContext';
import * as styles from './Button.module.css';

type ButtonProps = {
  buttonType: 'primary' | 'secondary';
  text: string;
  onClick?: () => void;
};

const Button = ({ buttonType, text, onClick }: ButtonProps) => {
  const { theme } = useThemeToggleContext();

  const buttonClassName =
    buttonType === 'primary' ? styles.primary : styles.secondary;

  const buttonTheme = theme === 'dark' ? styles.active : '';

  return (
    <button className={`${buttonClassName} ${buttonTheme}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
