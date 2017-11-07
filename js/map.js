// initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте. Широта: 50.392149, Долгота: 30.624511
    var centerLatLng = new google.maps.LatLng(50.392149, 30.624511);
 
    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 15,               // Зум по умолчанию. Возможные значения от 0 до 21
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.SMALL
        },
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    map.scrollwheel=true;
  map.setOptions({ mapTypeControl:true});
 
 /*Один маркер*/ 
 /*var marker = new google.maps.Marker({
	position: {lat: 46.967046, lng: 32.000093},
	map: map,
	title: 'Legalizuem.ru',
    /*Для svg*/
    /*icon: {
		url: "images/markers/svg/Arrow_3.svg",
		scaledSize: new google.maps.Size(64, 64)
    }*/
    /*icon: {
      url: window.devicePixelRatio > 1 ? "img/marker96.png" : "img/marker48.png",
      scaledSize: new google.maps.Size(48, 48)
    }
});*/

  var locations = [
	{
		title: 'NobelDent',
		position: {lat: 50.388958, lng: 30.625908},
		icon: {
			url: "img/marker.png",
			scaledSize: new google.maps.Size(48, 48)
		}
	}					
];
locations.forEach( function( element ) {
	var marker = new google.maps.Marker({
			position: element.position,
			map: map,
			title: element.title,
			icon: element.icon,
		});
	});	
}

 
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);





function initMap2() {
	var myLatLng = {lat: 50.389051, lng: 30.625808};


	






  var route = new google.maps.Map(document.getElementById('route'), {
    zoom: 15,
    center: {lat: 50.392149, lng: 30.624511},
		mapTypeId: 'terrain',
		travelMode: google.maps.DirectionsTravelMode.WALKING,
		origin: new google.maps.LatLng(50.395391,30.616117), //точка старта
		destination: new google.maps.LatLng(50.388931,30.625904), //точка финиша
		navigationControlOptions: {
			style: google.maps.NavigationControlStyle.SMALL
		},
		 mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var locations = [
		{
			title: 'NobelDent',
			position: {lat: 50.388958, lng: 30.625908},
			icon: {
				url: "img/marker.png",
				scaledSize: new google.maps.Size(48, 48)
			}
		}					
	];
	locations.forEach( function( element ) {
		var marker = new google.maps.Marker({
				position: element.position,
				map: route,
				title: element.title,
				icon: element.icon,
			});
		});	
  var flightPlanCoordinates = [
		{lat: 50.395391, lng: 30.616117},
		{lat: 50.394458, lng: 30.616432},
		{lat: 50.393203, lng: 30.616697},
		{lat: 50.393245, lng: 30.617055},
		{lat: 50.393108, lng: 30.617868},
		{lat: 50.392965, lng: 30.618007},
		{lat: 50.392800, lng: 30.618337},
		{lat: 50.392738, lng: 30.618762},
		{lat: 50.392919, lng: 30.621079},
		{lat: 50.392835, lng: 30.621248},
		{lat: 50.392105, lng: 30.622034},
		{lat: 50.392299, lng: 30.622659},
		{lat: 50.392273, lng: 30.622785},
		{lat: 50.391804, lng: 30.623190},
		{lat: 50.391551, lng: 30.623308},
		{lat: 50.391168, lng: 30.623413},
		{lat: 50.391170, lng: 30.623550},	
		{lat: 50.390353, lng: 30.623848},
		{lat: 50.390271, lng: 30.623805},
		{lat: 50.388579, lng: 30.624264},
    {lat: 50.388718, lng: 30.625374},
    {lat: 50.388945, lng: 30.625285},
    {lat: 50.389051,  lng: 30.625808}
  ];
    var flightPath = new google.maps.Polyline({
			path: flightPlanCoordinates,
			geodesic: true,
			strokeColor: '#515151',
			strokeOpacity: 1.0,
			strokeWeight: 4
		});
		flightPath.setMap(route);
	
	

	


	}
google.maps.event.addDomListener(window, "load", initMap2);



/*2й способ фрейм*/
$(document).ready(function(){
	$('.overlay').click(function() {
		$(this).remove();
	});
});