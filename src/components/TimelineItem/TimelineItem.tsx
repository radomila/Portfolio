import React from 'react';
import { Semester } from '../../types/types';
import * as styles from './TimelineItem.module.css';

interface TimelineItemProps {
  semester: Semester;
}

const TimelineItem = ({ semester }: TimelineItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <p>{semester.year}</p>
        <div>
          <p className={styles.title}>{semester.title}</p>
          <p>{semester.subjects.join(', ')}</p>
        </div>
        <div>
          <p className={styles.title}>{semester.titleExperience}</p>
          <p>{semester.experience}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
