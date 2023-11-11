import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Board.module.css';
import boy from '../../../../assets/boy.svg';
import Countdown from '../Countdown/Countdown';
import Game from '../Game/Game';

const TIMEOUT = 2000;

const Board = () => {
  const { gameOn } = useSelector((state) => state.game);
  const [countdown, setCountdown] = useState(false);

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
      {gameOn ? <Game /> : <Countdown />}
      <img className={styles.boardImg} src={boy} alt='boy' />
    </div>
  );
};

export default Board;
