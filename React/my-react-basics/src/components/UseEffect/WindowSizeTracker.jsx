import { useState, useEffect } from "react";
import "./Effect.css";

function WindowSizeTracker() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="window-size">
      <h2>Window Size Tracker</h2>
      <p>Current Width: {size.width}</p>
      <p>Current Height: {size.height}</p>
      <p className="hint">Try resizing your browser window!</p>
    </div>
  );
}

export default WindowSizeTracker;
