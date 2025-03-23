// Select elements by their IDs
const textParagraph = document.getElementById("description");
const changeTextButton = document.getElementById("change-text-btn");
const toggleBoxButton = document.getElementById("toggle-box-btn");
const box = document.getElementById("box");

// Event listener to change the text content dynamically
changeTextButton.addEventListener("click", () => {
  textParagraph.textContent = "The text has been changed dynamically!";
});

// Event listener to toggle visibility of the box
toggleBoxButton.addEventListener("click", () => {
  box.classList.toggle("hidden"); // Toggles the 'hidden' class to show/hide the box
});
