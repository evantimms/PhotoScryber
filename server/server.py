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
        url = request.json.get('url')
        data =  OCR(url)
        


        print(data)
        return jsonify(data)

    


if __name__ == '__main__':
    app.run(debug=True, port=5000)
