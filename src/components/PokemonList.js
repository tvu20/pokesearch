import PokemonCard from './PokemonCard';

const PokemonList = props => {
  const { search, type } = props;

  const displayPokemon = () => {
    let display = [];

    // handling type filter
    if (type !== '' && type.length > 0) {
      display = props.pokemon.filter(poke => {
        return poke.types.includes(type);
      });
    } else {
      display = props.pokemon;
    }

    // no search query
    if (search === '' || search.length === 0)
      return display.map(poke => {
        return <PokemonCard key={poke.id} info={poke} />;
      });

    // yes search query
    return display.map(poke =>
      poke.name.includes(search) ? (
        <PokemonCard key={poke.id} info={poke} />
      ) : null
    );
  };

  return (
    <div>
      <div>{displayPokemon()}</div>
    </div>
  );
};

export default PokemonList;
