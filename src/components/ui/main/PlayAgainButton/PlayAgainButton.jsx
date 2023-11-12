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
    dispatch(gameActions.setStartGame(true));
    dispatch(gameActions.setGameOver(false));
  };

  return (
    <button onClick={handleClick} className={styles.playBtn}>
      Играть снова
    </button>
  );
};

export default PlayAgainButton;
