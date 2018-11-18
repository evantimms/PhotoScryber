'''
SETUP:

pip3 install flask

RUN SERVER:

'''

from flask import Flask, request, jsonify
from flask_cors import CORS
from OCR import OCR
from translate import translate_text
import json
app = Flask(__name__)
CORS(app)

# GET/POST ROUTE
@app.route('/', methods=['GET', 'POST'])
def parse_request():

    if request.method == 'POST':
        print("receiving")
        url = request.json.get('url')
        raw_string =  OCR(url)
        print(raw_string)
        translated_words = translate_text(raw_string)
        return jsonify(translated_words)

if __name__ == '__main__':
    app.run(debug=True, port=5000)

    # app.run(host='192.168.244.123', debug=True)
