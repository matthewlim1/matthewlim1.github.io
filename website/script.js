// Get the elements
const logo = document.querySelector('.splash-logo');
const mainScreen = document.querySelector('.main-content');
const splashScreen = document.querySelector('.splash-screen');

// Show the splash screen for 2 seconds
setTimeout(() => {
  // Add the fade-out class to the splash screen
  splashScreen.classList.add('fade-out');

  // Wait for the transition to complete (0.5 seconds)
  setTimeout(() => {
    // Hide the splash screen and show the main content
    splashScreen.style.display = 'none';
    mainScreen.style.display = 'block';
  }, 500); // 500 milliseconds = 0.5 seconds
}, 2000); // 2000 milliseconds = 2 seconds