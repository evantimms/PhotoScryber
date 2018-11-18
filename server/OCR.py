import requests

API_KEY = "key=AIzaSyCQlFExqVbKWPyHqhqfFdJHk6ekVye9PPk"
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

    r = requests.post(API_ENDPOINT, json=request_obj)

    #print('----------------------')
    return r.json()['responses'][0]['textAnnotations'][0]['description']
    #word_list = r.json().responses.response.responses[0].textAnnotations[0].description

    #word_list = r.json()['responses'][0]['fullTextAnnotation']
