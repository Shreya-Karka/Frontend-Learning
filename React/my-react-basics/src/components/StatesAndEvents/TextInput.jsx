import { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  function handleClear() {
    setText("");
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="text-input">
      <input
        onChange={handleChange}
        type="text"
        value={text}
        placeholder="Type Something..."
      />
      {text.length > 0 ? (
        <div>
          <p>You typed: {text}</p>
          <p>Charcater Count: {text.length}</p>
        </div>
      ) : (
        <p>Start typing to see your text</p>
      )}
      <button onClick={handleClear}>Reset</button>
    </div>
  );
}
export default TextInput;
