import React, { useState } from 'react';
import ColourSelector from './ColourSelector';
import Selection from './Selection';

const colourConfig = [
  {
    key: 'blue',
    label: 'Blue',
    classname: 'btn-blue',
    background: 'rgb(34, 193, 195)'
  },
  {
    key: 'orange', 
    label: 'Orange',
    classname: 'btn-orange',
    background: 'rgb(221, 112, 18)'
  },
  {
    key: 'green',
    label: 'Green', 
    classname: 'btn-green',
    background: 'rgb(44, 209, 88)'
  }
];

function App() {
  const [nextBackground, setNextBackground] = useState({background: ''});

  const selectNextBackground = (nextBackground) => {
    setNextBackground(nextBackground);
  };

  return (
    <div id="master">
      <h5 className="heading">Color Picker</h5>
      
      <div className="row">
        {colourConfig.map((config, index) => (
          <ColourSelector 
            key={config.key} 
            config={config} 
            selectNextBackground={selectNextBackground} 
          />
        ))}
      </div>

      <div className="row" id="children-wrapper">
        <Selection selection={nextBackground} />
        <Selection selection={nextBackground} />
        <Selection selection={nextBackground} />
      </div>
    </div>
  );
}

export default App;
