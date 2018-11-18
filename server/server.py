'''
SETUP:

pip3 install flask

RUN SERVER:

'''

from flask import Flask, request
from flask_cors import CORS
from OCR import OCR, OCR_locations, OCR_string
from translate import translate
import json
app = Flask(__name__)
CORS(app)


# GET/POST ROUTE
@app.route('/', methods=['GET', 'POST'])
def parse_request():
     
    if request.method == 'POST':
        url = request.json.get('url')
        data =  OCR(url)  


    return {
        "word_positions": data.positions,
        "translated_word_string": translate(data.string)
    }


if __name__ == '__main__':
    app.run(debug=True, port=5000)
