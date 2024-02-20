import React from 'react';
import { data } from './data';
import { useThemeToggleContext } from '../Context/ThemeContext';
import TimelineItem from '../TimelineItem/TimelineItem';
import * as styles from './Timeline.module.css';

const Position = () => {
  const { theme } = useThemeToggleContext();
  const dark = theme === 'dark';

  return (
    <div className={`${styles.container} ${dark ? '' : styles.light}`}>
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
