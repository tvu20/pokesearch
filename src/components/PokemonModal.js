import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from './UI/Modal';

import { selectedActions } from '../store/selected';

const PokemonModal = () => {
  const dispatch = useDispatch();

  const showModal = useSelector(state => state.selected.show);
  const info = useSelector(state => state.selected);

  const closeModalHandler = () => {
    dispatch(selectedActions.toggle());
  };

  const modalContent = () => {
    return (
      <React.Fragment>
        <h2>{info.name}</h2>
        {/* <p>{info.height}</p> */}
      </React.Fragment>
    );
  };

  return (
    <div>
      {showModal && <Modal onClose={closeModalHandler}>{modalContent()}</Modal>}
    </div>
  );
};

export default PokemonModal;
