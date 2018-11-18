'''
SETUP:

pip3 install flask

RUN SERVER:

'''

from flask import Flask, request
from flask_cors import CORS
from OCR import OCR_locations, OCR_string
from translate import translate
import json
app = Flask(__name__)
CORS(app)


# GET/POST ROUTE
@app.route('/', methods=['GET', 'POST'])
def parse_request():
     
    if request.method == 'POST':
        url = request.json.get('url')
        return 0  

    return {
        "word_positions": OCR_locations(url),
        "translated_word_string": translate(OCR_string(url))
    }






if __name__ == '__main__':
    app.run(debug=True, port=5000)
