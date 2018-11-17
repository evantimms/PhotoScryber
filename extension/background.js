chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: "mine",
        type: 'radio',
        id: "myid",
        documentUrlPatterns: [ "chrome-extension://*/a.html"],
        contexts: ['all']
      });
    
  });

  /* ------------- */