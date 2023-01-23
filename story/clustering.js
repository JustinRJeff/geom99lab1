// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3.5,
    center: { lat: 59.76401, lng: -110.03819 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 46.6374682433722, lng: -81.3691923153349 }, "Glencore - Craig Mine"],
    [{ lat: 46.6582162812214, lng: -80.7979719153345 }, "Glencore - Nickel Rim Mine"],
    [{ lat: 46.6768497417647, lng: -81.3391853153339 }, "Vale - Coleman Mine"],
    [{ lat: 46.4917257699956, lng: -81.0684585227373 }, "Vale - Copper Cliff North Mine"],
    [{ lat: 56.3385976459896, lng: -62.0951844631363 }, "Vale - Voisey's Bay Mine"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${title}`,
      label: `M`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

window.initMap = initMap;
