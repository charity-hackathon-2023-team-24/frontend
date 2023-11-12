import React from 'react';
import { useSelector } from 'react-redux';

import styles from './HomePage.module.css';
import StartButton from '../../ui/main/StartButton/StartButton';
import Rules from '../../ui/main/Rules/Rules';
import Modal from '../../modal/Modal';

const HomePage = () => {
  const { modal } = useSelector((state) => state.game);

  return (
    <main className={styles.container}>
      {!modal ? (
        <div className={styles.homeContent}>
          <StartButton />
          <Rules />
        </div>
      ) : (
        <Modal />
      )}
    </main>
  );
};

export default HomePage;
