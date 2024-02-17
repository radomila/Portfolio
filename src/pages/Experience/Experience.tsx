import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import Title from '../../components/Title';
import * as styles from './Experience.module.css';

const Experience = () => {
  return (
    <section className={styles.experience}>
      <Title titleType="primary" text="Experience" />
      <Timeline />
    </section>
  );
};

export default Experience;
