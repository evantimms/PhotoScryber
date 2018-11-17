'''
SETUP:

pip3 install flask

RUN SERVER:

'''

from flask import Flask, request
from flask_cors import CORS
import json
app = Flask(__name__)
CORS(app)


# GET/POST ROUTE
@app.route('/', methods=['GET', 'POST'])
def parse_request():
     
    
    if request.method == 'GET':
        return "Hello"
    elif request.method == 'POST':
        print(request.json.get('url'))
        return json.dumps(request.json.get('url'))




if __name__ == '__main__':
    app.run(debug=True, port=5000)
