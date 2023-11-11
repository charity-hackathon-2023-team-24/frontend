import React from 'react';

import styles from './Modal.module.css';

const Modal = () => {
  const hideModal = () => {
    document.body.classList.remove('modal-open');
  };

  return (
    <dialog className={styles.modal}>
      <h2 className={styles.modalHeader}>Правила игры</h2>
      <p>
        Жизнь в детском доме для ребенка - большая травма. Даже если там хорошие условия, ребенок
        чувствует себя оставленным и брошенным взрослыми, самыми близкими людьми
      </p>
    </dialog>
  );
};

export default Modal;
