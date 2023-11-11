import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Countdown.module.css';
import { actions as gameActions } from '../../../../store/slices/gameSlice';

const Countdown = () => {
  const [timer, setTimer] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 1) {
        setTimer(timer - 1);
      }
      if (timer === 1) {
        clearInterval(interval);
        dispatch(gameActions.setGameOn(true));
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, timer]);

  return (
    <div className={styles.countdown}>
      {timer === 1 ? <p>Вперед!</p> : <p>Готов?</p>}
      <p className={styles.timer}>{timer}</p>
    </div>
  );
};

export default Countdown;
