//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
	
$(function() {
    $( ".datetimepicker" ).datetimepicker({dateFormat: "yy-mm-dd"})
 });


$(document).ready(function(){
	
		$('.locationInput').change(function(){
			var locationString = $(this).val();
			alert(locationString);
		});
	
		initializeMap();
		codeLatLng();
})


var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var marker;



function initializeMap() {
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(42.358, -71.060);
	var mapOptions = {
		center: latlng,
		zoom: 12,
		zomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.DEFAULT
		},
		
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
	codeLatLng() 
}


function codeLatLng() {
var input = document.getElementById("latlng").value;
var latlngStr = input.split(",",2);
var lat = parseFloat(latlngStr[0]);
var lng = parseFloat(latlngStr[1]);
var latlng = new google.maps.LatLng(lat, lng);

geocoder.geocode({'latLng': latlng}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
	if (results[1]) {
	  map.setZoom(11);
	  marker = new google.maps.Marker({
		  position: latlng,
		  map: map
	  });
	  infowindow.setContent(results[1].formatted_address);
	  infowindow.open(map, marker);
	}
  } else {
	alert("Geocoder failed due to: " + status);
  }
}) ;
}

