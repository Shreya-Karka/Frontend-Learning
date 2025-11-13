import { useState, useEffect } from "react";
import "./Effect.css";

function AutoSaveNotes() {
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  function handleChange(e) {
    setNotes(e.target.value);
  }

  useEffect(() => {
    const savedNote = localStorage.getItem("note");
    if (savedNote) {
      setNotes(savedNote);
    }
  }, []);

  useEffect(() => {
    if (notes) {
      localStorage.setItem("note", notes);
      setSaved(true);

      const timerId = setTimeout(() => {
        setSaved(false);
      }, 2000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [notes]);

  return (
    <div className="auto-save-notes">
      <h2>Auto Save Notes</h2>
      <textarea
        value={notes}
        onChange={handleChange}
        placeholder="Write Notes..."
        rows="10"
      />
      {saved && <p className="saved-indicator">✅ Saved!</p>}
    </div>
  );
}

export default AutoSaveNotes;
