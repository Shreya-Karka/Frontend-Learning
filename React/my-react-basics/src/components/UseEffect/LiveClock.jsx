import { useState, useEffect } from "react";
import "./Effect.css";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const count = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(count);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="clock">
      <h2>Live Clock</h2>
      <div className="time">
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
}

export default LiveClock;
