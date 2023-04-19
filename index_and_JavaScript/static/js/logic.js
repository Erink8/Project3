// Create a map object.
var myMap = L.map("map", {
  center: [37.33, -119.85], //center on San Jose
  zoom: 6
});
// Add a tile layer.
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
      });
// Looping through the fireData 
for (var i = 0; i < fireData.length; i++) {
  var fire = fire[i];
  var marker = L.marker([d.latitude, d.longitude]).addTo(myMap);
  marker.bindPopup(`<h1>${fire.incident_name}</h1> <hr> <h3>Population ${fire.acres_burned.toLocaleString()}</h3>`)
}});
