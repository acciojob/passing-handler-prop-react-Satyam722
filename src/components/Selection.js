import React, { useState } from "react";
import '../styles/Selection.css'; // optional, for individual styling

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({ background: "" });

  // This function will be called by the parent App.js
  const handleClick = () => {
    applyColor(setStyle);
  };

  return (
    <div
      className="selection-box"
      style={{
        ...style,
        width: "150px",
        height: "150px",
        margin: "10px",
        display: "inline-block",
        cursor: "pointer",
        borderRadius: "8px",
        transition: "background 0.3s ease"
      }}
      onClick={handleClick}
    >
      {/* You can show a label or leave it empty */}
    </div>
  );
};

export default Selection;
