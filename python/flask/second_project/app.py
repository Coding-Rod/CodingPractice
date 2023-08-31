from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    user_ip = request.remote_addr
    return 'Hello! Your IP is {}'.format(user_ip)

if __name__ == '__main__':
    app.run(debug=True)