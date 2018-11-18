var SERVER_API = 'http://localhost:5000'
var translation = null;

chrome.runtime.onInstalled.addListener(function() {
  console.log('PhotoScryber successfully installed');
  
  chrome.contextMenus.create({
    id: 'id_photoscrybe_main',
    title: 'Photoscrybe this',
    contexts: ['image']
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  //console.log(info.srcUrl);
  postJSON(info.srcUrl, tab);
})

function postJSON(imgUrl, tab) {
  //console.log(imgUrl);
  
  chrome.browserAction.setBadgeText({text: '...'});
  chrome.browserAction.setIcon({
    path : {
      "19": "images/write.png",
      "38": "images/write.png"
    }
  });
  return fetch(SERVER_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: imgUrl
      })
    })
    .then((response) => {
      chrome.browserAction.setBadgeText({text: ''});
      chrome.browserAction.setIcon({
        path : {
          "19": "images/eye.png",
          "38": "images/eye.png"
        }
      });
      return response.json()
    })
    .then((data) => {
      translation = data;
    })
    .catch((e) => { console.error(e) } );
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request === 'init')
      sendResponse(translation);

    chrome.browserAction.setBadgeText({text: ''});
    
});


