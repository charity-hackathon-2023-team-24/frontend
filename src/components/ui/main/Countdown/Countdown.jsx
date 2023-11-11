import React, { useEffect, useState } from 'react';

import styles from './Countdown.module.css';

const Countdown = ({ setGame }) => {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 1) {
        setTimer(timer - 1);
      }
      if (timer === 1) {
        clearInterval(interval);
        setGame(true);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className={styles.countdown}>
      {timer === 1 ? <p>Вперед!</p> : <p>Готов?</p>}
      <p className={styles.timer}>{timer}</p>
    </div>
  );
};

export default Countdown;
