import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";

export default function App() {
  const [selectedColor, setSelectedColor] = useState("");

  const config = [
    { label: "Blue", value: "blue" },
    { label: "Orange", value: "orange" },
    { label: "Green", value: "green" }
  ];

  return (
    <div className="App">
      <h1>Must use Props and State. Help us to change the color!</h1>

      <div className="button-cont">
        {config.map((colObj) => (
          <ColourSelector
            key={colObj.value}
            config={colObj}
            handleClick={setSelectedColor}
          />
        ))}
      </div>

      <div className="selection-cont">
        {/* Three Selection Boxes */}
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
      </div>
    </div>
  );
}
