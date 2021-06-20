import { useRef, useCallback } from 'react';

import PokemonCard from './PokemonCard';

const PokemonList = props => {
  const { pokemon, hasMore, updatePage } = props;

  const observer = useRef();
  const lastCardRef = useCallback(
    node => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          updatePage();
          //   console.log('visible');
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMore, updatePage]
  );

  const displayPokemon = () => {
    return pokemon.map((poke, index) => {
      // last element
      if (pokemon.length === index + 1) {
        return <PokemonCard ref={lastCardRef} key={poke.id} info={poke} />;
      }

      return <PokemonCard key={poke.id} info={poke} />;
    });
  };

  return <div>{displayPokemon()}</div>;
};

export default PokemonList;
