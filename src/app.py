from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return app.send_static_file("dist/index.html")

@app.route("/bundle.js")
def js_bundle():
    return app.send_static_file("dist/bundle.js")