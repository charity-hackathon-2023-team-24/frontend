import React from 'react';

import styles from './HomePage.module.css';
import StartButton from '../../ui/main/StartButton/StartButton';
import Rules from '../../ui/main/Rules/Rules';

const HomePage = () => {
  const dialog = document.getElementById('dialog');

  const showModal = () => {
    dialog.showModal();
  };

  return (
    <main className={styles.container}>
      <div className={styles.homeContent}>
        <StartButton />
        <Rules />
      </div>
    </main>
  );
};

export default HomePage;
