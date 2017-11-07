// initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
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
		title: 'NobelDant',
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



