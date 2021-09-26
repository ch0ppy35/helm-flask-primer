from app import app
from flask import jsonify
import os


@app.route("/", methods=['GET'])
def index():
    return jsonify(str("Hello world!")), 200


@app.route("/health", methods=['GET'])
def health_check():
    return jsonify(str("OK")), 200


@app.route("/pod_name", methods=['GET'])
def pod_name():
    try:
        name = os.environ["MY_POD_NAME"]
    except KeyError:
        name = "Not running in K8s!"
    return jsonify(str(" {}".format(name))), 200
