# Project3

More info for the csv files. We can delete this later.

### USDM Drought Ranking

The USDM uses a five-category system, labeled..
Abnormally Dry or D0, (a precursor to drought, not actually drought)
Moderate (D1)
Severe (D2)
Extreme (D3)
Exceptional (D4) Drought

Drought categories show experts’ assessments of conditions related to dryness and drought including observations of how much water is available in streams, lakes, and soils compared to usual for the same time of year. From drought.gov

The orignial source csv files are mapdataall.csv and USDM-california.csv.

The cleaned files are ca_drought.csv and ca_wildfire.csv. The ca_wildfire.csv has been updated with an index column with indexes beginning at 1000. The ca_drought.csv has indexes from 100.

The ca_drought.csv file is averaged by month, so each month shows the average percent of California that was experiencing none, D0, D1, D2, D3, and D4 levels of drought for the month. The acres burned column contains the total (sum) of acres burned during that month.
