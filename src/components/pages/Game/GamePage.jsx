import React from 'react';
import { useSelector } from 'react-redux';

import styles from './GamePage.module.css';
import family from '../../../assets/family.png';
import Board from '../../ui/main/Board/Board';
import Fears from '../../ui/main/Fears/Fears';
import Scores from '../../ui/main/Scores/Scores';
import PlayAgainButton from '../../ui/main/PlayAgainButton/PlayAgainButton';

const GamePage = () => {
  const { gameOver, clicks } = useSelector((state) => state.game);
  return (
    <main className={gameOver ? styles.containerOver : styles.container}>
      {!gameOver ? (
        <div className={styles.gameContent}>
          <Fears />
          <Board />
          <Scores />
        </div>
      ) : (
        <div className={styles.gameOverContent}>
          <img src={family} alt='family' />
          <div className={styles.result}>
            <p>Ты молодец !</p>
            <p>
              Твой результат <br /> {clicks} очков!
            </p>
            <PlayAgainButton />
          </div>
        </div>
      )}
    </main>
  );
};

export default GamePage;
