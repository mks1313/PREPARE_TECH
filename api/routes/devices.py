from flask import Blueprint, jsonify, request
from services.devices import (
    list_devices, get_device, create_device, update_device, delete_device
)
from utils.errors import err

bp = Blueprint("devices", __name__, url_prefix="/api/devices")

@bp.get("/")
def get_all_devices():
    return jsonify(list_devices())

@bp.get("/<dev_id>")
def get_device_by_id(dev_id: str):
    d = get_device(dev_id)
    return jsonify(d) if d else err(404, f"Device '{dev_id}' not found")

@bp.post("/")
def create_device_route():
    body = request.get_json(silent=True) or {}
    try:
        dev = create_device(body)
        return jsonify(dev), 201
    except ValueError as e:
        return err(400, str(e))

@bp.patch("/<dev_id>")
def update_device_route(dev_id: str):
    body = request.get_json(silent=True) or {}
    try:
        return jsonify(update_device(dev_id, body))
    except ValueError as e:
        code = 404 if "not found" in str(e) else 400
        return err(code, str(e))

@bp.delete("/<dev_id>")
def delete_device_route(dev_id: str):
    try:
        delete_device(dev_id)
        return ("", 204)
    except ValueError as e:
        return err(404, str(e))
