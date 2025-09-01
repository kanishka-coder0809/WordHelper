import React, { useState } from "react";

export default function Popup() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleCheck = () => {
    // For now just fake suggestion
    setSuggestions([{ error: "go", suggestion: "goes" }]);
  };

  return (
    <div style={{ width: "250px", padding: "10px", fontFamily: "Arial" }}>
      <h3>WordHelper ✍️</h3>
      <textarea
        rows="4"
        style={{ width: "100%", marginBottom: "10px" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text..."
      />
      <button onClick={handleCheck}>Check</button>
      <ul>
        {suggestions.map((s, i) => (
          <li key={i}>
            ❌ {s.error} → ✅ {s.suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}
