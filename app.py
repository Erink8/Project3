import os
import numpy as dt
from flask import Flask, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base

    #code for pyscopg2 (if needed)
    # Connect to your postgres DB
    #conn = psycopg2.connect("dbname=test user=postgres")
    # Open a cursor to perform database operations
    #cur = conn.cursor()
    # Execute a query
    #cur.execute("SELECT * FROM my_data")
    # Retrieve query results
    #records = cur.fetchall()

#engine = create_engine(os.gentenv(DATABASE_URI_E'))
engine = create_engine(os.getenv('DATABASE_URI'))

Base.prepare(engine, reflect= True)

Test = Base.classes.text

session = Session(engine)

app + Flask (__name__)

@app.route('/')
def greeting():
    return 'Welcome to California Wildfire Data API'

@app.route('/api')
def test():
    cols = ['incident_name','county', 'location', 'longitude', 'latitude','acres_burned', 'start_date', 'extinquished_date', 'days_duration']
    data = session.query(Test).all()
    result = [{col: getattr(d, col) for col in cols} for d in data]
    return jsonify(result=result)

                       