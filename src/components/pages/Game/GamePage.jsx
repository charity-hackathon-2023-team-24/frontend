import React from 'react';

import styles from './GamePage.module.css';
import Board from '../../ui/main/Board/Board';
import Fears from '../../ui/main/Fears/Fears';
import Scores from '../../ui/main/Scores/Scores';

const GamePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.gameContent}>
        <Fears />
        <Board />
        <Scores />
      </div>
    </main>
  );
};

export default GamePage;
