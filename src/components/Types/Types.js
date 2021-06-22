import React from 'react';

import TypeButton from './TypeButton';

import { useState } from 'react';

import TYPES from '../../assets/index';

import './TypeButton.css';

const Types = props => {
  const [typeSelected, setTypeSelected] = useState('');

  const onClickHandler = type => {
    if (type === typeSelected) {
      props.onSelect('');
      setTypeSelected('');
    } else {
      props.onSelect(type);
      setTypeSelected(type);
    }
  };

  const typeButtons = () => {
    return TYPES.map(type => {
      return (
        <TypeButton
          key={type.name}
          onClick={onClickHandler}
          name={type.name}
          image={type.img}
          selected={typeSelected === type.name}
        />
      );
    });
  };

  return (
    <React.Fragment>
      <div className='type-container'>{typeButtons()}</div>
    </React.Fragment>
  );
};

export default Types;
