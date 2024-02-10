import React from 'react';
import styles from './Title.module.css';

type TitleProps = {
  titleType?: 'primary' | 'secondary';
  text: string;
};

const Title = (title: TitleProps) => {
  let titleClassName;
  switch (title.titleType) {
    case 'primary':
      titleClassName = styles.primary;
      break;
    case 'secondary':
      titleClassName = styles.secondary;
      break;
    default:
      titleClassName = styles.primary;
  }
  return <h2 className={titleClassName}>{title.text}</h2>;
};

export default Title;
