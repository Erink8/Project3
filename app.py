#Set up dependencies
import os
from flask import Flask, jsonify
from sqlalchemy import create_engine, func
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from flask_cors import cross_origin
from geo_keys import database_key



# Create engine to postgress sql california wildfire data file
engine = create_engine(os.getenv('DATABASE_URI'))

# Reflect an existing database into a new model
Base = automap_base()

# Reflect tables
Base.prepare(engine,reflect=True)

# Save references to each table
Ca_wildfire = Base.classes.ca_wildfire
Ca_drought = Base.classes.ca_drought

print(Ca_wildfire)
print(Ca_drought)
# Initialize app
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

# welcome page
@app.route('/')
def greeting():
    return 'Welcome to California Wildfire Data API'

# CA wildfire data
@app.route('/api')
@cross_origin() 
def test():
    # Create our session (link from python to sql database)
    session = Session(engine)

    # Return JSON list of stations from the dataset
    results = session.query(Ca_wildfire).all()
    session.close()

    cols = ['ID','incident_name', 'county', 'location', 'longitude', 'latitude', 'acres_burned', 'start_date', 'days_duration','month_year']
    data = session.query(Ca_wildfire).all()
    result = [{col: getattr(d, col) for col in cols} for d in data]
    jsonData= {"type": "FeatureCollection", "Features": result}
    return jsonify(jsonData)

#if __name__ == "__main__":
#    app.run(debug=True)

# CA drought data
@app.route('/api-drought')
@cross_origin() 
def get_drought_data():
    session = Session(engine)

    # Return JSON list of stations from the dataset
    results = session.query(Ca_drought).all()
    session.close()

    cols = ['drought_id','none_avg_pct', 'D0_avg_pct', 'D1_avg_pct', 'D2_avg_pct', 'D3_avg_pct', 'D4_avg_pct', 'total_acres_burned', 'month_year']
    data = session.query(Ca_drought).all()
    result = [{col: getattr(d, col) for col in cols} for d in data]
    jsonData= {"type": "FeatureCollection", "Features": result}
    return jsonify(jsonData)

if __name__ == "__main__":
    app.run(debug=True)

## needs geoJson format in order to map data