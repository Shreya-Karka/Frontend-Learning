import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("gray");

  return (
    <div className="color-picker">
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          border: "3px solid black",
          borderRadius: "10px",
          margin: "20px auto",
        }}
      ></div>
      <p>Current Color: {color}</p>
      <div className="button-container">
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("white")}>White</button>
        <button onClick={() => setColor("orange")}>Orange</button>
      </div>
    </div>
  );
}
export default ColorPicker;
