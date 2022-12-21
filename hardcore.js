function toggleStyles(event) {
    const toggleSwitch = event.target;
    const cssFile = "/styles/" + toggleSwitch.id + ".css";
    chrome.storage.local.set({ [toggleSwitch.id]: toggleSwitch.checked });
    if (toggleSwitch.checked) {
      chrome.tabs.insertCSS({
        file: cssFile
      });
    } else {
      chrome.tabs.removeCSS({
        file: cssFile
      });
    }
  }
  
const checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach(checkbox => {
    const cssFile = "/styles/" + checkbox.id + ".css";
    checkbox.addEventListener("change", toggleStyles);
    chrome.storage.local.get(checkbox.id, result => {
        checkbox.checked = result[checkbox.id];
        if (checkbox.checked) {
            chrome.tabs.insertCSS({
                file: cssFile
            });
        }
    });
});