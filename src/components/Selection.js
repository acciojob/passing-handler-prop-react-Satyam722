import React from 'react';

function Selection({ applyColor }) {
  const colors = ['red', 'green', 'blue'];

  return (
    <div>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => applyColor(color)}
          style={{ background: color, margin: '5px' }}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default Selection;
