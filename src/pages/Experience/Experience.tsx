import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import Title from '../../components/Title';
import { ReferenceProps } from '../../types/types';
import * as styles from './Experience.module.css';

const Experience = ({ sectionRef }: ReferenceProps) => {
  return (
    <section className={styles.experience} ref={sectionRef}>
      <Title titleType="primary" text="Experience" />
      <Timeline />
    </section>
  );
};

export default Experience;
