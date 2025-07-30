const toggle = document.getElementById('toggle');

const updateButtonText = (enabled) => {
  const buttonText = enabled ? 'Disable Theme' : 'Enable Theme';
  toggle.textContent = buttonText;
};

chrome.storage.sync.get('enabled', (data) => {
  updateButtonText(data.enabled);
});

toggle.addEventListener('click', () => {
  chrome.storage.sync.get('enabled', (data) => {
    const newEnabledState = !data.enabled;
    chrome.storage.sync.set({ enabled: newEnabledState }, () => {
      updateButtonText(newEnabledState);
    });
  });
});
