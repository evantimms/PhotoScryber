import requests
import base64
from google.cloud import vision

API_KEY = "key="
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
    try:
        return r.json()['responses'][0]['textAnnotations'][0]['description']
    except:
        return "Error with input"
    
    # from google.cloud import vision
    # client = vision.ImageAnnotatorClient()
    # image = vision.types.Image()
    # image.source.image_uri = url

    # response = client.text_detection(image=image)
    # texts = response.text_annotations
    # print(texts)
    # return 'abc'
    # '''
    # print('Texts:')

    # for text in texts:
    #     print('\n"{}"'.format(text.description))

    #     vertices = (['({},{})'.format(vertex.x, vertex.y)
    #                 for vertex in text.bounding_poly.vertices])

    #     print('bounds: {}'.format(','.join(vertices)))
    # '''