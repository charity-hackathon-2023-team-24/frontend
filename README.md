import React from 'react';

import getModal from './index';

const renderModal = (modalInfo, hideModal, page, list) => {
  if (modalInfo.type === null) {
    return null;
  }
  const Modal = getModal(page, modalInfo.type);

  return <Modal modalInfo={modalInfo} hideModal={hideModal} page={page} list={list} />;
};

export default renderModal;
