//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
var geocoder;
var map;
var marker
var firstLocation;
var clientId = '157080884144.apps.googleusercontent.com';
var apiKey = 'AIzaSyApTRZxR9qAHBk8vBJDwELX3ExZs5eATIE';
var scopes = 'https://www.googleapis.com/auth/calendar';

$(function () {
    $("#datepicker1, #datepicker2").datepicker({

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

$(document).ready(function () {


    $("#timepicker1").change(function () {
        updateTime();
    });


    $("#linkToCal").hide();

    $("#addCal").click(function () {
        handleAuthClick();
    })

    var addressCity = $("#citySelect").val();
    var address = $("#locationInput").val();
    var locationShown = $("#locationShown").text();
    var location = $("locationInput").text();

    if (locationShown != "") {
        initializeMap(locationShown);
        //timeToPage();
    } else if (addressCity != "") {


        initializeMap(address + " " + addressCity);
    }

    $(".s, .e").change(function () {

        timeToDatabase();
    });

    $('#citySelect').change(function () {
        addressCity = $(this).val();
        codeAddress(addressCity);
    });

    $("#returnAddress").click(function () {
        map.setCenter(firstLocation);
    });

    $('#locationInput').change(function () {
        address = $(this).val();
        addressCity = $("#citySelect").val();
        //codeAddress(address+" "+addressCity);
    });

    $("#locationInput").click(function () {
        $(document).tooltip();
    })

    $("#pinGen").click(function () {
        address = $("#locationInput").val();
        addressCity = $("#citySelect").val();
        codeAddress(address + " " + addressCity);
    })

    $("#geoLoc").click(function () {
        geolocate();

    })


    $("#locGen").click(function () {
        generateAddress();
    });
});


function timeFromDatabase() {

}

function generateAddress() {
    if (marker) {
        var markerPos = marker.position;
        codeLatLng(markerPos, function (address) {
            if (address) {
                fillLocation(address);
                map.setCenter(markerPos);
            }
        });
    } else {
        alert("put a pin first...");
    }
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

    if (startAP == 'PM' && startHourString != 12) {
        startHourString = parseInt(startHourString) + 12;
    }

    if (startAP == "AM" && startHourString == 12) {
        startHourString = 0;
    }


    if (endAP == 'PM' && endHourString != 12) {
        endHourString = parseInt(endHourString) + 12;
    }

    if (endAP == "AM" && endHourString == 12) {
        endHourString = 0;
    }



    console.log(startDateString);
    var startTimeToDatabase = startDateString.split("/")[2] + "-" + startDateString.split("/")[0] + "-" + startDateString.split("/")[1] +
        " " + startHourString + ":" + startMinString;
    var endTimeToDatabase = endDateString.split("/")[2] + "-" + endDateString.split("/")[0] + "-" + endDateString.split("/")[1] +
        " " + endHourString + ":" + endMinString;

    $("#startDateTime").val(startTimeToDatabase);
    $("#endDateTime").val(endTimeToDatabase);



}


function initializeMap(addInForm, inShowMode) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': addInForm
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            firstLocation = results[0].geometry.location;
            titleName = addInForm;
        } else {
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
        if ($("#locationShown").text() === "") {
            google.maps.event.addListener(map, 'click', function (event) {

                var mapZoom = map.getZoom();
                setTimeout(function () {
                    addMarker(event.latLng, mapZoom);
                }, 300);

            });


        }

        marker = new google.maps.Marker({
            map: map,
            position: firstLocation,
            title: titleName
        });
    })


}


function geolocate() {
    if (navigator.geolocation) {
        browserSupportFlag = true;
        navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
            addMarker(initialLocation);
        }, function () {
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



function codeAddress(address) {
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            if (marker) {
                marker.setMap(null);
                marker = null;
            }
            if (results.length > 1) {

                letUserChoose(results);

            } else {
                marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title: address
                });
            }
        } else {
            alert("Cannot pin location for the following reason: " + status);
        }
    });
}


function letUserChoose(results) {
    var markerArray = [];
    google.maps.event.clearListeners(map, 'click');
    var mybounds = new google.maps.LatLngBounds();

    for (oneResult in results) {
        mybounds.extend(results[oneResult].geometry.location);
        markerArray[oneResult] = new google.maps.Marker({
            map: map,
            position: results[oneResult].geometry.location,
        });
    }
    map.fitBounds(mybounds);
    for (oneMarker in markerArray) {

        google.maps.event.addListener(markerArray[oneMarker], 'click', function () {
            for (i in markerArray) {
                if (i != oneMarker) {
                    markerArray[i].setMap(null);
                } else {
                    marker = markerArray[i];
                }
            }
            markerArray.length = 0;
            generateAddress();
            google.maps.event.addListener(map, 'click', function (event) {
                var mapZoom = map.getZoom();
                setTimeout(function () {
                    addMarker(event.latLng, mapZoom);
                }, 300);
            });

        });
    }

}



function addMarker(location, mapZoom) {


        if (mapZoom == map.getZoom()) {
            if (marker) {
                marker.setMap(null);
                marker = null;
            }
            var titleName = "";
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

    }

    function codeLatLng(position, callback) {

        var latlng = position;

        geocoder.geocode({
            'latLng': latlng
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    if (marker) {
                        marker.setMap(null);
                        marker = null;
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

    function fillLocation(address) {
        var addressString = "";
        var foundCity = false;
        for (comp in address.address_components) {

            if (address.address_components[comp].types[0] == "administrative_area_level_1") {
                var foundCityName = address.address_components[comp].long_name;
                foundCity = true;
                $("#citySelect").each(function () {
                    if (foundCityName = $(this).val()) {
                        $("#citySelect").val(address.address_components[comp].long_name);
                    } else {
                        $("#citySelect").val("Others")
                    }
                    //other cities???
                })
                break;
            } else {
                addressString += address.address_components[comp].short_name + " ";
            }
        }
        if (foundCity) {
            $("#locationInput").val(addressString);
        } else {
            alert("no city found");
        }
    }



    function handleAuthClick() {


        gapi.auth.authorize({
            client_id: clientId,
            scope: scopes,
            immediate: true
        }, function (authResult) {
            if (authResult) {
                makeApiCall();
            } else {
                gapi.auth.authorize({
                    client_id: clientId,
                    scope: scopes,
                    immediate: false
                },

                function (authResult) {

                    console.log("111");
                    if (authResult) {
                        makeApiCall();
                    } else {
                        alert("you don't seem to have logged in...'");
                    }
                });
            }
        });
    }

    function makeApiCall() {
        console.log("making api call...");
        gapi.client.setApiKey('AIzaSyApTRZxR9qAHBk8vBJDwELX3ExZs5eATIE');
        gapi.client.load('calendar', 'v3', function () {
            var existEventus = false;
            var calendarID;
            var timezone;
            var request = gapi.client.calendar.calendarList.list();
            request.execute(function (longList) {
                for (eachCal in longList.items) {
                    if (longList.items[eachCal].summary === "Eventus") {
                        existEventus = true;
                        calendarID = longList.items[eachCal].id;
                        timezone = longList.items[eachCal].timeZone;
                        break;
                    }
                }
                if (!existEventus) {
                    console.log("adding eventus...");
                    var addEventusCal = gapi.client.calendar.calendars.insert({

                        "resource": {
                            "summary": 'Eventus'
                        }
                    });
                    addEventusCal.execute(function (newCalendar) {

                        calendarID = newCalendar.id;
                        addEvent(calendarID);
                        timezone = newCalendar.timeZone;
                        addEvent(calendarID, timezone);
                    });
                } else {
                    addEvent(calendarID, timezone);
                }
            });
        });
    }

    function addEvent(calendarID, timezone) {

        var startTimeString = $("#startTimeShown").text();
        var endTimeString = $("#endTimeShown").text();

        var startTime = startTimeString.split(",")[0].split(" ")[1];
        var startDateArray = startTimeString.split(",")[1].split("/");

        var endTime = endTimeString.split(",")[0].split(" ")[1];
        var endDateArray = endTimeString.split(",")[1].split("/");

        var startDateTime = startDateArray[2] + "-" + startDateArray[0].slice(1) + "-" + startDateArray[1] + "T" + startTime + ":00.000-07:00";
        var endDateTime = endDateArray[2] + "-" + endDateArray[0].slice(1) + "-" + endDateArray[1] + "T" + endTime + ":00.000-07:00";

        var eventLocation = $("#locationShown").text();
        var summary = $("#summary").text();
        var description = $("#descriptionShown").text();

        var summary = $("#titleShown").text();

        var request = gapi.client.calendar.events.insert({

            'approval_prompt': 'force',
            'calendarId': calendarID,

            'resource': {

                "colorId": "6",
                "location": eventLocation,

                "summary": summary,

                'description': description,

                'start': {
                    'dateTime': startDateTime
                },
                'end': {
                    'dateTime': endDateTime
                }
            }
        });

        request.execute(function (anewEvent) {
            console.log(anewEvent);
            if (anewEvent.kind == "calendar#event") {

                showUpLindToCal(anewEvent.htmlLink);

            } else {
                alert('failed to create event...');
            }

        });
    }


    function showUpLindToCal(link) {

        window.open(link, '_blank');
        window.focus();

    }
