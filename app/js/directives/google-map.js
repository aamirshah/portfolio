
/*================================================================
=>                  Directive = googleMap
==================================================================*/
/*global app, google, window, $, inherit, Tooltip */

app.directive('googleMap', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

    'use strict';

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var bangalore = { lat: 12.9, lang: 77.5 };

            var markerImage = 'images/marker.png';
            
            var mapCanvas = element[0];
            var mapOptions = {
                disableDefaultUI: true,
                center: new google.maps.LatLng(bangalore.lat, bangalore.lang),
                zoom: 3, // max 22
                maxZoom: 20,
                minZoom: 2,
                zoomControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, or TERRAIN.
            };

            var map = new google.maps.Map(mapCanvas, mapOptions);
            

			var styles = [
				{
					'featureType': 'water',
					'elementType': 'geometry.fill',
					'stylers': [
						{ 'visibility': 'on' },
						{ 'color': '#4c66a4' }
					]
				},
                {
					featureType: 'landscape',
					elementType: 'all',
					stylers: [
						{ hue: '#f3f3f3' },
						{ saturation: -100 },
						{ lightness: 57 },
						{ visibility: 'simplified' }
					]
				},
                {
					featureType: 'water',
					elementType: 'labels',
					stylers: [
						{ hue: '#ffffff' },
						{ saturation: -100 },
						{ lightness: 100 },
						{ visibility: 'on' }
					]
				}
			];
           
            map.set('styles', styles);


           
            var plotPin = function (location) {

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(location.lat, location.lang),
                    map: map,
                    icon: markerImage,
                    title: 'Bangalore | Current Location' // we won't be using API tool tip because the app is mostly touch-based - no tool tips and hovers
                });
            };

           
            $timeout(function () {
                plotPin(bangalore);
            });


            /*=================================================================
            =            On Window resize, make the map responsive            =
            =================================================================*/

            var repositionMap = function () {

                var center = map.getCenter();
                google.maps.event.trigger(map, 'resize');
                map.setCenter(center);
            };
            
            
            $(window).on('resize', repositionMap);

            

            scope.$on('$destroy', function () { // this should be implemented using some other interface
                $(window).off('resize', repositionMap);
            });
        }
    };
}]);


/*-----  End of Directive = googleMap  ------*/