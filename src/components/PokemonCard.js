import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TypeIcon from './Types/TypeIcon';

import TYPES from '../assets';

import { selectedActions } from '../store/selected';

import './PokemonCard.css';

const PokemonCard = React.forwardRef((props, ref) => {
  const [bump, setBump] = useState(false);

  const dispatch = useDispatch();

  const { info } = props;

  const capitalize = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const renderTypes = () => {
    return info.types.map(type => {
      const findImage = TYPES.find(t => t.name === type).img;
      return (
        <TypeIcon
          image={findImage}
          type={type}
          height='30px'
          width='30px'
          className='pokemon-card__badge'
        />
      );
    });
  };

  const onClickHandler = () => {
    dispatch(selectedActions.change(info));
    dispatch(selectedActions.toggle());
  };

  const imageUrl = info.sprites['official-artwork'].front_default;

  const bumpHandler = () => {
    console.log('bump');
    setBump(true);

    setTimeout(() => {
      setBump(false);
    }, 300);
  };

  return (
    <div
      className={`pokemon-card ${bump ? 'bump' : ''}`}
      ref={ref}
      onClick={onClickHandler}
      onMouseEnter={bumpHandler}
    >
      <h2>{capitalize(info.name)}</h2>
      <p>#{info.id}</p>
      <img src={imageUrl} height='150px' alt='sprite' />
      <div className='pokemon-card__badges'>{renderTypes()}</div>
      {/* <p>Types: {types()}</p> */}
    </div>
  );
});

export default PokemonCard;
