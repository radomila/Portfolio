import { ReferenceProps } from '../types/types';

export const handleScroll = ({ sectionRef }: ReferenceProps) => {
  sectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
};
