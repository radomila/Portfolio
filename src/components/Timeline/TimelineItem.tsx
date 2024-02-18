import React from 'react';
import * as styles from './Timeline.module.css';

interface Semester {
  year: string;
  title: string;
  subjects: string[];
  titleExperience: string;
  experience: string;
}
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
