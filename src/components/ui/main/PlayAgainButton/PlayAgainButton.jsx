import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './PlayAgainButton.module.css';
import { actions as gameActions } from '../../../../store/slices/gameSlice';

const PlayAgainButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(gameActions.setGameOver(false));
  };

  return (
    <button onClick={handleClick} className={styles.playBtn}>
      Играть снова
    </button>
  );
};

export default PlayAgainButton;
