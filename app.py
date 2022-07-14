from flask import Flask
from flask_restful import Api
from flask_jwt import JWT
from flask import render_template
from flask_sqlalchemy import SQLAlchemy
from resources.user import UserRegister
from resources.record import Record
from db import db
from models.user import UserModel
from hmac import compare_digest
from resources.record import Record,Age_Pie,Sex_Pie,Region_Pie,Age_Bar,Region_Bar,Sex_Bar
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.secret_key = 'tarun'
api = Api(app)
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')


def auth(username, password):
    user = UserModel.find_by_username(username)
    if user and compare_digest(user.password, password):
        return user


def identity(payload):
    user_id = payload['identity']
    return UserModel.find_by_id(user_id)

jwt = JWT(app, auth, identity)  # /auth

api.add_resource(UserRegister, '/register')
api.add_resource(Record,'/records')
api.add_resource(Age_Pie,'/records/age_pie')
api.add_resource(Sex_Pie,'/records/sex_pie')
api.add_resource(Region_Pie,'/records/region_pie')
api.add_resource(Age_Bar,'/records/age_bar')
api.add_resource(Sex_Bar,'/records/sex_bar')
api.add_resource(Region_Bar,'/records/region_bar')

db.init_app(app)
app.run(port=5003, debug=True)
