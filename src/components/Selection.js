import React, { useState } from "react";

export default function Selection({ selectedColor }) {
  const [boxColor, setBoxColor] = useState(""); // independent per box

  return (
    <div
      className="fix-box"
      onClick={() => setBoxColor(selectedColor)}  // apply active color
      style={{ backgroundColor: boxColor }}
    >
      Selection
    </div>
  );
}
