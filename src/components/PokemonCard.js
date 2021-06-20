import React from 'react';

import { useDispatch } from 'react-redux';

import { selectedActions } from '../store/selected';

const PokemonCard = React.forwardRef((props, ref) => {
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
    // console.log(info);
    // dispatch(selectedActions.change('hi'));
    dispatch(selectedActions.change(info));
    dispatch(selectedActions.toggle());
    // console.log('card clicked!');
  };

  const imageUrl = info.sprites.dream_world.front_default;

  return (
    <div ref={ref} onClick={onClickHandler} style={{ backgroundColor: 'gray' }}>
      <h2>{info.name}</h2>
      <p>Height: {info.height}</p>
      <p>Width: {info.weight}</p>
      <p>Types: {types()}</p>
      <img src={imageUrl} height='100px' alt='sprite' />
    </div>
  );
});

export default PokemonCard;
