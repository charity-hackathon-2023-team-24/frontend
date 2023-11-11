import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Scores.module.css';
import { actions as gameActions } from '../../../../store/slices/gameSlice';

const TIMEOUT = 1000;

const Scores = () => {
  const { gameOn, clicks } = useSelector((state) => state.game);
  const [seconds, setSeconts] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const tick = (num) => setSeconts(seconds + num);
    const interval =
      gameOn &&
      setInterval(() => {
        tick(1);
        if (seconds === 60) {
          clearInterval(interval);
          dispatch(gameActions.setGameOver(true));
        }
      }, TIMEOUT);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, gameOn, seconds]);

  return (
    <div className={styles.score}>
      <div>
        <p>Время:</p>
        <p className={styles.scoreResult}>{seconds}</p>
      </div>
      <div>
        <p>Очки:</p>
        <p className={styles.scoreResult}>{clicks}</p>
      </div>
    </div>
  );
};

export default Scores;
