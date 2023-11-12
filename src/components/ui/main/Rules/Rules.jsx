import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './Rules.module.css';
import { actions as gameActions } from '../../../../store/slices/gameSlice';

const Rules = () => {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(gameActions.setModal(true))} className={styles.rules}>
      <p>Как играть?</p>
    </div>
  );
};

export default Rules;
