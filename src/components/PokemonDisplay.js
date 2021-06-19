import { useState } from 'react';

import SearchBar from './SearchBar';
import Types from './Types';
import PokemonList from './PokemonList';

const PokemonDisplay = props => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  const searchHandler = input => {
    setSearch(input);
  };

  const typeHandler = selected => {
    setType(selected);
  };

  return (
    <div>
      <Types onSelect={typeHandler} />
      <SearchBar onSearch={searchHandler} />
      <PokemonList search={search} pokemon={props.pokemon} type={type} />
    </div>
  );
};

export default PokemonDisplay;
