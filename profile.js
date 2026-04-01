// Simple welcome message
console.log("Welcome to Manjunath's Portfolio Website");

// Button click animation message
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");

  if (button) {
    button.addEventListener("click", () => {
      console.log("View Projects button clicked");
    });
  }
});