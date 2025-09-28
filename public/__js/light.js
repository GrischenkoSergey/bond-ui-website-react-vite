 // toggleStyles.js

const stylesheetHref = "./assets/css/globallight.css"; // Your CSS file
const storageKey = "extraStylesEnabled";

// Run after the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  const toggleLink = document.getElementById("toggleStylesheet");

  if (!toggleLink) {
    console.warn("Toggle link with ID 'toggleStylesheet' not found.");
    return;
  }

  function enableStylesheet() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = stylesheetHref;
    link.type = "text/css";
    link.id = "dynamicStylesheet"; // ID to reference later
    document.head.appendChild(link);
    toggleLink.textContent = "=Dark=";
    localStorage.setItem(storageKey, "true");
  }

  function disableStylesheet() {
    const existingLink = document.getElementById("dynamicStylesheet");
    if (existingLink) {
      existingLink.remove();
    }
    toggleLink.textContent = "=Light=";
    localStorage.setItem(storageKey, "false");
  }

  // Attach event listener to toggle link
  toggleLink.addEventListener("click", function (e) {
    e.preventDefault();
    const isEnabled = localStorage.getItem(storageKey) === "true";
    if (isEnabled) {
      disableStylesheet();
    } else {
      enableStylesheet();
    }
  });

  // Load state on page load
  if (localStorage.getItem(storageKey) === "true") {
    enableStylesheet();
  } else {
    disableStylesheet();
  }
});
