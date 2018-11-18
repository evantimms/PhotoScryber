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

var temp_response = {
    "responses": [
      {
        "textAnnotations": [
          {
            "locale": "en",
            "description": "ABBEY\nROAD NW8\nCITY OF WESTMINSTER\n",
            "boundingPoly": {
              "vertices": [
                {
                  "x": 45,
                  "y": 43
                },
                {
                  "x": 269,
                  "y": 43
                },
                {
                  "x": 269,
                  "y": 178
                },
                {
                  "x": 45,
                  "y": 178
                }
              ]
            }
          },
          {
            "description": "ABBEY",
            "boundingPoly": {
              "vertices": [
                {
                  "x": 45,
                  "y": 50
                },
                {
                  "x": 181,
                  "y": 43
                },
                {
                  "x": 183,
                  "y": 80
                },
                {
                  "x": 47,
                  "y": 87
                }
              ]
            }
          },
          {
            "description": "ROAD",
            "boundingPoly": {
              "vertices": [
                {
                  "x": 48,
                  "y": 96
                },
                {
                  "x": 155,
                  "y": 96
                },
                {
                  "x": 155,
                  "y": 132
                },
                {
                  "x": 48,
                  "y": 132
                }
              ]
            }
          },
          {
            "description": "NW8",
            "boundingPoly": {
              "vertices": [
                {
                  "x": 182,
                  "y": 95
                },
                {
                  "x": 269,
                  "y": 95
                },
                {
                  "x": 269,
                  "y": 130
                },
                {
                  "x": 182,
                  "y": 130
                }
              ]
            }
          },
          {
            "description": "CITY",
            "boundingPoly": {
              "vertices": [
                {
                  "x": 51,
                  "y": 162
                },
                {
                  "x": 85,
                  "y": 161
                },
                {
                  "x": 85,
                  "y": 177
                },
                {
                  "x": 51,
                  "y": 178
                }
              ]
            }
          },
          {
            "description": "OF",
            "boundingPoly": {
              "vertices": [
                {
                  "x": 95,
                  "y": 162
                },
                {
                  "x": 111,
                  "y": 162
                },
                {
                  "x": 111,
                  "y": 176
                },
                {
                  "x": 95,
                  "y": 176
                }
              ]
            }
          },
          {
            "description": "WESTMINSTER",
            "boundingPoly": {
              "vertices": [
                {
                  "x": 124,
                  "y": 162
                },
                {
                  "x": 249,
                  "y": 160
                },
                {
                  "x": 249,
                  "y": 174
                },
                {
                  "x": 124,
                  "y": 176
                }
              ]
            }
          }
        ]
      }
    ]
  }