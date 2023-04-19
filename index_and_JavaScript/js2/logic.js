//create base level map
var myMap = L.map("map", {
  center: [37.33, -119.85],
  zoom: 6,
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Fetch the JSON data and console log it
d3.json("https://california-wildfires-api-r6o6.onrender.com/api", function (error, data) {
    if (error) return console.error(error);

  var fireData = [];
  data.forEach(function (d) {
      fireData.push({
          ID: d["ID"],
          acres_burned: d["Acres Burned"],
          days_duration: d["Days Duration"],
          incident_name: d["Incident Name"],
          latitude: d["Latitude"],
          location: d["Location"],
          longitude: d["Longitude"],
          month_year: d["Date: Month, Year"],
          start_date: d["Start Date"]
      });
    })} );