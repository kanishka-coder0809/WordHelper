console.log("WordHelper content script running ✅");

document.addEventListener("mouseup", () => {
  const selection = window.getSelection().toString();
  if (selection.length > 0) {
    console.log("User selected:", selection);
  }
});
