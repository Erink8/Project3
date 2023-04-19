// Store a URL/ call api
var URL = "https://california-wildfires-api-r6o6.onrender.com/api"

// Fetch the JSON data and console log it
d3.json(URL).then(
  function(data) {
    console.log(data);
  });




function createMap(wildfires) {

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
      "Wildfires": wildfires
    };
  
    // Create the map object with options.
    var map = L.map("map-id", {
      center: [37.33, -119.85],
      zoom: 6,
      layers: [streetmap, wildfires]
    });
  
    // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  };




//var darkestRedFlame = L.icon({
  //iconUrl: 'darkestRedFlame.png',
  //shadowUrl: 'leaf-shadow.png',

  //iconSize:     [38, 95], // size of the icon
  //shadowSize:   [50, 64], // size of the shadow
  //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  //shadowAnchor: [4, 62],  // the same for the shadow
  //popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
//});

//var orangeFlame = new LeafIcon({iconUrl: 'orangeFlame.png'}),
  //  lightOrangeFlame = new LeafIcon({iconUrl: 'lightOrangeFlame.png'}),
    //goldenOrangeFlame = new LeafIcon({iconUrl: 'goldenOrangeFlame.png'}),
    //goldenFlame = new LeafIcon({iconUrl: 'goldenFlame.png'}),
    //yellowFlame = new LeafIcon({iconUrl: 'yellowFlame.png'});
