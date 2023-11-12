import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './PlayAgainButton.module.css';
import routes from '../../../../routes';
import { actions as gameActions } from '../../../../store/slices/gameSlice';

const PlayAgainButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.gamePage);
    dispatch(gameActions.setGameOn(false));
    dispatch(gameActions.setGameOver(false));
    dispatch(gameActions.removeSelect());
  };

  return (
    <button onClick={handleClick} className={styles.playBtn}>
      Играть снова
    </button>
  );
};

export default PlayAgainButton;
