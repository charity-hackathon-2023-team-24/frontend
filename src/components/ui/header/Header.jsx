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
    dispatch(gameActions.removeSelect());
  };

  return (
    <header className={gameOver ? styles.headerOver : styles.header}>
      {gameStarted ? (
        <>
          <ul className={styles.gameHeader}>
            <li onClick={handleRulesClick} className={styles.gameHeaderLink}>
              Как играть?
            </li>
            <li onClick={handleTitleClick} href={routes.rootPage}>
              <h1 className={styles.headerTitle}>Shoot your scares</h1>
            </li>
            <li onClick={handlePlayButtonClick} className={styles.gameHeaderLink}>
              Начать заново
            </li>
          </ul>
          {modal && <Modal />}
        </>
      ) : (
        <a onClick={handleTitleClick} href={routes.rootPage}>
          <h1 className={styles.headerTitle}>Shoot your scares</h1>
        </a>
      )}
    </header>
  );
};

export default Header;
