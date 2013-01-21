//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
	
$(function() {
    $( ".datetimepicker" ).datetimepicker({dateFormat: "yy-mm-dd"})
 });


$(document).ready(function(){
		initializeMap();
		$('#locationInput').change(function(){
			codeAddress();
		});
})

var geocoder;
var map;

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
	map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
}

function codeAddress() {
	var address = document.getElementById("locationInput").value;
	alert(address);
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
		  } else {
			alert("Geocode was not successful for the following reason: " + status);
		  }
	});
}

