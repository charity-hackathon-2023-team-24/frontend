import React, { useEffect, useState } from 'react';

import styles from './Board.module.css';
import boy from '../../../../assets/boy.svg';
import Countdown from '../Countdown/Countdown';

const TIMEOUT = 2000;

const Board = () => {
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
      {countdown && <Countdown />}
      <img src={boy} alt='boy' />
    </div>
  );
};

export default Board;
