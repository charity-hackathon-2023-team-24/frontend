import React from 'react';
import { useNavigate } from 'react-router-dom';

import routes from '../../../routes';
import styles from './Header.module.css';

const Header = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav(routes.rootPage);
  };

  return (
    <header className={styles.header}>
      <a onClick={handleClick} href={routes.rootPage}>
        <h1 className={styles.headerTitle}>Shoot Children’s scares</h1>
      </a>
    </header>
  );
};

export default Header;
