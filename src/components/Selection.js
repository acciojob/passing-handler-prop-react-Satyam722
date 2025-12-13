import React, { useState } from "react";

const Selection = (props) => {
  const { applyColor } = props;

  function setBackground(evt) {
    const elem = evt.target;
    elem.style.backgroundColor = applyColor();
  }

  return (
    <div className="fix-box subheading" onClick={setBackground}>Selection</div>
  ); // prettier-ignore
};

export default Selection;
