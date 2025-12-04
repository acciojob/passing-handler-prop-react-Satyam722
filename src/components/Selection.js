import React, { useState } from 'react';

const Selection = (props) => {
  const [selectionStyle, setSelectionStyle] = useState({});

  // Update background when props change
  React.useEffect(() => {
    if (props.selection && props.selection.background) {
      setSelectionStyle({ background: props.selection.background });
    }
  }, [props.selection]);

  return (
    <div 
      className="fix-box"
      style={selectionStyle}
    >
      {/* Selection Box Content */}
    </div>
  );
};

export default Selection;
