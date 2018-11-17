var SERVER_API = 'localhost:5000'

chrome.runtime.onInstalled.addListener(function() {
    console.log('PhotoScryber successfully installed');
    
    chrome.contextMenus.create({
        id: 'id_photoscrybe_main',
        title: 'Photoscrybe this',
        contexts: ['image']
    });

    chrome.contextMenus.onClicked.addListener(function(info) {
        console.log('srcUrl ' + info.srcUrl);

        postJSON(info.srcUrl);
    })
});

function postJSON(imgUrl) {
    return fetch(SERVER_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: imgUrl
        })
    })
}

function getPostJSON() {
    return fetch(SERVER_API)
        .then(res => res.json())
        .then(posts => console.log(posts));
}