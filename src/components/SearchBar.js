import { useState } from 'react';

const SearchBar = props => {
  const [search, setSearch] = useState('');

  const onChangeHandler = event => {
    setSearch(event.target.value);
    props.onSearch(event.target.value);
  };

  return (
    <form>
      <input value={search} onChange={onChangeHandler} />
    </form>
  );
};

export default SearchBar;
