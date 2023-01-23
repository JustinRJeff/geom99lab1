// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 59.76401, lng: -110.03819 },
    mapTypeId: "hybrid",
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
    [{ lat: 46.4735136560283, lng: -81.1867617306821 }, "Vale - Creighton Mine"],
    [{ lat: 46.3821205002318, lng: -81.4527448018489 }, "Vale - Totten Mine"],
    [{ lat: 51.0762483894661, lng: -93.8085017734285 }, "Evolution - Cochenour Mine"],
    [{ lat: 62.8856500438307, lng: -139.337435762411 }, "Newmont - Coffee Gold Mine"], 
    [{ lat: 50.0199933612206, lng: -79.7144959166417 }, "Agnico Eagle - Detour Lake Mine"],
    [{ lat: 46.3945137084619, lng: -81.4321515877216 }, "SPC Nickel - AER Kidd Exploration Site"],
    [{ lat: 46.7578299098178, lng: -80.922449545939 }, "Glencore - Norman Exploration Site"],
    [{ lat: 46.6513894290551, lng: -81.3231748766968 }, "Glencore - Moose Lake Exploration Site"],
    [{ lat: 46.6336823486413, lng: -81.3956279806437 }, "Glencore - Hardy Exploration Site"],
    [{ lat: 46.5125919009645, lng: -81.5307897972572 }, "Vale - Ministic Exploration Site"],
    [{ lat: 46.4150094269616, lng: -81.3627935203308 }, "Vale - Victoria Exploration Site"],
    [{ lat: 46.5962617927362, lng: -80.7647000719165 }, "Vale - Cryderman Exploration Site"],
    [{ lat: 46.443092699827, lng: -81.0650812187725 }, "Vale - Kelly Lake Exploration Site"],
    [{ lat: 46.7192258247701, lng: -80.8688974700891 }, "Vale - Ella Lake Exploration Site"],
    [{ lat: 46.7619723227006, lng: -80.9044106173248 }, "Vale - Norman Exploration Site"]
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
