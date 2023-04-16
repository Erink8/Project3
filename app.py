#Set up dependencies
#################################################################################
import os
from flask import Flask, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base

#############################################################################
#KEY: DATABASE_URI
#VALUE: c124d7c8d7e7f920b99ff2a334b634b2
#API Unique Name:   projectKey
#API Key: rnd_7h1CIcrEbpcxg6tmAaZKcC58YZ4L
############################################################################
Base = automap_base

#engine = create_engine(os.gentenv(DATABASE_URI_E'))
engine = create_engine(os.getenv('DATABASE_URI'))

Base.prepare(engine, reflect= True)

california_fire_data = Base.classes.text

session = Session(engine)

app + Flask (__name__)

@app.route('https://california-fire-data.onrender.com/')
def greeting():
    return 'Welcome to California Wildfire Data API'

@app.route('https://california-fire-data.onrender.com/api')
def test():
    cols = ['incident_name','county', 'location', 'longitude', 'latitude','acres_burned', 'start_date', 'extinquished_date', 'days_duration']
    data = session.query(california_fire_data).all()
    result = [{col: getattr(d, col, _default=None) for col in cols} for d in data]
    return jsonify(result=result)

    ##result = [{col: getattr(d, col) for col in cols} for d in data]
