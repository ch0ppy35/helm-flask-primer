from app import app
from flask import jsonify
import os


@app.route("/", methods=["GET"])
def index():
    return jsonify(message="Hello World!"), 200


@app.route("/message", methods=["GET"])
def message():
    return jsonify(message="Yay, K8s!"), 200


@app.route("/pod_name", methods=["GET"])
def pod_name():
    try:
        name = os.environ["MY_POD_NAME"]
    except KeyError:
        name = "Not running in K8s!"
    return jsonify(podName=name), 200


@app.route("/healthz", methods=["GET"])
def health_check():
    return jsonify(status="OK"), 200
