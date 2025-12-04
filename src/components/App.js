import React, { useState } from 'react';
import ColourSelector from './ColourSelector';
import Selection from './Selection';

function App() {
  const [nextBackground, setNextBackground] = useState({ background: '' });

  // Handler function passed as prop
  const selectNextBackground = (background) => {
    setNextBackground(background);
  };

  // Color configuration
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

  return (
    <div id="master">
      <h5 className="heading">Color Picker</h5>
      
      {/* Buttons for color selection */}
      <div className="row">
        {colourConfig.map((config) => (
          <ColourSelector 
            key={config.key}
            config={config}
            selectNextBackground={selectNextBackground}
          />
        ))}
      </div>

      {/* Three boxes that change color */}
      <div className="row" id="children-wrapper">
        <Selection selection={nextBackground} />
        <Selection selection={nextBackground} />
        <Selection selection={nextBackground} />
      </div>
    </div>
  );
}

export default App;
