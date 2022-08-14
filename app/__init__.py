# -*- coding: utf8 -*-

from flask import Flask
from flask_cors import CORS
from flask_mongoengine import MongoEngine
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config.from_object('conf')

db = MongoEngine(app)
ma = Marshmallow(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

from app.API.v0.views import API0
# from app.API.v0_1.views import API01 as api_v0_1

app.register_blueprint(API0, url_prefix='/API/v0')
# app.register_blueprint(api_v0_1, url_prefix='/API/v0.1')
