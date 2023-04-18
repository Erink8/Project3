//function createMap(wildfires) {

    // Create the tile layer that will be the background of our map.
  //  var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //  });
  
  
    // Create a baseMaps object to hold the streetmap layer.
 //   var baseMaps = {
 //     "Street Map": streetmap
 //   };
  
    // Create an overlayMaps object to hold the bikeStations layer.
  //  var overlayMaps = {
 //     "Wildfires": wildfires
 //   };
  
    // Create the map object with options.
  //  var map = L.map("map-id", {
  //    center: [37.33, -119.85],
  //    zoom: 6,
 //     layers: [streetmap, wildfires]
  //  });
  
    // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
 //   L.control.layers(baseMaps, overlayMaps, {
//      collapsed: false
 //   }).addTo(map);
//  };
  

d3.json("https://california-fire-data.onrender.com/api").then(function(data){
  console.log(data);
});
