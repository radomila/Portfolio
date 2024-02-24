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
  const dark = theme === 'dark';

  const primary = `${styles.primary} ${dark ? '' : styles.active}`;
  const secondary = `${styles.secondary} ${dark ? '' : styles.active}`;

  const buttonClassName = buttonType === 'primary' ? primary : secondary;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
