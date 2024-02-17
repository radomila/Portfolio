import React from 'react';
import * as styles from './Title.module.css';

type TitleProps = {
  titleType: 'primary' | 'secondary';
  text: string;
};

const Title = ({ titleType, text }: TitleProps) => {
  let titleClassName;
  switch (titleType) {
    case 'primary':
      titleClassName = styles.primary;
      break;
    case 'secondary':
      titleClassName = styles.secondary;
      break;
    default:
      titleClassName = styles.primary;
  }
  return <h2 className={titleClassName}>{text}</h2>;
};

export default Title;
