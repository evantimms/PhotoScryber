'''
SETUP:

pip3 install flask

'''

from flask import Flask
app = Flask(__name__)


# GET ROUTE
@app.route("/")
def hello():
    return "Hello World!"

# POST ROUTE
@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return 'This is my Post: %d' % post_id