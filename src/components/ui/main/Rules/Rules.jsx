import React, { useState } from 'react';

import styles from './Rules.module.css';

const Rules = ({ setModal }) => {
  return (
    <div onClick={() => setModal(true)} className={styles.rules}>
      <p>Как играть?</p>
    </div>
  );
};

export default Rules;
