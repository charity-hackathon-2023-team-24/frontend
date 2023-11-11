import React from 'react';
import { useSelector } from 'react-redux';

import styles from './GamePage.module.css';
import Board from '../../ui/main/Board/Board';
import Fears from '../../ui/main/Fears/Fears';
import Scores from '../../ui/main/Scores/Scores';

const GamePage = () => {
  const { gameOver } = useSelector((state) => state.game);
  return (
    <main className={styles.container}>
      {!gameOver ? (
        <div className={styles.gameContent}>
          <Fears />
          <Board />
          <Scores />
        </div>
      ) : (
        <div className={styles.gameOverContent}>GAMEOVER</div>
      )}
    </main>
  );
};

export default GamePage;
