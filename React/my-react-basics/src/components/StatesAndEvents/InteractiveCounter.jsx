import { useState } from "react";

function InteractiveCounter() {
  const [count, setCount] = useState(0);

  function handleSubone() {
    if (count - 1 >= 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="interactive-counter">
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}> +1 </button>
      <button onClick={() => handleSubone()}> -1 </button>
      <button onClick={() => setCount(count + 5)}> +5 </button>
      <button onClick={() => setCount(0)}> Reset </button>
    </div>
  );
}
export default InteractiveCounter;
