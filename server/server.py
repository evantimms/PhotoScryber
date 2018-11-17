'''
SETUP:

pip3 install flask

RUN SERVER:

'''

from flask import Flask, request
import json
app = Flask(__name__)


# GET/POST ROUTE
@app.route('/', methods=['GET', 'POST'])
def parse_request():
     
    
    if request.method == 'GET':
        return "Hello"
    elif request.method == 'POST':
        print(request.json)
        return json.dumps(request.json)




if __name__ == '__main__':
    app.run(debug=True, port=5000)
