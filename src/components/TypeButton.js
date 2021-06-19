import Button from './UI/Button';

const TypeButton = props => {
  const clickHandler = () => {
    props.onClick(props.name);
  };

  return (
    <Button onClick={clickHandler}>
      {props.name === '' ? 'None' : props.name}
    </Button>
  );
};

export default TypeButton;
