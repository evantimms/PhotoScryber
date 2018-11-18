var SERVER_API = 'http://localhost:5000'

chrome.runtime.onInstalled.addListener(function() {
    console.log('PhotoScryber successfully installed');
    
    chrome.contextMenus.create({
        id: 'id_photoscrybe_main',
        title: 'Photoscrybe this',
        contexts: ['image']
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //console.log(request);
    if (request === 'init')
        sendResponse(temp_response);
});

function postJSON(imgUrl) {
    return new Promise(
        fetch(SERVER_API, {
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
            //console.log(data);
        })
        .catch((e) => console.error(e))
    );
}

function getPostJSON() {
    return new Promise(
        fetch(SERVER_API)
        .then(res => res.json())
        .then(posts => console.log(posts))
    );
}