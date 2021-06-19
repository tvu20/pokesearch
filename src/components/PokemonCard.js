import { useDispatch } from 'react-redux';

import { selectedActions } from '../store/selected';

const PokemonCard = props => {
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
    // console.log('card clicked!');
  };

  return (
    <div onClick={onClickHandler} style={{ backgroundColor: 'gray' }}>
      <h2>{info.name}</h2>
      <p>Height: {info.height}</p>
      <p>Width: {info.weight}</p>
      <p>Types: {types()}</p>
    </div>
  );
};

export default PokemonCard;
