from flask import Blueprint, jsonify, request
from time import time

bp = Blueprint("readings", __name__, url_prefix="/api")

@bp.get("/readings")
def get_readings():
    device_id = request.args.get("deviceId", "dev-001")
    sensor_id = request.args.get("sensorId", "s-temp")
    now = int(time() * 100)
    duration_ms = int(request.args.get("durationMs", 60_000))
    interval_ms = max(500, int(request.args.get("intervalMs", 5_000)))
    start = now - duration_ms

    points = []
    t = start
    base = 23.5
    while t <= now:
        val = round(base + ((t // interval_ms) % 10) * 0.1, 2)
        points.append({"deviceId": device_id, "sensorId": sensor_id, "ts": t, "value": val})
        t += interval_ms
    return jsonify(points)
