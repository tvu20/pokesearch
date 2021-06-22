import './TypeButton.css';

const TypeIcon = props => {
  return (
    <img
      className={`type-button__img ${props.className}`}
      src={props.image}
      alt={props.type}
      style={{
        height: props.height ? props.height : null,
        width: props.width ? props.width : null,
      }}
    ></img>
  );
};

export default TypeIcon;
