import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { selectedActions } from '../store/selected';

import './PokemonCard.css';

const PokemonCard = React.forwardRef((props, ref) => {
  const [bump, setBump] = useState(false);

  const dispatch = useDispatch();

  const { info } = props;

  const types = () => {
    let types = info.types;

    let typeString = '';

    for (let i = 0; i < types.length; i++) {
      typeString = typeString + types[i] + ' ';
    }

    return typeString;
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
      <h2>{info.name}</h2>
      <p>#{info.id}</p>
      <p>Types: {types()}</p>
      <img src={imageUrl} height='100px' alt='sprite' />
    </div>
  );
});

export default PokemonCard;
