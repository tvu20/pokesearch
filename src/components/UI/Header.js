import pokelogo from '../../assets/pokelogo.png';

import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={pokelogo} />
    </div>
  );
};

export default Header;
