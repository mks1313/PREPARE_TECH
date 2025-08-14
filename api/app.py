from flask import Flask, jsonify, request
from flask_cors import CORS
from time import time

app = Flask(__name__)

# ❗ Limita CORS a orígenes del front
CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:5173", "http://127.0.0.1:5173"]
    }
})

DEVICES = [
     {
        "id": "dev-001",
        "name": "Textile Pad A",
        "firmware": "1.2.3",
        "status": "online",
        "location": "Lab",
        "sensors": [
            {"id": "s-temp", "kind": "temp", "unit": "°C", "samplingHz": 1},
            {"id": "s-hum", "kind": "humidity", "unit": "%RH", "samplingHz": 1},
        ],
    },
    {
        "id": "dev-002",
        "name": "Mat B",
        "firmware": "1.0.0",
        "status": "offline",
        "location": "Room 2",
        "sensors": [],
    },
]

@app.route("/ping")
def ping():
    return jsonify({"message": "pong", "status": "ok"})

@app.get("/devices")
def get_devices():
    return jsonify(DEVICES)

@app.get("/kpis")
def get_kpis():
    kpis = [
        {"key": "activeDevices", "label": "Active Devices",
         "value": sum(1 for d in DEVICES if d["status"] == "online")},
        {"key": "avgTemp", "label": "Avg Temp (mock)", "value": 23},
        {"key": "alerts24h", "label": "Alerts (24h)", "value": 0},
    ]
    return jsonify(kpis)

@app.get("/readings")
def get_readings():
    device_id = request.args.get("deviceId", "dev-001")
    sensor_id = request.args.get("sensorId", "s-temp")
    now = int(time() * 1000)
    return jsonify([{"deviceId": device_id, "sensorId": sensor_id, "ts": now, "value": 23.7}])

if __name__ == "__main__":
    # escucha en todas las interfaces para evitar líos con localhost/127
    app.run(host="0.0.0.0", port=4000, debug=True)