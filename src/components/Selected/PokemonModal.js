import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../UI/Modal';
import TypeButton from '../Types/TypeButton';
import ChartBar from '../UI/ChartBar';

import { selectedActions } from '../../store/selected';

import './PokemonModal.css';

const PokemonModal = () => {
  const dispatch = useDispatch();

  const showModal = useSelector(state => state.selected.show);
  const info = useSelector(state => state.selected);

  const closeModalHandler = () => {
    dispatch(selectedActions.toggle());
  };

  const capitalize = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const renderTypes = () => {
    return info.types.map(type => {
      return (
        <TypeButton
          key={type}
          name={type}
          style={{ marginLeft: '0px', paddingLeft: '0px', marginRight: '15px' }}
        />
      );
    });
  };

  const renderStats = () => {
    return info.stats.map(stat => {
      return (
        <ChartBar
          key={stat.name}
          value={stat.base_stat}
          label={stat.name}
          className='pokemon-modal__stat'
        />
      );
    });
  };

  const modalContent = () => {
    return (
      <section className='pokemon-modal'>
        <div className='pokemon-modal__img'>
          <img
            src={info.sprites['official-artwork'].front_default}
            alt='sprite'
          />
        </div>
        <div className='pokemon-modal__content'>
          <h2 className='pokemon-modal__title'>{capitalize(info.name)}</h2>
          <div className='pokemon-modal__wh'>
            <p>
              <b>Weight:</b> {info.weight / 10} kg
            </p>
            <p>
              <b>Height:</b> {info.height / 10} m
            </p>
          </div>

          <div className='pokemon-modal__statblock'>{renderStats()}</div>
          <div className='pokemon-modal__types'>{renderTypes()}</div>
        </div>
      </section>
    );
  };

  return (
    <React.Fragment>
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <h2 className='pokemon-modal__title-mobile'>
            {capitalize(info.name)}
          </h2>
          {modalContent()}
          <div className='pokemon-modal__bottom'>
            <button
              className='pokemon-modal__close'
              onClick={closeModalHandler}
            >
              Return
            </button>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default PokemonModal;
