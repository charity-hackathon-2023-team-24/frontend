import React, { useState } from 'react';

import styles from './HomePage.module.css';
import StartButton from '../../ui/main/StartButton/StartButton';
import Rules from '../../ui/main/Rules/Rules';
import Modal from '../../modal/Modal';

const HomePage = () => {
  const [modal, setModal] = useState(false);

  return (
    <main className={styles.container}>
      {!modal ? (
        <div className={styles.homeContent}>
          <StartButton />
          <Rules setModal={setModal} />
        </div>
      ) : (
        <Modal setModal={setModal} />
      )}
    </main>
  );
};

export default HomePage;
