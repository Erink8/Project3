function createMap(wildFires) {

  // Create the tile layer that will be the background of our map.
  var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  let mbAttr = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    let mbUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    let satellite = L.tileLayer(mbUrl, {id: 'mapbox.streets', attribution: mbAttr});

 // Create a baseMaps object to hold the streetmap layer.
 var baseMaps = {
  "Street Map": streetmap,
  "Satellite View": satellite
};

// Create an overlayMaps object to hold the wildFires layer.
var overlayMaps = {
  "Wild Fires": wildFires
};

// Create the map object with options.
var map = L.map("map", {
  center: [37.33, -119.85], //center on San Jose
  zoom: 6,
  layers: [streetmap, wildFires]
});

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}

function createMarkers(data) {

  // Pull the "incident_name" property from response.Features.
  var incidents = data.result[0].incident_name
  console.log(incidents)
  var Features = data.result
  // Initialize an array to hold fire markers.
  var FireMarker = [];

  // Loop through the fire array.
  for (var i = 0; i < Features.length; i++) {
    var incident = Features[i];

    var color = "";
    if (Features[i].acres_burned> 100000) {
      color = "#94090D";
    }
    else if (Features[i].acres_burned > 50000) {
      color = "#B23B07";
    }
    else if (Features[i].acres_burned > 25000) {
      color = "#CD6200";
    }
    else if (Features[i].acres_burned > 10000) {
      color = "#E38900";
    }
    else if (Features[i].acres_burned> 5000) {
      color = "#F4B200";
    }
    else {
      color = "#FFDC00";
    }

    // For each incident, create a marker, and bind a popup with the incident's name.
    var FireMarkers = L.circle([incident.latitude, incident.longitude],{
      fillOpacity: 0.75,
      color: color,
      fillColor: color,
      // Adjust the radius.
      radius: Math.sqrt(Features[i].acres_burned) * 75
    })
      .bindPopup("<h3>" + incident.incident_name + "<h3><h3>acres: " + incident.acres_burned + "</h3>");

    // Add the marker to the bikeMarkers array.
    FireMarker.push(FireMarkers);
  }

  // Create a layer group that's made from the fire markers array, and pass it to the createMap function.
  createMap(L.layerGroup(FireMarker));
}

// Perform an API call to the wild fire data to get the fire information. Call createMarkers when it completes.
d3.json("https://california-wildfires-api-r6o6.onrender.com/api").then(createMarkers);


