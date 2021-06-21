import React from 'react';

import './Modal.css';

const Backdrop = props => {
  return <div className='backdrop' onClick={props.onClose} />;
};

const ModalOverlay = props => {
  return (
    <div className='modal-container'>
      <div className='modal'>{props.children}</div>
    </div>
  );
};

const Modal = props => {
  return (
    <React.Fragment>
      <Backdrop onClose={props.onClose} />
      <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>
    </React.Fragment>
  );
};

export default Modal;
