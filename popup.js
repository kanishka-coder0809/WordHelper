document.addEventListener("DOMContentLoaded", () => {
  const selectedTextEl = document.createElement("p");
  const correctedTextEl = document.createElement("p");

  selectedTextEl.innerHTML = "<b>Selected:</b> ";
  correctedTextEl.innerHTML = "<b>Corrected:</b> ";

  const container = document.createElement("div");
  container.style.padding = "10px";
  container.style.fontFamily = "Arial";

  const title = document.createElement("h2");
  title.textContent = "WordHelper";

  const getTextBtn = document.createElement("button");
  getTextBtn.textContent = "Get Selected Text";

  const processBtn = document.createElement("button");
  processBtn.textContent = "Process";

  // Handle Get Selected Text
  getTextBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "getSelectedText" },
        (response) => {
          selectedTextEl.innerHTML = "<b>Selected:</b> " + (response?.text || "");
        }
      );
    });
  });

  // Handle Process Text
  processBtn.addEventListener("click", () => {
    const text = selectedTextEl.textContent.replace("Selected:", "").trim();
    chrome.runtime.sendMessage(
      { action: "processText", text: text },
      (response) => {
        correctedTextEl.innerHTML = "<b>Corrected:</b> " + (response?.corrected || "");
      }
    );
  });

  container.appendChild(title);
  container.appendChild(getTextBtn);
  container.appendChild(selectedTextEl);
  container.appendChild(processBtn);
  container.appendChild(correctedTextEl);

  document.body.appendChild(container);
});
