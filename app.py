#Set up dependencies
#################################################################################
import os
from flask import Flask, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from config.py import api_site 

#############################################################################
#KEY: DATABASE_URI
#VALUE: c124d7c8d7e7f920b99ff2a334b634b2
#API Unique Name:   projectKey
#API Key: rnd_7h1CIcrEbpcxg6tmAaZKcC58YZ4L
############################################################################
Base = automap_base

#engine = create_engine(os.gentenv(DATABASE_URI_E'))
engine = create_engine(os.getenv('api_site'))

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
    result = [{col: getattr(d, col) for col in cols} for d in data]
    return jsonify(result=result)

    ##result = [{col: getattr(d, col) for col in cols} for d in data]
