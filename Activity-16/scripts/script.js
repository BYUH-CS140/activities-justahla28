// Function to change the color from input picker
function changeColor(color) {
  // Change the background of the whole page
  document.body.style.backgroundColor = color;

  // Change the background of the display area
  document.getElementById('displayArea').style.backgroundColor = color;

  // Display the hex value
  document.getElementById('colorValue').textContent = color;
}

// Function to generate a random hex color
function generateRandomColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

  // Call changeColor to apply updates
  changeColor(randomColor);

  // Set the color picker value (optional for syncing UI)
  document.getElementById('colorPicker').value = randomColor;
}
