//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var f=null,g=window,h="push",i="replace",k="length";var m=g,r=document,u=m.location,w=function(){},x=/\[native code\]/,A=function(a,b,c){return a[b]=a[b]||c},C=function(a){for(var b=0;b<this[k];b++)if(this[b]===a)return b;return-1},D=function(){var a;if((a=Object.create)&&x.test(a))a=a(f);else{a={};for(var b in a)a[b]=void 0}return a},E=A(m,"gapi",{});var F;F=A(m,"___jsl",D());A(F,"I",0);A(F,"hel",10);var G=function(){var a=u.href,b;if(F.dpo)b=F.h;else{b=F.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),e=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||e.exec(a)))try{b=decodeURIComponent(a[2])}catch(d){}}return b},I=function(a){return A(A(F,"H",D()),a,D())};var J=A(F,"perf",D()),L=A(J,"g",D()),M=A(J,"i",D());A(J,"r",[]);D();D();var N=function(a,b,c){var e=J.r;"function"===typeof e?e(a,b,c):e[h]([a,b,c])},P=function(a,b,c){b&&0<b[k]&&(b=O(b),c&&0<c[k]&&(b+="___"+O(c)),28<b[k]&&(b=b.substr(0,28)+(b[k]-28)),c=b,b=A(M,"_p",D()),A(b,c,D())[a]=(new Date).getTime(),N(a,"_p",c))},O=function(a){return a.join("__")[i](/\./g,"_")[i](/\-/g,"_")[i](/\,/g,"_")};var Q=D(),R=[],S;S={a:"callback",g:"sync",e:"config",c:"_c",d:"h",l:"platform",i:"jsl",TIMEOUT:"timeout",f:"ontimeout",k:"mh",j:"u"};R[h]([S.i,function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?F[b]=A(F,b,[]).concat(c):A(F,b,c)}if(b=a[S.j])a=A(F,"us",[]),a[h](b),(b=/^https:(.*)$/.exec(b))&&a[h]("http:"+b[1])}]);var T=decodeURI("%73cript");Q.m=function(a){var b=F.ms||"https://apis.google.com";a=a[0];var c;if(!(c=!a))c=0<=a.indexOf("..");if(c)throw"Bad hint";return b+"/"+a[i](/^\//,"")};
var U=function(a){return a.join(",")[i](/\./g,"_")[i](/-/g,"_")},W=function(a,b){for(var c=[],e=0;e<a[k];++e){var d=a[e];d&&0>C.call(b,d)&&c[h](d)}return c},aa=/^[\/_a-zA-Z0-9,.\-!:=]+$/,ba=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,ca=/\/cb=/g,da=/\/\//g,X=function(a){var b=r.createElement(T);b.setAttribute("src",a);b.async="true";(a=r.getElementsByTagName(T)[0])?a.parentNode.insertBefore(b,a):(r.head||r.body||r.documentElement).appendChild(b)},Z=function(a,b){var c=b||{};"function"==
typeof b&&(c={},c[S.a]=b);var e=c,d=e&&e[S.c];if(d)for(var j=0;j<R[k];j++){var l=R[j][0],n=R[j][1];n&&Object.prototype.hasOwnProperty.call(d,l)&&n(d[l],a,e)}e=a?a.split(":"):[];if(!(d=c[S.d]))if(d=G(),!d)throw"Bad hint";j=d;l=A(F,"ah",D());if(!l["::"]||!e[k])Y(e||[],c,j);else{d=[];for(n=f;n=e.shift();){var q=n.split("."),q=l[n]||l[q[1]&&"ns:"+q[0]||""]||j,v=d[k]&&d[d[k]-1]||f,y=v;if(!v||v.hint!=q)y={hint:q,b:[]},d[h](y);y.b[h](n)}var B=d[k];if(1<B){var z=c[S.a];z&&(c[S.a]=function(){0==--B&&z()})}for(;e=
d.shift();)Y(e.b,c,e.hint)}},Y=function(a,b,c){var e=a.sort();a=[];for(var d=void 0,j=0;j<e[k];j++){var l=e[j];l!=d&&a[h](l);d=l}a=a||[];var n=b[S.a],q=b[S.e],d=b[S.TIMEOUT],v=b[S.f],y=f,B=!1;if(d&&!v||!d&&v)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var e=A(I(c),"r",[]).sort(),z=A(I(c),"L",[]).sort(),H=[].concat(e),V=function(a,b){if(B)return 0;m.clearTimeout(y);z[h].apply(z,p);var d=((E||{}).config||{}).update;d?d(q):q&&A(F,"cu",[])[h](q);if(b){P("me0",
a,H);try{$(function(){var a;a=c===G()?A(E,"_",D()):D();a=A(I(c),"_",a);b(a)})}finally{P("me1",a,H)}}n&&n();return 1};0<d&&(y=m.setTimeout(function(){B=!0;v()},d));var p=W(a,z);if(p[k]){var p=W(a,e),s=A(F,"CP",[]),t=s[k];s[t]=function(a){if(!a)return 0;P("ml1",p,H);var b=function(){s[t]=f;return V(p,a)};if(0<t&&s[t-1])s[t]=b;else for(b();(b=s[++t])&&b(););};if(p[k]){var K="loaded_"+F.I++;E[K]=function(a){s[t](a);E[K]=f};a=c.split(";");a=(d=Q[a.shift()])&&d(a);if(!a)throw"Bad hint:"+c;d=a=a[i]("__features__",
U(p))[i](/\/$/,"")+(e[k]?"/ed=1/exm="+U(e):"")+("/cb=gapi."+K);j=d.match(da);l=d.match(ca);if(!l||!(1===l[k]&&ba.test(d)&&aa.test(d)&&j&&1===j[k]))throw"Bad URL "+a;e[h].apply(e,p);P("ml0",p,H);b[S.g]||m.___gapisync?(b=a,"loading"!=r.readyState?X(b):r.write("<"+T+' src="'+encodeURI(b)+'"></'+T+">")):X(a)}else s[t](w)}else V(p)};var $=function(a){if(F.hee&&0<F.hel)try{return a()}catch(b){F.hel--,Z("debug_error",function(){g.___jsl.hefn(b)})}else return a()};E.load=function(a,b){return $(function(){return Z(a,b)})};L.bs0=g.gapi._bs||(new Date).getTime();N("bs0");L.bs1=(new Date).getTime();N("bs1");delete g.gapi._bs;})();
gapi.load("client",{callback:window["onLoadCallBack"],_c:{"jsl":{"ci":{"services":{},"deviceType":"desktop","lexps":[69,100,71,96,97,79,74,45,17,86,82,92,94,61,90,30],"inline":{"css":1},"report":{},"oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay"},"isPlusUser":true,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv"},":socialhost:":"https://plusone.google.com","plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv"},"recobox":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobox?bsv"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv"},"hangout":{"url":"https://talkgadget.google.com/widget/go?bsv"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?bsv"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv"}},"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en._sqI7l0acxE.O/m\u003d__features__/am\u003diQ/rt\u003dj/d\u003d1/rs\u003dAItRSTMbbIb-pqI80neWn4EsRMp_9-jtaA","u":"https://apis.google.com/js/client.js?onload\u003donLoadCallBack\u0026async\u003d1","hee":true,"fp":"71d2d09f45ddd96da1f2c66485b54d0a6ce3678e","dpo":false},"fp":"71d2d09f45ddd96da1f2c66485b54d0a6ce3678e","annotation":["autocomplete","profile"],"bimodal":[]}});

var geocoder;
var map;
var marker
var firstLocation;
var clientId = '157080884144.apps.googleusercontent.com';
var apiKey = 'AIzaSyApTRZxR9qAHBk8vBJDwELX3ExZs5eATIE';
var scopes = 'https://www.googleapis.com/auth/calendar';

$(function() {
    $( "#datepicker1, #datepicker2" ).datepicker({
      
	dateFormat: "mm/dd/yy",
	changeMonth: true,
	changeYear: true,
	altFormat: "yy-mm-dd" 
	})
    $("#timepicker1, #timepicker2").timePicker({
	step: 15,
	show24Hours: false
      });
    
});

$(document).ready(function(){


	$("#timepicker1").change(function(){
	    updateTime();
	});


	$("#linkToCal").hide();
	 	
	$("#addCal").click(function(){
		handleAuthClick();
	})
	
	var addressCity = $("#citySelect").val();
	var address = $("#locationInput").val();
	var locationShown = $("#locationShown").text();
	var location = $("locationInput").text();

	if (locationShown != ""){
	    initializeMap(locationShown);
	    //timeToPage();
	}
	else if (addressCity!="")
	{

	    
	    initializeMap(address+" "+addressCity);
	}
	
	$(".s, .e").change(function(){  
	    timeToDatabase();
	});
	
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
		codeAddress(address+" "+addressCity);
	});

	$("#locationInput").click(function(){
		$( document ).tooltip();
	})

	$("#pinGen").click(function(){
		address = $("#locationInput").val();
		addressCity = $("#citySelect").val();
		codeAddress(address+" "+addressCity);
	})
	
	$("#geoLoc").click(function(){
		geolocate();
	  
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
});


function timeFromDatabase(){
  
  
  
  
}




function timeToDatabase() {

	var startDateString = $(".startDate").val();
	var startHourString = $(".startHour").val();
	var startMinString = $(".startMin").val();
	var startAP = $(".startAP").val();
	
	var endDateString = $(".endDate").val();
	var endHourString = $(".endHour").val();
	var endMinString = $(".endMin").val();
	var endAP = $(".endAP").val();
	
	if (startAP == 'PM' && startHourString != 12){
	  startHourString = parseInt(startHourString) + 12;
	}
	
	if (startAP == "AM" && startHourString == 12){
	  startHourString = 0;
	}
      
	
	if (endAP == 'PM' && endHourString != 12){
	  endHourString = parseInt(endHourString) + 12;
	}
	
	if (endAP == "AM" && endHourString == 12){
	  endHourString = 0;
	}
	

	
	console.log(startDateString);
	var startTimeToDatabase = startDateString.split("/")[2]+"-"+startDateString.split("/")[0]+"-"+startDateString.split("/")[1]+
				  " "+startHourString+":"+startMinString;
	var endTimeToDatabase = endDateString.split("/")[2]+"-"+endDateString.split("/")[0]+"-"+endDateString.split("/")[1]+
				  " "+endHourString+":"+endMinString;
	
	$("#startDateTime").val(startTimeToDatabase);
	$("#endDateTime").val(endTimeToDatabase);



  }
  
  
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


function geolocate(){
  if(navigator.geolocation) {
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
	initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	map.setCenter(initialLocation);
	addMarker(initialLocation);
      }, function() {
	handleNoGeolocation(browserSupportFlag);
      });
    }
    // Browser doesn't support Geolocation
    else {
      browserSupportFlag = false;
      handleNoGeolocation(browserSupportFlag);
    }
    
    function handleNoGeolocation(errorFlag) {
      if (errorFlag == true) {
	alert("Geolocation service failed.");
      } else {
	alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
      }
    }

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
	/*
	codeLatLng(location, function(address){
		if (address){
			titleName=address;
			titleName+=" "+$("#citySelect").val();
		}
	});
	*/
	marker = new google.maps.Marker({
		position: location,
		map: map,
		//title: titleName
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



function handleAuthClick() {  
	

	gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, function(authResult){
		if (authResult){
			makeApiCall();
		}
		else{
			gapi.auth.authorize({client_id: clientId, scope: scopes, immediate:false},
				function(authResult){
				  
				  		  console.log("111");
					if (authResult) {
						makeApiCall();
					}
					else{
						alert("you don't seem to have logged in...'");
					}
				});
		}
	});
}

function makeApiCall() {
  console.log("making api call...");
	gapi.client.setApiKey('AIzaSyApTRZxR9qAHBk8vBJDwELX3ExZs5eATIE');
	gapi.client.load('calendar', 'v3', function() {
		var existEventus = false;
		var calendarID;
		var timezone;
		var request = gapi.client.calendar.calendarList.list();	
		request.execute(function(longList){
			for (eachCal in longList.items ){
				if (longList.items[eachCal].summary==="Eventus"){
					existEventus = true;
					calendarID = longList.items[eachCal].id;
					timezone = longList.items[eachCal].timeZone;
					break;
				}
			}
			if (!existEventus){
			    console.log("adding eventus...");
				var addEventusCal = gapi.client.calendar.calendars.insert({
				    
				    "resource":{
					"summary": 'Eventus'
					}
				});
				addEventusCal.execute(function(newCalendar){
				  
					calendarID = newCalendar.id;
					addEvent(calendarID);
					timezone = newCalendar.timeZone;
					addEvent(calendarID, timezone);
				});
			}
			else{
			  addEvent(calendarID, timezone);
			}
		});
	});
}

function addEvent(calendarID, timezone){
	
	var startTimeString = $("#startTimeShown").text();
	var endTimeString = $("#endTimeShown").text();
	
	var startTime = startTimeString.split(",")[0].split(" ")[1];
	var startDateArray = startTimeString.split(",")[1].split("/");
	
	var endTime = endTimeString.split(",")[0].split(" ")[1];
	var endDateArray = endTimeString.split(",")[1].split("/");	
	
	var startDateTime = startDateArray[2]+"-"+startDateArray[0].slice(1)+"-"+startDateArray[1]+"T"+startTime+":00.000-07:00";
	var endDateTime = endDateArray[2]+"-"+endDateArray[0].slice(1)+"-"+endDateArray[1]+"T"+endTime+":00.000-07:00";
	
	var eventLocation = $("#locationShown").text();
	var summary = $("#summary").text();
	var description = $("#descriptionShown").text();
	
	var summary = $("#titleShown").text();

var request = gapi.client.calendar.events.insert({
  
	'approval_prompt':'force',
	'calendarId': calendarID,
	
	'resource' : {
	  
		"colorId" : "6",
		"location" : eventLocation,

		"summary" : summary,
		
		'description': description,

		'start': {
			'dateTime': startDateTime
		},
		'end': {
			'dateTime': endDateTime
		}
	}
	});
	
	request.execute(function(anewEvent){
		console.log(anewEvent);
		if (anewEvent.kind=="calendar#event"){
		  
		  showUpLindToCal(anewEvent.htmlLink);
		  
		}
		
		else{
		  alert('failed to create event...');
		}

	});
}


function showUpLindToCal(link){
  
  window.open(link, '_blank');
   window.focus();
  
}
