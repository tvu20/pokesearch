import { useSelector } from 'react-redux';

const SelectedPokemon = () => {
  const selected = useSelector(state => state.selected);

  const formatOutput = () => {
    if (selected.name.length > 0) {
      return <h2>Seleted: {selected.name}</h2>;
    }
  };

  return <div>{formatOutput()}</div>;
};

export default SelectedPokemon;
