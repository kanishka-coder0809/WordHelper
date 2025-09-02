import React, { useState } from "react";

function Popup() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const handleCheck = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/check-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      setResponse(data.message);
    } catch (err) {
      console.error(err);
      setResponse("Error connecting to backend");
    }
  };

  return (
    <div style={{ padding: "10px", width: "300px" }}>
      <h2>WordHelper</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ width: "100%", height: "100px" }}
      />
      <button
        onClick={handleCheck}
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          background: "#6a0dad",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Check Grammar
      </button>

      {response && (
        <p style={{ marginTop: "10px", color: "green" }}>{response}</p>
      )}
    </div>
  );
}

export default Popup;
