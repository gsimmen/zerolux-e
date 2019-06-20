var AT_KEY = "key79FgyuzhHzS1cp";
var AT_BASE = "appZQF8aAcONYptkt";
var AT_TABLE_NAME = "Table%201";









// document.getElementsByName("Thing")[0].addEventListener('change', doThing);











var map, heatmap, contentString;
var icon2 = {

  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

};



async function initMap() {
  var urlParams = new URLSearchParams(window.location.search);
  var lng = parseFloat(urlParams.get('lng')) || 6.888697;

  var lat = parseFloat(urlParams.get('lat')) || 46.989402;
  var peseux = {
    lat: lat,
    lng: lng

  };

console.log("lat "+lat);
console.log("long"+lng);

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    center: peseux,
    styles: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#212121"
        }]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#212121"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#181818"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1b1b1b"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#2c2c2c"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8a8a8a"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#373737"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3c3c3c"
        }]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
          "color": "#4e4e4e"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3d3d3d"
        }]
      }
    ]

  });
jQuery(document).ready(function($) {
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
  var icon1 = {
  url: "source/plan001g.png",
  scaledSize: new google.maps.Size(27, 42)
}


// var markerbox = new google.maps.Marker({
//    position: { lat: 46.989402,lng: 6.888697},
//    map: map,
//    title: "marker" ,
//    icon: icon1
//  });

// Multiple Markers
   var markers = [
       ['Chemin des Pavés, 2034 Peseux', 46.989402, 6.888697],
       ['Chemin Gabriel, 2034 Peseux', 46.990102, 6.889697]
   ];


// Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;


    // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);

        var placeName = markers[i][0] ;
        //bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: icon1,
            //title: markers[i][0],
            title: 'place-' + ( i + 1 )+"|"+placeName,
            fontSize: "1.5eme"
        });
        google.maps.event.addListener(
                    marker,
                    "click",
                     function (i) {
                       // for(i = 1 ; i < 99 ; i++) {
                       //   var imgUrl = "'places/place-" + i + ".jpg'" ;
                       //  //$("[title='place-" + i + "']").on('click', function(e){
                       //    var clicked = $("[title='place-" + i + "']") ;
                       //    var depth = $(clicked).index() ;
                       //    var imgUrl = "'places/place-" + depth + ".jpg'" ;
                       //   $('.photoframe').css('background-image' , 'url(' + imgUrl + ')' );
                       //   // $('.photoframe').append(depth);
                       // //});
                       // }
                       var attr = $(this).attr('title')
                       var getTitle = attr.split("|")[0];
                       var getName = attr.split("|")[1];
                       //alert(getTitle);
                       var imgUrl = "'places/" + getTitle + ".jpg'" ;
                       $('#photoframe > div').append('<img src=' + imgUrl + '><div class ="photo-caption">' + getName + '</div>' );
                       $('#photoframe').css({'z-index':'999', 'fontFamily':'GalanoGrotesque-Medium','fontSize': '1.5em'});
                       $('#photoframe , #photoframe img').animate({'opacity':'1'},400);
                   }
                );
}
});

        // Allow each marker to have an info window
        // google.maps.event.addListener(marker, 'click', (function(marker, i) {
        //     return function() {
        //         infoWindow.setContent(infoWindowContent[i][0]);
        //         infoWindow.open(map, marker);
        //     }
        // })(marker, i));

        // Automatically center the map fitting all markers on the screen
        // map.fitBounds(bounds);
    // }


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
  'rgba(255, 255, 230, 0)',
  'rgba(255, 255, 230, 1)',

  'rgba(250, 250, 150, 1)',
  //'rgba(255, 210, 210, 1)',

  'rgba(255, 165, 0, 1)',
  'rgba(255,60, 0, 1)',

]



  heatmap.set('gradient', gradient);
  //heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
  // heatmap.set('gradient', gradient);

  heatmap.set('radius', heatmap.get('radius') ? null : 60);
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
    console.log("Got data (showing last record): ", result.data.records[result.data.records.length - 1]);


    result.data.records.forEach(function(element, index) {
      //console.log(element);
      var coordinates = element.fields.Coordinates.split(",");
      var weight;
      var risque;
      if (element.fields.lux) {
        weight = parseFloat(element.fields.lux);
      } else {
        weight = 0;
      }
      if (weight>= 0){
          weightVal = weight/0.25;
          risque = weightVal;
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
          scale: Math.pow(weight, 0.4) + 2 //pixels
        }
      });





      google.maps.event.addListener(marker, 'click', function(e) {
        var location = e.latLng;

        infoWindow.close(map);

        //Set Content of InfoWindow.
        infoWindow.setContent('Latitude: ' + location.lat() + '<br />Longitude: ' + location.lng());
        infoWindow.setContent('<p>lux level: ' + weight + '<p>threshold exceeding: ' + risque);

        //Set Position of InfoWindow.
        infoWindow.setPosition(location);

        //Open InfoWindow.
        infoWindow.open(map);

        //document.getElementById("mapInfo").innerHTML = "Latitude: " + location.lat() + '<br />Longitude: ' + location.lng()+'<p>lux level: ' + weight + '<p>perturbation: ' + risque;
      });

      google.maps.event.addListener(infoWindow, 'domready', function() {
          var l = $('#hook').parent().parent().parent().siblings();
          for (var i = 0; i < l.length; i++) {
              if($(l[i]).css('z-index') == 'auto') {
                  $(l[i]).css('border-radius', '0px');
                  $(l[i]).css('border', '2px solid black');
              }
          }
      });

      marker.setMap(map);



      heatmapData.push(dataObject);





    });



    //Attach click event handler to the map.





  });



  return heatmapData;
}
