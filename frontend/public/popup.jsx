import React, { useState } from "react";

export default function Popup() {
  const [selectedText, setSelectedText] = useState("");
  const [correctedText, setCorrectedText] = useState("");

  const handleGetText = () => {
    // Ask content.js for selected text
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "getSelectedText" },
        (response) => {
          setSelectedText(response?.text || "");
        }
      );
    });
  };

  const handleProcessText = () => {
    chrome.runtime.sendMessage(
      { action: "processText", text: selectedText },
      (response) => {
        setCorrectedText(response?.corrected || "");
      }
    );
  };

  return (
    <div style={{ padding: "10px", fontFamily: "Arial" }}>
      <h2>WordHelper</h2>
      <button onClick={handleGetText}>Get Selected Text</button>
      <p><b>Selected:</b> {selectedText}</p>
      <button onClick={handleProcessText}>Process</button>
      <p><b>Corrected:</b> {correctedText}</p>
    </div>
  );
}
