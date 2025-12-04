import React from "react";

export default function Selection({ selectedColor }) {
  return (
    <div
      className="fix-box"
      style={{ backgroundColor: selectedColor }}
    >
      Selection
    </div>
  );
}
