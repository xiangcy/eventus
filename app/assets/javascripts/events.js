//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
	
$(function() {
    $( ".datetimepicker" ).datetimepicker({dateFormat: "yy-mm-dd"})
 });


$(document).ready(function(){

	

	//gapi.client.load('plus', 'v1', function() { console.log('loaded.'); });

	var addressCity = $("#citySelect").val();
	var address = $("#locationInput").val();
	
	initializeMap(addressCity+" "+address);
	
	$('#citySelect').change(function(){
		addressCity = $(this).val();
		codeAddress(addressCity);
	});
	
	$('#locationInput').change(function(){
		address = $(this).val();
		addressCity = $("#citySelect").val();
		codeAddress(addressCity+" "+address);
	});

	$("#locationInput").click(function(){

		$( document ).tooltip();

	})

	$("#mapButton").click(function(){
		address = $("#locationInput").val();
		addressCity = $("#citySelect").val();
		codeAddress(addressCity+" "+address);
	})
	$("#locGen").click(function(){
		if (marker){
			var markerPos=marker.position;
			codeLatLng(markerPos, function(address){
				if(address){
					fillLocation(address);
				}
			}) ;
		}
		else{
			alert("put a pin first...");
		}
	})
})


var geocoder;
var map;
var marker
var foundAddress;

function initializeMap(addInForm) {
	geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address': addInForm}, function(results, status) {
	if (status == google.maps.GeocoderStatus.OK){
		var mapOptions = {
			center: results[0].geometry.location,
			zoom: 12,
			zomControl: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.DEFAULT
			},
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);

		google.maps.event.addListener(map, 'click', function(event) {
			addMarker(event.latLng);
		});
		if (marker){
			marker.setMap(null);
			marker=null;
		}
			marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location,
				title: results[0].formatted_address
			});
		}
		else {
			alert("Cannot pin location for the following reason: " + status);
		}
	});
}

function codeAddress( address ) {
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			if (marker){
				marker.setMap(null);
				marker=null;
			}
				marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location,
				title: address
			});
		  } else {
			alert("Cannot pin location for the following reason: " + status);
		  }
	});
}

function addMarker(location) {
	if (marker){
		marker.setMap(null);
		marker=null;
		}
		
	marker = new google.maps.Marker({
		position: location,
		map: map
	});
}



function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(40.730885,-73.997383);
    var mapOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  }

function codeLatLng(position, callback) {

	var latlng = position;

	geocoder.geocode({'latLng': latlng}, function(results, status) {
	  if (status == google.maps.GeocoderStatus.OK) {
		if (results[0]) {
			map.setCenter(position);
			if (marker){
				marker.setMap(null);
				marker=null;
			}
			marker = new google.maps.Marker({
			  position: latlng,
			  map: map,
			  title: results[0].formatted_address
			});
		  callback(results[0]);
		}
	  } else {
		alert("No address found");
		callback(false);
	  }
	});
}

function fillLocation(address){
	var addressString="";
	var foundCity=false;
	for (comp in address.address_components){
		
		if (address.address_components[comp].types[0]=="administrative_area_level_1"){
			var foundCityName=address.address_components[comp].long_name;
			foundCity=true;
			$("#citySelect").each(function(){
				if (foundCityName = $(this).val()){
					$("#citySelect").val(address.address_components[comp].long_name);
				}
				else{
					$("#citySelect").val("Others")
				}
				//other cities???
			})
			break;
		}
		else{
			addressString+=address.address_components[comp].short_name+" ";
		}
	}
	if (foundCity){
		$("#locationInput").val(addressString);
	}
	else{
		alert("no city found");
	}
}
