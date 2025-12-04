import React from "react";

export default function ColourSelector({ config, handleClick }) {
  return (
    <button
      className="btn"
      onClick={() => handleClick(config.value)}
      id={config.value}
    >
      {config.label}
    </button>
  );
}
