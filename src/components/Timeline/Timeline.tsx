import React from 'react';
import data from './data';
import TimelineItem from './TimelineItem';
import * as styles from './Timeline.module.css';

const Position = () => {
  return (
    <div className={styles.container}>
      {data.length > 0 && (
        <>
          {data.map((semester) => {
            return <TimelineItem semester={semester} />;
          })}
        </>
      )}
    </div>
  );
};

export default Position;
