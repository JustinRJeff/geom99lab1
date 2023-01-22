// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 59.76401, lng: -110.03819 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 46.6374682433722, lng: -81.3691923153349}, "Craig Mine"],
    [{ lat: 46.6582162812214, lng: -80.7979719153345}, "Nickel Rim Mine"],
    [{ lat: 46.6768497417647, lng: -81.3391853153339}, "Coleman Mine"],
    [{ lat: 46.4917257699956, lng: -81.0684585227373}, "Copper Cliff North Mine"],
    [{ lat: 56.3385976459896, lng: -62.0951844631363}, "Voisey's Bay Mine"],
    [{ lat: 46.4735136560283, lng: -81.1867617306821}, "Creighton Mine"],
    [{ lat: 46.3821205002318, lng: -81.4527448018489}, "Totten Mine"],
    [{ lat: 51.0762483894661, lng: -93.8085017734285}, "Cochenour Mine"],
    [{ lat: 62.8856500438307, lng: -139.337435762411}, "Coffee Gold Mine"],
    [{ lat: 50.0199933612206, lng: -79.7144959166417}, "Detour Lake Mine"],
    [{ lat: 46.3945137084619, lng: -81.4321515877216}, "AER Kidd Exploration Site"],
    [{ lat: 46.7578299098178, lng: -80.922449545939}, "Glencore Norman Exploration Site"],
    [{ lat: 46.6513894290551, lng: -81.3231748766968}, "Moose Lake Exploration Site"],
    [{ lat: 46.6336823486413, lng: -81.3956279806437}, "Hardy Exploration Site"],
    [{ lat: 46.5125919009645, lng: -81.5307897972572}, "Ministic Exploration Site"],
    [{ lat: 46.4150094269616, lng: -81.3627935203308}, "Victoria Exploration Site"],
    [{ lat: 46.5962617927362, lng: -80.7647000719165}, "Cryderman Exploration Site"],
    [{ lat: 46.443092699827, lng: -81.0650812187725}, "Kelly Lake Exploration Site"],
    [{ lat: 46.7192258247701, lng: -80.8688974700891}, "Ella Lake Exploration Site"],
    [{ lat: 46.7619723227006, lng: -80.9044106173248}, "Norman Exploration Site"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
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

