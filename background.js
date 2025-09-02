// background.js
console.log("✅ Background service worker running");

chrome.runtime.onInstalled.addListener(() => {
  console.log("WordHelper extension installed!");
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "processText") {
    console.log("🔹 Received text:", request.text);

    // Later we’ll call backend API here
    const correctedText = request.text.toUpperCase(); // temporary demo

    sendResponse({ corrected: correctedText });
  }

  return true; // keeps message channel open
});
