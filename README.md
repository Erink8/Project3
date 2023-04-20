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

![schema](https://github.com/Erink8/Project3/blob/sheila_branch/PostSQL/schema%20Final%20.png)

The ca_drought and ca_wildfire csv files were uploaded to PostregeSQL and the databased was linked to a remote server. 
Using render.com we created a remote server to host our PostgreSQL database and provide us with a web URL for our API calls. 


### Our data API website:  
https://california-fire-data-if1l.onrender.com

API geoJson data can be retrieve from the following links:
California fire data:  https://california-fire-data-if1l.onrender.com/api
California drought data: https://california-fire-data-if1l.onrender.com/api-drought

Using the links above the team was able to call the API to get the geoJson code to begin creating interactive charts and maps to illustrate how drought and wildfires have affected California over the years. 



### Interactive Dashboard
GitHub Pages: https://erink8.github.io/Project3/

We formatted our dashboard to hold our 4 visualizations - Drought Levels, Acres Burned per Month by Year, Top Count of Wildfires by County (Top 15), and and interactive map featuring a satellite layer displaying acres burned.

Drought Levels
<img width="1171" alt="Screenshot 2023-04-20 at 2 04 38 PM" src="https://user-images.githubusercontent.com/119360371/233463313-e3aa6ebe-62c8-43c3-9d02-601b38369d66.png">

Acres Burned per Month by Year
<img width="1177" alt="Screenshot 2023-04-20 at 2 04 50 PM" src="https://user-images.githubusercontent.com/119360371/233463429-344fe051-f9c7-4eb3-ab51-3bf1a9f3fe14.png">

Top Count of Wildfires by County (Top 15)
<img width="1268" alt="Screenshot 2023-04-20 at 2 05 04 PM" src="https://user-images.githubusercontent.com/119360371/233463530-9a619947-1b4d-4f79-8789-2db1581f4507.png">

Interactive Map - acres burned
<img width="601" alt="Screenshot 2023-04-20 at 11 42 03 AM" src="https://user-images.githubusercontent.com/119360371/233463620-3e6c8766-e1b9-4546-a972-ac8c402d7836.png">

<img width="616" alt="Screenshot 2023-04-20 at 11 42 13 AM" src="https://user-images.githubusercontent.com/119360371/233463656-328b0b9f-9b73-4c3b-b44c-0e121136f30e.png">


---------------------------------------------------------------------------
Resources:

drought.gov

https://www.quickdatabasediagrams.com/

render.com

leaflet

Color gradient scales provided by: https://colordesigner.io/gradient-generator

MSU Data Analytics Bootcamp
