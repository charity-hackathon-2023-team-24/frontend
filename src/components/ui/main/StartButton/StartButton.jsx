import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './StartButton.module.css';
import routes from '../../../../routes';

const StartButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.gamePage);
  };

  return (
    <button onClick={handleClick} className={styles.startBtn}>
      Начать игру
    </button>
  );
};

export default StartButton;
