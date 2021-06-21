import Button from '../UI/Button';
import TypeIcon from './TypeIcon';

import TYPES from '../../assets/index';

import './TypeButton.css';

const TypeButton = props => {
  const clickHandler = () => {
    if (props.onClick) {
      props.onClick(props.name);
    }
  };

  const findImage = TYPES.find(t => t.name === props.name).img;

  return (
    <Button
      style={props.style}
      onClick={clickHandler}
      className={`type-button ${props.selected ? 'selected' : ''}`}
    >
      <TypeIcon image={findImage} type={props.name} />
    </Button>
  );
};

export default TypeButton;
