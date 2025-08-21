from flask import jsonify

def err(status: int, message: str):
    resp = jsonify({"error": {"code": status, "message": message}})
    resp.status_code = status
    return resp
