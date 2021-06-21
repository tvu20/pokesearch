import React from 'react';

import TypeButton from './TypeButton';
import Button from '../UI/Button';

import { useState } from 'react';

import TYPES from '../../assets/index';

import './TypeButton.css';

const Types = props => {
  const [typeSelected, setTypeSelected] = useState('');

  const onClickHandler = type => {
    if (!type.length) {
      props.onSelect('');
      setTypeSelected('');
    }
    props.onSelect(type);
    setTypeSelected(type);
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
      <Button className='type-button' onClick={onClickHandler}>
        No filter
      </Button>
      <div className='type-container'>{typeButtons()}</div>
    </React.Fragment>
  );
};

export default Types;
