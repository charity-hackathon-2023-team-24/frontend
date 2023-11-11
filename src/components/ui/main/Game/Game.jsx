import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Game.module.css';
import { fearIcons } from '../../../../helpers/fearIcons.js';
import { actions as gameActions } from '../../../../store/slices/gameSlice';

const TIMEOUT = 1000;

const Game = () => {
  const [next, setNext] = useState(0);
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
    <>
      {next && (
        <img
          onClick={handleClick}
          className={`${styles.icon} ${styles.iconMoving}`}
          src={currentIcon.src}
          alt={currentIcon.name}
        />
      )}
    </>
  );
};

export default Game;
