var SERVER_API = 'http://localhost:5000'

chrome.runtime.onInstalled.addListener(function() {
    console.log('PhotoScryber successfully installed');
    
    chrome.contextMenus.create({
        id: 'id_photoscrybe_main',
        title: 'Photoscrybe this',
        contexts: ['image']
    });

    chrome.contextMenus.onClicked.addListener(function(info) {
        console.log('srcUrl ' + info.srcUrl);
        console.log(info.srcUrl);
        postJSON(info.srcUrl);
    })
});

function postJSON(imgUrl) {
    return fetch(SERVER_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'mode': 'no-cors'
        },
        body: JSON.stringify({
            url: imgUrl
        })
    })
    .then((response) =>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((e) => console.log(e));
}

function getPostJSON() {
    return fetch(SERVER_API)
        .then(res => res.json())
        .then(posts => console.log(posts));
}