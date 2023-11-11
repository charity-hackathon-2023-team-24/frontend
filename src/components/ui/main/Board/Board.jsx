import React, { useEffect, useState } from 'react';

import styles from './Board.module.css';
import boy from '../../../../assets/boy.svg';
import Countdown from '../Countdown/Countdown';
import Game from '../Game/Game';

const TIMEOUT = 2000;

const Board = () => {
  const [countdown, setCountdown] = useState(false);
  const [game, setGame] = useState(false);

  useEffect(() => {
    const interval =
      !countdown &&
      setTimeout(() => {
        setCountdown(true);
      }, TIMEOUT);

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  return (
    <div className={styles.board}>
      {game ? <Game /> : <Countdown setGame={setGame} />}
      <img src={boy} alt='boy' />
    </div>
  );
};

export default Board;
