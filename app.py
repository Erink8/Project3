#Set up dependencies
#################################################################################
import os
from flask import Flask, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from flask_cors import cross_origin
#DATABASE_URI = "postgres://california_fire_data_user:NbkbeOnFEw8JiagLONTh7bO66LOj3OKQ@dpg-cgs9g8qut4mcloj9clbg-a.oregon-postgres.render.com/california_fire_data"

#############################################################################
#KEY: DATABASE_URI
#VALUE: c124d7c8d7e7f920b99ff2a334b634b2
#API Unique Name:   projectKey
#API Key: rnd_7h1CIcrEbpcxg6tmAaZKcC58YZ4L
################################################################################
Base = automap_base()

#engine = create_engine(os.gentenv('DATABASE_URI_E'))
#engine = create_engine(os.getenv(DATABASE_URI))
engine = create_engine("postgresql://california_fire_data_user:NbkbeOnFEw8JiagLONTh7bO66LOj3OKQ@dpg-cgs9g8qut4mcloj9clbg-a.oregon-postgres.render.com/california_fire_data")

Base.prepare(engine, reflect= True)

#Test = Base.classes.california_fire_data

session = Session(engine)

app = Flask (__name__)

@app.route('/')
def greeting():
    return 'Welcome to California Wildfire Data API'

@app.route('/api')
@cross_origin
def test():
    cols = ['id','val']
    data = session.query(Test).all()
    result = [{col: getattr(d, col, _default=None) for col in cols} for d in data]
    return jsonify(result=result)

#print(session)
