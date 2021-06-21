import TypeIcon from './TypeIcon';

import TYPES from '../../assets/index';

import './TypeButton.css';

const TypeBadge = props => {
  const findImage = TYPES.find(t => t.name === props.name).img;

  return (
    <div className='type-button badge'>
      <TypeIcon
        image={findImage}
        type={props.name}
        height={props.height}
        width={props.width}
      />
    </div>
  );
};

export default TypeBadge;
