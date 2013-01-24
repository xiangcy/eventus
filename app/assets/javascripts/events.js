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
	var locationShown = $("#locationShown").text();

	if (locationShown != ""){
		initializeMap(locationShown);
	}
	else{
		initializeMap(address+", "+addressCity);
	}
	
	$('#citySelect').change(function(){
		addressCity = $(this).val();
		codeAddress(addressCity);
	});

	$("#returnAddress").click(function(){
		map.setCenter(firstLocation);
	});
	
	$('#locationInput').change(function(){
		address = $(this).val();
		addressCity = $("#citySelect").val();
		codeAddress(address+", "+addressCity);
	});

	$("#locationInput").click(function(){
		$( document ).tooltip();
	})

	$("#mapButton").click(function(){
		address = $("#locationInput").val();
		addressCity = $("#citySelect").val();
		codeAddress(address+", "+addressCity);
	})
	$("#locGen").click(function(){
		if (marker){
			var markerPos=marker.position;
			codeLatLng(markerPos, function(address){
				if(address){
					fillLocation(address);
					map.setCenter(markerPos);
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
var firstLocation;

function initializeMap(addInForm, inShowMode) {
	geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address': addInForm}, function(results, status){
		if (status == google.maps.GeocoderStatus.OK){
			firstLocation = results[0].geometry.location;
			titleName = addInForm;
		}
		else {
			alert("Cannot pin location for the following reason: " + status);
			var titleName = "Boston";
			firstLocation = new google.maps.LatLng(42.3583, -71.0603)
		}
		var mapOptions = {
			center: firstLocation,
			zoom: 12,
			zoomControl: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.DEFAULT
			},
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		if ($("#locationShown").text()===""){
			google.maps.event.addListener(map, 'click', function(event) {
				addMarker(event.latLng);
			});
		}
			
		marker = new google.maps.Marker({
			map: map,
			position: firstLocation,
			title: titleName
		});
	})
	

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
		}
		else {
			alert("Cannot pin location for the following reason: " + status);
		}
	});
}

function addMarker(location) {
	if (marker){
		marker.setMap(null);
		marker=null;
		}
	var titleName="";
	codeLatLng(location, function(address){
		if (address){
			titleName=address;
			titleName+=", "+$("#citySelect").val();
		}
	});
	marker = new google.maps.Marker({
		position: location,
		map: map,
		title: titleName
	});
	
}

function codeLatLng(position, callback) {

	var latlng = position;

	geocoder.geocode({'latLng': latlng}, function(results, status) {
	  if (status == google.maps.GeocoderStatus.OK) {
		if (results[0]) {
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
