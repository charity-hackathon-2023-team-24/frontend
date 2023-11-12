import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.css';
import routes from '../../../routes';
import { actions as gameActions } from '../../../store/slices/gameSlice';
import Modal from '../../modal/Modal';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { gameStarted, gameOver, modal } = useSelector((state) => state.game);

  const handleTitleClick = () => {
    navigate(routes.rootPage);
    dispatch(gameActions.setStartGame(false));
  };

  const handleRulesClick = () => {
    dispatch(gameActions.setModal(true));
  };

  const handlePlayButtonClick = () => {
    navigate(routes.gamePage);
    dispatch(gameActions.setGameOn(false));
  };

  return (
    <header className={gameOver ? styles.headerOver : styles.header}>
      {gameStarted ? (
        <ul className={styles.gameHeader}>
          <li onClick={handleRulesClick} className={styles.gameHeaderLink}>
            Как играть?
          </li>
          <li onClick={handleTitleClick} href={routes.rootPage}>
            <h1 className={styles.headerTitle}>Shoot Children’s scares</h1>
          </li>
          <li onClick={handlePlayButtonClick} className={styles.gameHeaderLink}>
            Начать заново
          </li>
        </ul>
      ) : (
        <a onClick={handleTitleClick} href={routes.rootPage}>
          <h1 className={styles.headerTitle}>Shoot Children’s scares</h1>
        </a>
      )}
      {modal && <Modal />}
    </header>
  );
};

export default Header;
