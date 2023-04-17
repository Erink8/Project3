#Set up dependencies
#################################################################################
import os
from flask import Flask, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
#from config.py import api_site 

#############################################################################
#KEY: DATABASE_URI
#VALUE: c124d7c8d7e7f920b99ff2a334b634b2
#API Unique Name:   projectKey
#API Key: rnd_7h1CIcrEbpcxg6tmAaZKcC58YZ4L
############################################################################
Base = automap_base

#engine = create_engine(os.gentenv(DATABASE_URI_E'))
engine = create_engine(os.getenv("postgres://california_fire_data_user:NbkbeOnFEw8JiagLONTh7bO66LOj3OKQ@dpg-cgs9g8qut4mcloj9clbg-a.oregon-postgres.render.com/california_fire_data"))

Base.prepare(engine, reflect= True)

Test = Base.classes.text

session = Session(engine)

app + Flask (__name__)

@app.route('/')
def greeting():
    return 'Welcome to California Wildfire Data API'

@app.route('/api')
def test():
    cols = ['id','val']
    data = session.query(Test).all()
    result = [{col: getattr(d, col, _default=None) for col in cols} for d in data]
    return jsonify(result=result)

    ##result = [{col: getattr(d, col) for col in cols} for d in data]
