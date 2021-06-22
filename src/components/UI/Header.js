import pokelogo from '../../assets/pokelogo.png';

import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={pokelogo} alt='PokeSearch logo' />
    </div>
  );
};

export default Header;
