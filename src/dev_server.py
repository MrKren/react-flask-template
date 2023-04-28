from livereload import Server

from app import app

if __name__ == "__main__":
    app.debug = True
    server = Server(app.wsgi_app)
    server.serve(port=5000, host="0.0.0.0")
