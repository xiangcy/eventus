//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
	
$(function() {
    $( ".datetimepicker" ).datetimepicker({dateFormat: "yy-mm-dd"})
 });


$(document).ready(function(){		
		initializeMap();
		
		$('#citySelect').change(function(){
			var addressCity = $(this).val();
			codeAddress(addressCity);
		});
		
		$('#locationInput').change(function(){
			var address = $(this).val();
			var addressCity = $("#citySelect").val();
			codeAddress(addressCity+" "+address);
		});

		$("#mapButton").click(function(){
			var address = $("#locationInput").val();
			var addressCity = $("#citySelect").val();
			alert(address+" "+addressCity);
			codeAddress(addressCity+" "+address);
		})


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

function codeAddress( address ) {
	alert(address);
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
		  } else {
			alert("Cannot pin location for the following reason: " + status);
		  }
	});
}

