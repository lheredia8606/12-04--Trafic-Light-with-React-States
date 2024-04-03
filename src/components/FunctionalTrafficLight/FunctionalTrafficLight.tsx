import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [stateValue, setStateValue] = useState(0);
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div
          className={stateValue % 3 === 0 ? "circle red" : "circle black"}
        ></div>
        <div
          className={stateValue % 3 === 2 ? "circle yellow" : "circle black"}
        ></div>
        <div
          className={stateValue % 3 === 1 ? "circle green" : "circle black"}
        ></div>
      </div>
      <button
        className="next-state-button"
        onClick={() => {
          setStateValue(stateValue + 1);
        }}
      >
        Next State
      </button>
    </div>
  );
};
