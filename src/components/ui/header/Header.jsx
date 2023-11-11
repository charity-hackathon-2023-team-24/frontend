import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '../../../routes';
import styles from './Header.module.css';

const Header = () => {
  const nav = useNavigate();
  const { gameOver } = useSelector((state) => state.game);

  const handleClick = () => {
    nav(routes.rootPage);
  };

  return (
    <header className={gameOver ? styles.headerOver : styles.header}>
      <a onClick={handleClick} href={routes.rootPage}>
        <h1 className={styles.headerTitle}>Shoot Children’s scares</h1>
      </a>
    </header>
  );
};

export default Header;
