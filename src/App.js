import './App.css';

import { useState, useEffect, useCallback } from 'react';

import Header from './components/UI/Header';
import LoadingSpinner from './components/UI/LoadingSpinner';
import PokemonModal from './components/Selected/PokemonModal';
import PokemonDisplay from './components/PokemonDisplay';
import Footer from './components/UI/Footer';

const NUM_FETCHED = 151;

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch handler
  const fetchPokemon = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${NUM_FETCHED}`
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      let pokemonList = [];

      for (let i = 0; i < data.results.length; i++) {
        const curr = data.results[i];
        let responseSingle = await fetch(curr.url);
        let poke = await responseSingle.json();

        pokemonList.push({
          id: poke.id,
          name: poke.name,
          height: poke.height,
          weight: poke.weight,
          types: retrieveTypes(poke),
          stats: cleanUpStats(poke.stats),
          sprites: poke.sprites.other,
        });
      }

      setPokemonData(pokemonList);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // fetches data upon app rendering
  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  // cleaning up types format
  const retrieveTypes = poke => {
    const pokeTypes = poke.types;
    let typesList = [];

    for (let i = 0; i < pokeTypes.length; i++) {
      typesList.push(pokeTypes[i].type.name);
    }

    return typesList;
  };

  // cleaning up stats format
  const cleanUpStats = pokeStats => {
    let stats = [];
    for (let i = 0; i < 6; i++) {
      stats.push({
        name: pokeStats[i].stat.name,
        base_stat: pokeStats[i].base_stat,
      });
    }
    return stats;
  };

  return (
    <div className='App'>
      {loading && <LoadingSpinner />}
      <PokemonModal />
      {!loading && (
        <div className='fade-in'>
          <Header />
          <PokemonDisplay className='fade-late' pokemon={pokemonData} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
