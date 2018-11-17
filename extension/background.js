
chrome.runtime.onInstalled.addListener(function() {
    console.log("Extension successfully installed");
    

    chrome.contextMenus.create({
        id: "myid",
        title: "cool",
        contexts: ["all"]
    }, console.log("contextmenu created"));
  });

