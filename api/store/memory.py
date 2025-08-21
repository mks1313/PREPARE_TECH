from typing import Any, Dict, List

DEVICES: List[Dict[str, Any]] = [
        {
            "id": "dev-001",
            "name": "Textile Pad A",
            "firmware": "1.2.3",
            "status": "online",
            "location": "Lab",
            "sensors": [
                {"id": "s-temp", "kind": "temp", "unit": "ºC", "samplingHz": 1},
                {"id": "s-hum", "kind": "humidity", "unit": "%RH", "samplingHz": 1},
                ],
            },
        {
            "id": "dev-002",
            "name": "Mat B",
            "firmware": "1.0.0",
            "status": "offline",
            "location": "room 2",
            "sensors": [],
            },
        ]

def find_device(dev_id: str):
    return next((d for d in DEVICES if d["id"] == dev_id), None)
