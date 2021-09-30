from app import app
from flask import jsonify, request
import os
from .mydb import MongoDB


@app.route("/", methods=["GET"])
def index():
    return jsonify(message="Hello World!"), 200


@app.route("/message", methods=["GET"])
def message():
    return jsonify(message="Yay, K8s!"), 200


@app.route("/pod_name", methods=["GET"])
def pod_name():
    name = os.environ.get("MY_POD_NAME") or "Not running in K8s!"
    return jsonify(podName=name), 200


@app.route("/healthz", methods=["GET"])
def health_check():
    return jsonify(status="OK"), 200


@app.route("/notes", methods=["GET", "POST"])
def notes():
    if request.method == "GET":
        obj = MongoDB(None)
        response = obj.get()
        return jsonify(response), 200
    if request.method == "POST":
        data = request.json
        if data is None or data == {} or "Document" not in data:
            return jsonify(error="You need a proper payload"), 400
        obj = MongoDB(data)
        response = obj.post(data)
        return jsonify(response), 200
