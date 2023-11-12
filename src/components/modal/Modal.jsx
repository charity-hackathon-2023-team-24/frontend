import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './Modal.module.css';
import closeButton from '../../assets/ep_close-bold.svg';
import { actions as gameActions } from '../../store/slices/gameSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.modal}>
      <h2>правила игры</h2>
      <img
        onClick={() => dispatch(gameActions.setModal(false))}
        src={closeButton}
        alt='close-btn'
      />
      <ul>
        <li>
          Над головой мальчика появляются страхи. Нужно успеть кликнуть на картинку, пока она не
          исчезла сама.
        </li>
        <li>
          Если успеешь кликнуть на картинку - страх побеждён, ты получаешь 25 очков. Если не успел,
          то потом он появится снова.
        </li>
        <li>
          Игра заканчивается, когда все страхи побеждены или если ты не успеешь кликнуть на все
          картинки за 1 минуту.
        </li>
      </ul>
    </div>
  );
};

export default Modal;
