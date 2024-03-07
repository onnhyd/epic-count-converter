const isDarkMode = localStorage.getItem('darkMode') === 'true';
const darkModeToggleButton = document.getElementById('dark-mode-toggle');

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'true');
  darkModeToggleButton.style.backgroundImage = "url('dark-mode-image.png')";
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'false');
  darkModeToggleButton.style.backgroundImage = "url('light-mode-image.png')";
}

function toggleDarkMode() {
  if (localStorage.getItem('darkMode') === 'true') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

if (isDarkMode) {
  enableDarkMode();
}

if (darkModeToggleButton) {
  darkModeToggleButton.addEventListener('click', toggleDarkMode);
}
