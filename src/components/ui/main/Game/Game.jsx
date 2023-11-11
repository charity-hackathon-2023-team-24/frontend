import React, { useEffect, useState } from 'react';

import styles from './Game.module.css';
import { fearIcons } from '../../../../helpers/fearIcons.js';
import cloud from '../../../../assets/cloud.svg';

const TIMEOUT = 1000;

const Game = () => {
  const [next, setNext] = useState(0);
  const [clicked, setClicked] = useState(false);

  const currentIcon = fearIcons.find((el, index) => index === next);

  useEffect(() => {
    const interval =
      next <= 8 &&
      setTimeout(() => {
        setNext(next + 1);
      }, TIMEOUT);

    return () => {
      clearInterval(interval);
    };
  }, [next]);

  return (
    <div className={styles.game}>
      {next && (
        <div>
          {/* <img className={styles.cloud} src={cloud} alt='cloud'></img> */}
          <img
            onClick={() => setClicked(true)}
            className={styles.icon}
            src={currentIcon.src}
            alt='fear'
          />
        </div>
      )}
    </div>
  );
};

export default Game;
