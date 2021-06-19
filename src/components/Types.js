import TypeButton from './TypeButton';

const TYPES = [
  '',
  'grass',
  'poison',
  'fire',
  'flying',
  'water',
  'bug',
  'normal',
];

const Types = props => {
  const onClickHandler = type => {
    props.onSelect(type);
    // console.log(type);
    // console.log(event.target.id);
  };

  const typeButtons = () => {
    return TYPES.map(type => {
      return (
        <TypeButton key={type} onClick={onClickHandler} name={type} />
        // <Button key={type} id={type} onClick={onClickHandler}>
        //   {type}
        // </Button>
      );
    });
  };

  return <div>{typeButtons()}</div>;
};

export default Types;
