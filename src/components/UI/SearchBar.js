import { useState } from 'react';

import './SearchBar.css';

const SearchBar = props => {
  const [search, setSearch] = useState('');

  const onChangeHandler = event => {
    setSearch(event.target.value);
    props.onSearch(event.target.value);
  };

  return (
    <form>
      <input className='search-bar' value={search} onChange={onChangeHandler} />
    </form>
  );
};

export default SearchBar;
