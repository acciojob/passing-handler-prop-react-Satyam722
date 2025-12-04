import React, { useState } from 'react';
import Selection from './Selection';

function App() {
  const [selectedColor, setSelectedColor] = useState('white');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <div className="fix-box" style={{ background: selectedColor }}>
        Box 1
      </div>
      <div className="fix-box" style={{ background: selectedColor }}>
        Box 2
      </div>
      <div className="fix-box" style={{ background: selectedColor }}>
        Box 3
      </div>
      <Selection applyColor={handleColorChange} />
    </div>
  );
}

export default App;
