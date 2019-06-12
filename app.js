var AT_KEY = "key79FgyuzhHzS1cp";
var AT_BASE = "appZQF8aAcONYptkt";
var AT_TABLE_NAME = "Table%201";





  var client = mqtt.connect('mqtt://ecal-diplome:18099344aa075d12@broker.shiftr.io', {
      clientId: 'javascript'
    });

    client.on('connect', function(){
      console.log('client has connected!');
    });

    client.on('message', function(topic, message) {
      console.log('new message:', topic, message.toString());
    //  document.getElementById("message").innerHTML = '<span>lux: ' + + message.toString() + '</span><br/>';
    document.getElementById("message").innerHTML =  message.toString() ;

});



  // document.getElementsByName("Thing")[0].addEventListener('change', doThing);

//array pour le mail
lel = [];

    client.subscribe('/esp2web');

var int00;




//   /* function */
// function doThing(){
//    console.log('value: ' + this.value);
//    lel.push(this.value);
//    int00 = setInterval(function() { repeatingfunction0(); }, 1000);
// }


  function repeatingfunction0() {
  client.publish('/web2esp', lel[lel.length-1]);
}




var map, heatmap, contentString;
var icon2 = {

  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

};


async function initMap() {
  var peseux = {lat: 46.989402, lng:  6.888697};




  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    center: peseux,
            styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ]

  });

 // navigator.geolocation.getCurrentPosition(function(position) {
 //     var initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
 //     map.setCenter(initialLocation);
 //     var userMarker = new google.maps.Marker({
 //     position: initialLocation,
 //     map: map,
 //     icon: icon2
 //     });
 //       }, function() {
          //handle no geolocation
 //       });






    // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
      map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
      });

      var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              //ici
              scaledSize: new google.maps.Size(0, 0),

            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });




  var data = await getHeatmapData();
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: data,
    map: map

  });

  var gradient = [
     'rgba(0, 255, 255, 0)',
     'rgba(0, 255, 255, 1)',
     'rgba(0, 191, 255, 1)',
     'rgba(0, 127, 255, 1)',
     'rgba(0, 63, 255, 1)',
     'rgba(0, 0, 255, 1)',
     'rgba(0, 0, 223, 1)',
     'rgba(0, 0, 191, 1)',
     'rgba(0, 0, 159, 1)',
     'rgba(0, 0, 127, 1)',
     'rgba(63, 0, 91, 1)',
     'rgba(127, 0, 63, 1)',
     'rgba(191, 0, 31, 1)',
     'rgba(255, 0, 0, 1)'
   ]

  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
  // heatmap.set('radius', heatmap.get('radius') ? null : 20);
//  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.1);

  heatmap.setMap(map);
}





async function getHeatmapData() {
  var infoWindow = new google.maps.InfoWindow();
  var heatmapData = [];
  // sort with _createdTime ??
  var airtable_read_endpoint =
    "https://api.airtable.com/v0/" +
    AT_BASE +
    "/" +
    AT_TABLE_NAME +
    "?&api_key=" +
    AT_KEY +
    "&sortField=_createdTime&sortDirection=desc";

  console.log("Getting data...");

  // function changeGradient() {
  //    var gradient = [
  //      'rgba(0, 255, 255, 0)',
  //
  //    ]
  //    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
  //  }





  await axios.get(airtable_read_endpoint).then(function(result) {
    console.log("Got data (showing last record): ", result.data.records[result.data.records.length-1 ]);


    result.data.records.forEach(function(element, index) {
      //console.log(element);
      var coordinates = element.fields.Coordinates.split(",");
      var weight;
      var risque;
      if(element.fields.lux) {
          weight = parseFloat(element.fields.lux);
      }
      else {
        weight = 0;
      }

      if(weight < 1) {
          risque = "nulle"
      }

      if(weight>= 1 && weight< 5) {
          risque = "légère"
      }

      if(weight>= 5 && weight< 15) {
          risque = "moyenne"
      }

      if(weight>= 15 && weight< 50) {
          risque = "élevée"
      }

      if(weight>= 50 ) {
          risque = "très élevée"
      }


      var dataObject = {
        location: new google.maps.LatLng(parseFloat(coordinates[0]), parseFloat(coordinates[1])),
        weight: weight
      }


      var marker = new google.maps.Marker({
  position: new google.maps.LatLng(parseFloat(coordinates[0]), parseFloat(coordinates[1])),
  icon: {
    path: google.maps.SymbolPath.CIRCLE,
    fillOpacity: 0,
    strokeWeight: 0,
    scale: Math.pow(weight, 0.4)+2 //pixels
  }
});





google.maps.event.addListener(marker, 'click', function(e) {
  var location = e.latLng;

  infoWindow.close(map);

  //Set Content of InfoWindow.
  infoWindow.setContent('Latitude: ' + location.lat() + '<br />Longitude: ' + location.lng());
  infoWindow.setContent('<p>lux level: '+weight + '<p>perturbation: '+risque);

  //Set Position of InfoWindow.
  infoWindow.setPosition(location);

  //Open InfoWindow.
  infoWindow.open(map);
          });

    marker.setMap(map);



      heatmapData.push(dataObject);





    });



    //Attach click event handler to the map.





  });



  return heatmapData;
}
