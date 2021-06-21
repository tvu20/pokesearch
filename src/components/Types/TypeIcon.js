import './TypeButton.css';

import { useState } from 'react';

const TypeIcon = props => {
  const [hover, setHover] = useState(false);

  const hoverHandler = () => {
    setHover(true);
  };

  const leaveHandler = () => {
    setHover(false);
  };

  return (
    <img
      className='type-button__img'
      src={props.image[0]}
      //   src={hover ? props.image[0] : props.image[1]}
      onMouseEnter={hoverHandler}
      onMouseLeave={leaveHandler}
      alt={props.type}
    ></img>
  );
};

export default TypeIcon;
