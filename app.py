#Set up dependencies
import os
from flask import Flask, jsonify
from sqlalchemy import create_engine, func
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base
from flask_cors import cross_origin

# Create engine to postgress sql california wildfire data file
engine = create_engine("postgresql://climate_change_user:xEZhRWSSGx2TOWeWRDuS65K0D0UXcARD@dpg-cgutndodh87vdorr2910-a.oregon-postgres.render.com/california_climate_change")
#engine = create_engine(os.getenv(DATABASE_URI))

# Reflect an existing database into a new model
Base = automap_base()

# Reflect tables
Base.prepare(engine,reflect=True)

# Save references to each table
Ca_wildfire = Base.classes.ca_wildfire
#Ca_drought = Base.classes.ca_drought

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
    # Create our session (link from pythong to sql database)
    session = Session(engine)

    # Return JSON list of stations from the dataset
    results = session.query(Ca_wildfire).all()
    session.close()

    cols = ['ID','incident_name', 'county', 'location', 'longitude', 'latitude', 'acres_burned', 'start_date', 'days_duration','month_year']
    data = session.query(Ca_wildfire).all()
   # print(getattr(data[0], 'ID'))



    result = [{col: getattr(d, col) for col in cols} for d in data]
    return jsonify(result=result)

if __name__ == "__main__":
    app.run(debug=True)