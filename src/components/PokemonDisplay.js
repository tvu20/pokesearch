import { useState, useCallback, useEffect } from 'react';

import SearchBar from './UI/SearchBar';
import Types from './Types/Types';
import PokemonList from './PokemonList';

const NUM_PER_PAGE = 20;
const TOTAL_FETCHED = 151;

const PokemonDisplay = props => {
  const { pokemon } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [cards, setCards] = useState([]);

  const searchHandler = input => {
    setSearch(input);
    setPage(1);
  };

  const typeHandler = selected => {
    setType(selected);
    setPage(1);
  };

  const updateCards = useCallback(() => {
    let display = [];

    // handling type filter
    if (type !== '' && type.length > 0) {
      display = pokemon.filter(poke => {
        return poke.types.includes(type);
      });
    } else {
      display = pokemon;
    }

    // handling search filter
    if (search !== '' || search.length > 0) {
      display = display.filter(poke => poke.name.includes(search));
    }

    setCards(display.slice(0, page * NUM_PER_PAGE));

    setHasMore(page * NUM_PER_PAGE < TOTAL_FETCHED);
  }, [type, search, page, pokemon]);

  useEffect(() => {
    updateCards();
  }, [pokemon, page, type, search, updateCards]);

  const updatePageNumber = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <Types onSelect={typeHandler} />
      <SearchBar onSearch={searchHandler} />
      <PokemonList
        search={search}
        pokemon={cards}
        type={type}
        hasMore={hasMore}
        page={page}
        updatePage={updatePageNumber}
      />
    </div>
  );
};

export default PokemonDisplay;
