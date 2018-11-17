'''
SETUP:

pip3 install flask

RUN SERVER:

'''

from flask import Flask, request
app = Flask(__name__)


# GET/POST ROUTE
@app.route('/', methods=['GET', 'POST'])
def parse_request():
    data = request.data  
    
