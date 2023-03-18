from flask import Flask, send_from_directory

app = Flask(__name__)


@app.route("/")
def home():
    return app.send_static_file("dist/index.html")


@app.route("/<path:path>")
def send_statics(path):
    return send_from_directory("static/dist", path)
