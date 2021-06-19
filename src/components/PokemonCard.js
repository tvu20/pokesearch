import Card from './UI/Card';

const PokemonCard = props => {
  const { info } = props;

  const types = () => {
    let types = info.types;

    let typeString = '';

    for (let i = 0; i < types.length; i++) {
      typeString = typeString + types[i] + ' ';
    }

    return typeString;
  };

  //   const onClickHandler = () => {

  //   }

  return (
    <Card>
      <h2>{info.name}</h2>
      <p>Height: {info.height}</p>
      <p>Width: {info.weight}</p>
      <p>Types: {types()}</p>
    </Card>
  );
};

export default PokemonCard;
