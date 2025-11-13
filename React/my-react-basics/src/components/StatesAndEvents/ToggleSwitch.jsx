import { useState } from "react";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn((isOn) => !isOn);
  }

  return (
    <div
      className="toggle-switch"
      style={{
        backgroundColor: isOn ? "#d4edda" : "#e9ecef",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <p>Current status: {isOn ? "🟢 ON" : "⚫ OFF"}</p>
      <button onClick={handleToggle}>{isOn ? "Turn OFF" : "Turn ON"}</button>
    </div>
  );
}

export default ToggleSwitch;
