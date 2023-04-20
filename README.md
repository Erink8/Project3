## Project3 
Design a full-stack data visualization web application that allows users to interactively explore a dataset.


### Our focus: Climate Change and its effect on drought and wildfires in California over time
We were interested in seeing how wildfires and droughts have changed over time. 


Are droughts lasting longer? 
Are wildfires increasing? 
How do droughts impact fires over time?


### Project team members: 
-	Leah Apking
-	Erin Clark
-	Nancy Gomez
-	Sheila Troxel

### Gathering the Data
To begin, we explored datasets from the following resources:

California drought data imported from https://www.drought.gov/states/california
California fire data found on https://www.fire.ca.gov/incidents

### USDM Drought Ranking

The USDM uses a five-category system to categorize and rank droughts. These include:
Abnormally Dry or D0, (a precursor to drought, not actually drought) Moderate (D1) Severe (D2) Extreme (D3) Exceptional (D4) Drought

Drought categories show experts’ assessments of conditions related to dryness and drought including observations of how much water is available in streams, lakes, and soils compared to usual for the same time of year. – From drought.gov

### California Wildfires
The CAL FIRE report provides the latest on current fires, weather conditions, and annual statistics for the state of California. With so much data available, we focused on fires that burned 1,000 acres or more.


### Datafiles and ETL
The original source csv files are mapdataall.csv and USDM-california.csv.Data was imported and cleaned in Pandas and Python, before building a PostgreSQL database.
The cleaned files are ca_drought.csv and ca_wildfire.csv. 


Drought clean up

- The ca_drought.csv file is averaged by month, so each month shows the average percent of California that was experiencing none, D0, D1, D2, D3, and D4 levels of drought for the month.
- We created a csv file which includes the average drought level percentages for each month.
- The ca_drought.csv has indexes from 100.

Wildfire clean up

- CSV imported from website, extraneous columns removed, filtered to include only wildfires burning 1000+ acres.
- The acres burned column contains the total (sum) of acres burned during that month. 
- The ca_wildfire.csv has been updated with an index column with indexes beginning at 1000. 


### Creating the PostgresSQL Database
Once files were cleaned, we created a postgresSQL schema for both tables using their IDs as the primary key. Schema image and SQL code were created using https://www.quickdatabasediagrams.com/

The ca_drought and ca_wildfire csv files were uploaded to PostregeSQL and the databased was linked to a remote server. 
Using render.com we created a remote server to host our PostgreSQL database and provide us with a web URL for our API calls. 


### Our data API website:  
https://california-fire-data-if1l.onrender.com

API geoJson data can be retrieve from the following links:
California fire data:  https://california-fire-data-if1l.onrender.com
California drought data: https://california-fire-data-if1l.onrender.com/api-drought

Using the links above the team was able to call the API to get the geoJson code to begin creating interactive charts and maps to illustrate how drought and wildfires have affected California over the years. 



### Interactive Dashboard


(insert text and images here)







---------------------------------------------------------------------------
Resources:

drought.gov

https://www.quickdatabasediagrams.com/

render.com

leaflet

Color gradient scales provided by: https://colordesigner.io/gradient-generator

MSU Data Analytics Bootcamp
