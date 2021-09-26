from app import app
import os


@app.route("/", methods=['GET'])
def index():
    return "Hello world!", 200


@app.route("/health")
def health_check():
    return "OK", 200


@app.route("/pod_name")
def pod_name():
    try:
        name = os.environ["MY_POD_NAME"]
    except KeyError:
        name = "- No name found -"
    return "Pod is {}".format(name), 200
