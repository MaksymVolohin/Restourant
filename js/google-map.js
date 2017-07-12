google.maps.event.addDomListener(window, 'load', init);
var map;

function init() {
    var mapOptions = {
        center: new google.maps.LatLng(49.846128, 24.030067)
        , zoom: 15
        , zoomControl: true
        , zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        , }
        , disableDoubleClickZoom: true
        , mapTypeControl: true
        , mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
        , }
        , scaleControl: true
        , scrollwheel: true
        , panControl: true
        , streetViewControl: true
        , draggable: true
        , overviewMapControl: true
        , overviewMapControlOptions: {
            opened: false
        , }
        , mapTypeId: google.maps.MapTypeId.HYBRID
        , styles: [
            {
                "featureType": "water"
                , "stylers": [
                    {
                        "visibility": "on"
            }
                    , {
                        "color": "#b5cbe4"
            }
        ]
    }
            , {
                "featureType": "landscape"
                , "stylers": [
                    {
                        "color": "#efefef"
            }
        ]
    }
            , {
                "featureType": "road.highway"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "color": "#83a5b0"
            }
        ]
    }
            , {
                "featureType": "road.arterial"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "color": "#bdcdd3"
            }
        ]
    }
            , {
                "featureType": "road.local"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "color": "#ffffff"
            }
        ]
    }
            , {
                "featureType": "poi.park"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "color": "#e3eed3"
            }
        ]
    }
            , {
                "featureType": "administrative"
                , "stylers": [
                    {
                        "visibility": "on"
            }
                    , {
                        "lightness": 33
            }
        ]
    }
            , {
                "featureType": "road"
    }
            , {
                "featureType": "poi.park"
                , "elementType": "labels"
                , "stylers": [
                    {
                        "visibility": "on"
            }
                    , {
                        "lightness": 20
            }
        ]
    }
            , {}
            , {
                "featureType": "road"
                , "stylers": [
                    {
                        "lightness": 20
            }
        ]
    }
]
    , }
    var mapElement = document.getElementById('myMap');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
['Львів', 'undefined', 'undefined', 'undefined', 'undefined', 49.839683, 24.029717000000005, 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png']
        ];
    for (i = 0; i < locations.length; i++) {
        if (locations[i][1] == 'undefined') {
            description = '';
        }
        else {
            description = locations[i][1];
        }
        if (locations[i][2] == 'undefined') {
            telephone = '';
        }
        else {
            telephone = locations[i][2];
        }
        if (locations[i][3] == 'undefined') {
            email = '';
        }
        else {
            email = locations[i][3];
        }
        if (locations[i][4] == 'undefined') {
            web = '';
        }
        else {
            web = locations[i][4];
        }
        if (locations[i][7] == 'undefined') {
            markericon = '';
        }
        else {
            markericon = locations[i][7];
        }
        marker = new google.maps.Marker({
            icon: markericon
            , position: new google.maps.LatLng(locations[i][5], locations[i][6])
            , map: map
            , title: locations[i][0]
            , desc: description
            , tel: telephone
            , email: email
            , web: web
        });
        link = '';
    }
}