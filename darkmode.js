const isDarkMode = localStorage.getItem('darkMode') === 'true';

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'true');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'false');
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

const darkModeToggleButton = document.getElementById('dark-mode-toggle');
if (darkModeToggleButton) {
  darkModeToggleButton.addEventListener('click', toggleDarkMode);
}
