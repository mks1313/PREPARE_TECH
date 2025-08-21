from flask import Blueprint, jsonify
from time import time

bp = Blueprint("health", __name__, url_prefix="/api")

@bp.get("/ping")
def ping():
    return jsonify({"message": "pong", "status": "ok", "ts": int(time()*1000)})
