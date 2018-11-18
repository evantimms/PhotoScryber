import requests
import base64

API_KEY = "key=AIzaSyCQlFExqVbKWPyHqhqfFdJHk6ekVye9PPk"
API_ENDPOINT ="https://vision.googleapis.com/v1/images:annotate?" + API_KEY

def OCR(url):
    if url[0:22] == "data:image/png;base64,":
        request_obj = {
            "requests":[
                {
                "image":{
                    "content": url[22:]
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

    elif url[0:23] == "data:image/jpeg;base64,":
        request_obj = {
            "requests":[
                {
                "image":{
                    "content": url[23:]
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

    else:
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

    r = requests.post(API_ENDPOINT, json=request_obj)    

    return r.json()['responses'][0]['textAnnotations'][0]['description']
