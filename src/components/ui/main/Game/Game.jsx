import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Game.module.css';
import { actions as gameActions } from '../../../../store/slices/gameSlice';

const TIMEOUT = 1000;

const Game = () => {
  const { filtred } = useSelector((state) => state.game);
  console.log('filtred', filtred);
  const [next, setNext] = useState(0);
  const current = filtred.length > 0 && filtred.find((el, index) => index === next);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(gameActions.increment());
    dispatch(gameActions.selectFear(current.id));
    dispatch(gameActions.removeFear(current.id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (next < filtred.length - 1) {
        setNext(next + 1);
      } else {
        setNext(0);
      }
      if (filtred.length === 0) {
        clearInterval(interval);
        dispatch(gameActions.setGameOver(true));
        dispatch(gameActions.setStartGame(false));
      }
    }, TIMEOUT);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, filtred.length, next]);

  return (
    <img
      onClick={handleClick}
      className={`${styles.icon} ${styles.iconMoving}`}
      src={current.src}
      alt={current.name}
    />
  );
};

export default Game;
