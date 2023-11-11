import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Game.module.css';
import { fearIcons } from '../../../../helpers/fearIcons.js';
import { actions as gameActions } from '../../../../store/slices/gameSlice';
import cloud from '../../../../assets/cloud.svg';

const TIMEOUT = 1000;

const Game = () => {
  const [next, setNext] = useState(0);
  console.log('next', next);
  const [clicked, setClicked] = useState(false);
  const [score, setScore] = useState(0);
  const dispatch = useDispatch();

  const currentIcon = fearIcons.find((el, index) => index === next);

  const handleClick = () => {
    dispatch(gameActions.increment());
  };

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
            onClick={() => setClicked(currentIcon.icon)}
            className={`${styles.icon} ${styles.iconMoving}`}
            src={currentIcon.src}
            alt={currentIcon.name}
          />
        </div>
      )}
    </div>
  );
};

export default Game;
