const setDarkMode = (enabled) => {
  if (enabled) {
    document.documentElement.setAttribute('data-dark-mode-enabled', '');
  } else {
    document.documentElement.removeAttribute('data-dark-mode-enabled');
  }
};

chrome.storage.sync.get('enabled', ({ enabled }) => {
  setDarkMode(enabled);
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.enabled) {
    setDarkMode(changes.enabled.newValue);
  }
});
