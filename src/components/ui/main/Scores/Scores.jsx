import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Scores.module.css';
import { actions as gameActions } from '../../../../store/slices/gameSlice';

const TIMEOUT = 1000;

const Scores = () => {
  const resultClicks = useSelector((state) => state.game.clicks);
  const [seconds, setSeconts] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const tick = (num) => setSeconts(seconds + num);

    const interval = setInterval(() => tick(1), TIMEOUT);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  useEffect(() => {
    if (seconds === 60) {
      dispatch(gameActions.setGameOver(true));
    }
  }, [dispatch, seconds]);

  return (
    <div className={styles.score}>
      <div>
        <p>Время:</p>
        <p className={styles.scoreResult}>{seconds}</p>
      </div>
      <div>
        <p>Очки:</p>
        <p className={styles.scoreResult}>{resultClicks}</p>
      </div>
    </div>
  );
};

export default Scores;
