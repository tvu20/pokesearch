import './ChartBar.css';

// const MAX_STAT = 255;
const MAX_STAT = 150;

const ChartBar = props => {
  let barFillHeight = '0%';

  barFillHeight = Math.round((props.value / MAX_STAT) * 100) + '%';

  const calculateLabel = () => {
    if (props.label === 'hp') return 'HP';
    else if (props.label === 'attack') return 'Atk';
    else if (props.label === 'defense') return 'Def';
    else if (props.label === 'speed') return 'Spd';
    else if (props.label === 'special-attack') return 'Sp. Atk';
    else if (props.label === 'special-defense') return 'Sp. Def';
  };

  return (
    <div className='chart-bar'>
      <div className='chart-bar__label'>{calculateLabel()}</div>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ width: barFillHeight }}></div>
      </div>
    </div>
  );
};

export default ChartBar;
