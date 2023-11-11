import React from 'react';

import styles from './Scores.module.css';

const Scores = () => {
  return (
    <div className={styles.scores}>
      <div>
        <p>Время:</p>
      </div>
      <div>
        <p>Очки:</p>
      </div>
    </div>
  );
};

export default Scores;
