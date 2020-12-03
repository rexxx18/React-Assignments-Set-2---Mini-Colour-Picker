import React, { useState } from "react";
import "../styles/Child.css";
const Selection = ({ applyColor }) => {
  let [backGround, setBackground] = useState({ background: "" });
  const change = (prop) => {
    setBackground(prop);
  };
  return (
    <div
      className="fix-box"
      onClick={() => applyColor(change)}
      style={backGround}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};
export default Selection;

// When the component is clicked, this state variable should get the value of the nextBackground state variable of the App component. (Hint: use applyColor for this)

// The div component should have a child component that's a h2 tag having text "Selection" and class subheading.

// Export the Selection component by default.
