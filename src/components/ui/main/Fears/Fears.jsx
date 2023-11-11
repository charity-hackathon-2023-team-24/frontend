import React from 'react';

import styles from './Fears.module.css';
import { fearIcons } from '../../../../helpers/fearIcons';

const Fears = () => {
  return (
    <div>
      <ul className={styles.fearsList}>
        {fearIcons.map((icon) => (
          <li key={icon.id}>
            <img src={icon.src} alt={icon.alt} />
            <p>{icon.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fears;
