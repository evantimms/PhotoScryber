import requests

API_KEY = "key="
API_ENDPOINT ="https://vision.googleapis.com/v1/images:annotate?" + API_KEY

def OCR(url):
    
    request_obj = {
        "requests":[
            {
            "image":{
                "source":{
                "imageUri":
                    url
                }
            },
            "features":[
                {
                    "type":"TEXT_DETECTION",
                    "maxResults":1
                }
            ]
            }
        ]
    }
    print(API_ENDPOINT)
    r = requests.post(API_ENDPOINT, json=request_obj)
    print(r.json())
    
    data = {
        'words': []
        }

    return data

