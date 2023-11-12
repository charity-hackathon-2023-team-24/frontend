import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './StartButton.module.css';
import routes from '../../../../routes';
import { actions as gameActions } from '../../../../store/slices/gameSlice';

const StartButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(routes.gamePage);
    dispatch(gameActions.setStartGame(true));
  };

  return (
    <button onClick={handleClick} className={styles.startBtn}>
      Начать игру
    </button>
  );
};

export default StartButton;
