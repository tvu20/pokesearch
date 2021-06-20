import TypeButton from './TypeButton';
import Button from './UI/Button';

import TYPES from '../assets/index';

import './TypeButton.css';

const Types = props => {
  const onClickHandler = type => {
    if (!type.length) {
      props.onSelect('');
    }
    props.onSelect(type);
  };

  const typeButtons = () => {
    return TYPES.map(type => {
      return (
        <TypeButton
          key={type.name}
          onClick={onClickHandler}
          name={type.name}
          image={type.img}
        />
      );
    });
  };

  return (
    <div className='type-container'>
      <Button className='type-button' onClick={onClickHandler}>
        No filter
      </Button>
      {typeButtons()}
    </div>
  );
};

export default Types;
