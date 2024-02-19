import forkify from './images/forkify.png';
import forester from './images/forester.png';
import bankist from './images/bankist.png';
import mapty from './images/mapty.png';
import { CardProps } from './types/types';

export const data: CardProps[] = [
  {
    img: forester,
    header: 'Forester',
    text: 'Forester component is implemented in the SolidJS library as a part of my bachelor thesis, which is focused on performance comparison in the terms of optimization. Forester is based on a tree structure and its purpose is to create, update or delete nodes. It contains two possible previews, language switcher and some other features.',
    github: 'https://github.com/radomila/SolidJS---Forester',
    netlify: '',
  },

  {
    img: forkify,
    header: 'Forkify',
    text: 'Forkify app is a simple recipe app implemented in Javascript as a part of the course. Its purpose is searching recipes among with other details. It is based on the MVC architecture and objected-oriented programming.',
    github: 'https://github.com/radomila/forkify-course',
    netlify: 'https://forkify-radomila.netlify.app/',
  },

  {
    img: bankist,
    header: 'Bankist',
    text: 'Bankist is another app created as a part of a JavaScript course. You can take a look and see some advanced work with the DOM.',
    github: '',
    netlify: '',
  },

  {
    img: mapty,
    header: 'Mapty',
    text: 'Mapty is an app created as a part of a JavaScript course - it is a good option for tracking your workouts. It also uses the Leaflet library',
    github: '',
    netlify: '',
  },
];
