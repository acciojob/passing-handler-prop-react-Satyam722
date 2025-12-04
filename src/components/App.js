import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";

export default function App() {
  const [selectedColor, setSelectedColor] = useState(""); // global selected color

  const colors = [
    { label: "Blue", value: "blue" },
    { label: "Orange", value: "orange" },
    { label: "Green", value: "green" }
  ];

  return (
    <div className="App">
      <h2>Select the gradient and then the Box to change the color</h2>

      <div className="button-cont">
        {colors.map((c) => (
          <ColourSelector
            key={c.value}
            config={c}
            handleClick={setSelectedColor}
          />
        ))}
      </div>

      <div className="selection-cont">
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
      </div>
    </div>
  );
}
