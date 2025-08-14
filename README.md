#  Dashboard (Demo)

Frontend built with **React + TypeScript + Tailwind CSS**, backed by a **Flask** API.  
Monitors textile IoT devices and their sensors, with real-time KPIs, device details, and sensor readings.

## 🚀 Features
- Device table with filtering, search, sorting, and pagination.
- Real-time KPIs from the backend API.
- Detailed device view with sensor list.
- Sensor readings with chart and auto-refresh.
- Flask API with `/devices`, `/kpis`, `/readings` endpoints.
- MongoDB persistence with PyMongo.

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend:** Flask (Python)
- **Database:** MongoDB (PyMongo) - In course...
- **Tooling:** ESLint, Prettier, Docker Compose

## 📦 Quick Setup

### Backend
```bash
cd api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
docker compose up -d  # start Mongo
python seed.py
python app.py
```

### Frontend
```bash
cd dashboard
npm install
cp .env.example .env
npm run dev
```

## 📸 Screenshots
_Add dashboard screenshots here._

## 📄 License
MIT
