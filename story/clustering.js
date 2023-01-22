function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 59.76401, lng: -110.03819 },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "MMMMMMMMMMEEEEEEEEEE";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [ 
{ lat: 46.6374682433722, lng: -81.3691923153349},
{ lat: 46.6582162812214, lng: -80.7979719153345},
{ lat: 46.6768497417647, lng: -81.3391853153339},
{ lat: 46.4917257699956, lng: -81.0684585227373},
{ lat: 56.3385976459896, lng: -62.0951844631363},
{ lat: 46.4735136560283, lng: -81.1867617306821},
{ lat: 46.3821205002318, lng: -81.4527448018489},
{ lat: 51.0762483894661, lng: -93.8085017734285},
{ lat: 62.8856500438307, lng: -139.337435762411},
{ lat: 50.0199933612206, lng: -79.7144959166417},
{ lat: 46.3945137084619, lng: -81.4321515877216},
{ lat: 46.7578299098178, lng: -80.922449545939},
{ lat: 46.6513894290551, lng: -81.3231748766968},
{ lat: 46.6336823486413, lng: -81.3956279806437},
{ lat: 46.5125919009645, lng: -81.5307897972572},
{ lat: 46.4150094269616, lng: -81.3627935203308},
{ lat: 46.5962617927362, lng: -80.7647000719165},
{ lat: 46.443092699827, lng: -81.0650812187725},
{ lat: 46.7192258247701, lng: -80.8688974700891},
{ lat: 46.7619723227006, lng: -80.9044106173248}
];
