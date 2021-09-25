from app import app
import os


@app.route("/")
def index():
    return "<h1>Hello world!</h1>", 200


@app.route("/health")
def health_check():
    return "OK", 200


@app.route("/pod_name")
def pod_name():
    try:
        name = os.environ["MY_POD_NAME"]
    except KeyError:
        name = "- No name found -"
    return "My pod name is {}".format(name), 200
