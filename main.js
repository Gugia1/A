function initMap() {

    const markers = [

    {
        locationName: 'East Side Gallery',
        lat: 52.5062171882658, 
        lng: 13.440524593302325,
        address: 'Mühlenstraße 3-100,<br> 10243 Berlin,<br> Germany'

    },
    {
        locationName: 'Kiestagebau Kleinliebenau',
        lat: 51.36634636484358, 
        lng: 12.194323542937882,
        address: '958V+7M Schkeuditz,<br> Germany'

    },
    {
        locationName: 'East Side Gallery',
        lat: 52.5062171882658, 
        lng: 13.440524593302325,
        address: 'Mühlenstraße 3-100,<br> 10243 Berlin,<br> Germany'

    } 
    ];
const fehMarker = 'pin9.png'

const centerMap = { lat: 51.1657, lng: 10.4515 };


const germanyBounds = {
    north: 55.056, // North latitude
    south: 47.270, // South latitude
    west: 5.866,   // West longitude
    east: 15.042   // East longitude
};

    const mapOptions = {
        center: centerMap,
        zoom: 8, // Adjust the initial zoom level as needed
        minZoom: 6,
        maxZoom: 10,
        disableDefaultUI: true,
        zoomControl: false,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ],
        restriction: {
            latLngBounds: germanyBounds,
            strictBounds: false
        }
    }




    const map = new google.maps.Map(document.getElementById("google-map"), mapOptions) ;

    const infoWindow = new google.maps.InfoWindow({
        minwidth: 300,
        maxwidth: 300
        
    })

    const bounds = new google.maps.LatLngBounds();

    for (let i = 0; i < markers.length; i++) {


        const marker = new google.maps.Marker({
        position: {lat: markers[i] ['lat'], lng: markers [i] ['lng']},
        map: map,
        icon: fehMarker,
        
    });

     function createInfoWindows(){
        const infoWindowContent = `<div class="feh-content">

        <h3>${markers [i] ['locationName']}</h3>
        <address>
        <p>${markers [i] ['address']}</p>
        </address>
        </div>`;

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(map, marker)
        });

        
     }

     createInfoWindows()

     infoWindow.addListener('closerclick', function(){

        map.fitBounds(bounds);
     });

     bounds.extend(new google.maps.LatLng(markers [i] ['lat'], markers [i] ['lng']) );
        map.fitBounds(germanyBounds);
    }
    
}