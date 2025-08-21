from flask import Blueprint, jsonify
from store.memory import DEVICES

bp = Blueprint("kpis", __name__, url_prefix="/api")

@bp.get("/kpis")
def get_kpis():
    total = len(DEVICES)
    active = sum(1 for d in DEVICES if d["status"] == "online")
    data = {
        "devices": total,
        "active": active,
        "alerts24h": 0,
        "avgTemp": 23,
            }
    return jsonify(data)
