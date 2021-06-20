import Button from './UI/Button';

import './TypeButton.css';

const TypeButton = props => {
  const clickHandler = () => {
    props.onClick(props.name);
  };

  return (
    <Button onClick={clickHandler} className='type-button'>
      <img src={props.image} alt='test' className='type-button__img'></img>
      {/* {props.name === '' ? 'None' : props.name} */}
    </Button>
  );
};

export default TypeButton;
