import React, { useState, useEffect } from 'react';

const Selection = ({ selection }) => {
  const [background, setBackground] = useState('');

  useEffect(() => {
    if (selection && selection.background) {
      setBackground(selection.background);
    }
  }, [selection]);

  return (
    <div 
      className="fix-box"
      style={{ backgroundColor: background }}
    ></div>
  );
};

export default Selection;
