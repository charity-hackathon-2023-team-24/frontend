import React from 'react';
import { useSelector } from 'react-redux';

import styles from './HomePage.module.css';
import boy from '../../../assets/boy-2.png';
import girl from '../../../assets/girl.png';
import StartButton from '../../ui/main/StartButton/StartButton';
import Rules from '../../ui/main/Rules/Rules';
import Modal from '../../modal/Modal';

const HomePage = () => {
  const { modal } = useSelector((state) => state.game);

  return (
    <main className={styles.container}>
      {!modal ? (
        <div className={styles.homeContent}>
          <img className={styles.girlImg} src={girl} alt='girl' />
          <img className={styles.boyImg} src={boy} alt='boy' />
          <p>
            Победи свои страхи <br /> и найди новую семью!
          </p>
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
