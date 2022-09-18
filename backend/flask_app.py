import datetime
import logging
import os

from flask import Flask
from flask.logging import default_handler
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_restful import Api

project_path = os.path.split(os.path.abspath("."))[0]
dist_path = os.path.join(project_path, "dist")

app = Flask(__name__, static_url_path='', static_folder=dist_path)

CORS(app)

app.secret_key = "secret-key"
app.config["JWT_SECRET_KEY"] = "secret-jwt-key"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(hours=30 * 24)

app.logger.setLevel(logging.DEBUG)
app.logger.removeHandler(default_handler)

jwt = JWTManager(app)

# api_auth = Api(app, '/api/auth')
# api = Api(app, '/api', decorators=[access_required])
# settings = Api(app, '/api', decorators=[admin_required, access_required])
# logs = Api(app, '/api/logs')

# api_auth.add_resource(Login, '/login')
# api_auth.add_resource(Logout, '/logout')
# api.add_resource(Units, '/units')

@app.route('/', defaults={'path': ''})
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return app.send_static_file(path)
    else:
        return app.send_static_file('index.html')


@app.errorhandler(404)
def not_found(_):
    return app.send_static_file('index.html')