import React from 'react';
import '../styles/styles.css';

type TitleProps = {
  titleType?: 'primary' | 'secondary' | 'ternary';
  text: string;
};

const Title = (title: TitleProps) => {
  let titleClassName;
  switch (title.titleType) {
    case 'primary':
      titleClassName = 'title-primary';
      break;
    case 'secondary':
      titleClassName = 'title-primary';
      break;
    default:
      titleClassName = 'title-primary';
  }
  return <h2 className={titleClassName}>{title.text}</h2>;
};

export default Title;
