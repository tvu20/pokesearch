const Button = props => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
