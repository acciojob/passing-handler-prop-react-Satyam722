import React, { useState, useEffect } from 'react';

const Selection = ({ selection }) => {
  const [style, setStyle] = useState({});

  // Update style when selection changes
  useEffect(() => {
    if (selection && selection.background) {
      setStyle({ backgroundColor: selection.background });
    }
  }, [selection]);

  return (
    <div 
      className="fix-box"
      style={style}
    >
      {/* Empty box that changes color */}
    </div>
  );
};

export default Selection;
