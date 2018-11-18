chrome.runtime.onMessage.addListener(function(translation, sender, sendResponse) {
    alert(translation);
});