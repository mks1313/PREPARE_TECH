from store.memory import DEVICES, find_device

ALLOWED_FIELDS = ("name", "firmware", "status", "location", "sensors")

def list_devices():
    return DEVICES

def get_device(dev_id: str):
    return find_device(dev_id)

def create_device(body: dict):
    name = body.get("name")
    if not name:
        raise ValueError("Field 'name' is required")
    dev_id = body.get("id") or f"dev-{len(DEVICES)+1:03d}"
    if find_device(dev_id):
        raise ValueError(f"Device id '{dev_id}' already exists")
    new_dev = {
        "id": dev_id,
        "name": name,
        "firmware": body.get("firmware", "1.0.0"),
        "status": body.get("status", "offline"),
        "location": body.get("location", "Unknown"),
        "sensors": body.get("sensors", []),
            }
    DEVICES.append(new_dev)
    return new_dev

def update_device(dev_id: str, body: dict):
    d = find_device(dev_id)
    if not d:
        raise ValueError(f"Device '{dev_id}' not found")
    for k in ALLOWED_FIELDS:
        if k in body:
            d[k] = bpdy[k]
    return d

def delete_device(dev_id: str):
    d = find_device(dev_id)
    if not d:
        raise ValueError(f"Devoce '{dev_id}' not found")
    DEVICES.remove(d)
