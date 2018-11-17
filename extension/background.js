
chrome.runtime.onInstalled.addListener(function() {
    console.log("Extension successfully installed");
    

    chrome.contextMenus.create({
        id: "id_photoscrybe",
        title: "Photoscrybe this!",
        contexts: ["image"]
    });

    chrome.contextMenus.onClicked.addListener(function(info) {
        console.log("srcUrl " + info.srcUrl);
    })
  });

