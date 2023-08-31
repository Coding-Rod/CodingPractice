from flask import Flask, request, make_response, redirect, render_template

app = Flask(__name__)

@app.route('/')
def index():
    user_ip = request.remote_addr
    
    response = make_response(redirect('/hello'))
    response.set_cookie('user_ip', user_ip)
    
    return response

@app.route('/hello')
def hello():
    user_ip = request.cookies.get('user_ip')
    context = {
        "user_ip": user_ip,
        "todos": ['Comprar cafe', 'Enviar solicitud de compra', 'Entregar video a productor'],
        "name": "Rodrigo"
    }
    return render_template('hello.html', **context)

@app.errorhandler(404)
def not_found(error):
    return render_template('error.html', error=error)

@app.errorhandler(500)
def server_error(error):
    return render_template('error.html', error=error)


if __name__ == '__main__':
    app.run(debug=True)