import { useSelector } from 'react-redux';

import PokemonModal from './PokemonModal';

const SelectedPokemon = () => {
  const selected = useSelector(state => state.selected);

  const formatOutput = () => {
    if (selected.name.length > 0) {
      return <h2>Seleted: {selected.name}</h2>;
    }
  };

  return (
    <div>
      <PokemonModal />
      {/* {formatOutput()} */}
    </div>
  );
};

export default SelectedPokemon;
