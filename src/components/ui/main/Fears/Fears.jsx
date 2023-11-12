import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Fears.module.css';

const Fears = () => {
  const { fears } = useSelector((state) => state.game);
  return (
    <div>
      <ul className={styles.fearsList}>
        {fears.map((el) => (
          <li key={el.id}>
            <img src={el.src} alt={el.alt} />
            <p className={el.selected ? styles.selected : null}>{el.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fears;
