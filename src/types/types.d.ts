export interface CardProps {
  img: string;
  header: string;
  text: string;
  github?: string;
  netlify?: string;
}

export interface Semester {
  year: string;
  title: string;
  subjects: string[];
  titleExperience: string;
  experience: string;
}
