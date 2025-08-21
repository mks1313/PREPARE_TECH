from flask import Flask
from flask_cors import CORS
from config import Config
from routes.health import bp as health_bp
from routes.kpis import bp as kpis_bp
from routes.devices import bp as devices_bp
from routes.readings import bp as readings_bp
from utils.errors import err

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": Config.CORS_ORIGINS}})

    app.register_blueprint(health_bp)
    app.register_blueprint(kpis_bp)
    app.register_blueprint(devices_bp)
    app.register_blueprint(readings_bp)

    @app.errorhandler(404)
    def not_found(_): return err(404, "Not found")

    @app.errorhandler(400)
    def bad_request(_): return err(400, "Bad request")

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(host=Config.HOST, port=Config.PORT, debug=Config.DEBUG)

