function createMap(wildFires) {

  // Create the tile layer that will be the background of our map.
  var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

 // Create a baseMaps object to hold the streetmap layer.
 var baseMaps = {
  "Street Map": streetmap
};

// Create an overlayMaps object to hold the bikeStations layer.
var overlayMaps = {
  "Wild Fires": wildFires
};

// Create the map object with options.
var map = L.map("map-id", {
  center: [37.33, -119.85], //center on San Jose
  zoom: 6,
  layers: [streetmap, wildFires]
});

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}
function createMarkers(response) {

  // Pull the "incident_name" property from response.Features.
  var incidents = response.Features.incident_name;

  // Initialize an array to hold fire markers.
  var FireMarkers = [];

  // Loop through the fire array.
  for (var index = 0; index < Features.length; index++) {
    var incident = Features[index];

    // For each incident, create a marker, and bind a popup with the incident's name.
    var fireMarker = L.marker([incident.latitude, incident.longitude])
      .bindPopup("<h3>" + incident.incident_name + "<h3><h3>Capacity: " + incident.acres_burned + "</h3>");

    // Add the marker to the bikeMarkers array.
    fireMarkers.push(fireMarker);
  }

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  createMap(L.layerGroup(fireMarkers));
}

// Perform an API call to the wild fire data to get the fire information. Call createMarkers when it completes.
d3.json("https://california-fire-data-if1l.onrender.com/api").then(createMarkers);
