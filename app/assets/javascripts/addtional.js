$(function(){
if($(".pagination").length != undefined){
    $(window).scroll(function(){
        var $url=$(".pagination .next_page a").attr("href");
        if ($url != undefined && $(window).scrollTop()>$(document).height()-$(window).height()-50){
            $(".pagination").text("fetching more events...");
            $.getScript($url);
            }
    })
    $(window).scroll();
}
});

/*!
 * Pusher JavaScript Library v1.12.5
 * http://pusherapp.com/
 *
 * Copyright 2011, Pusher
 * Released under the MIT licence.
 */


$(function(){
    $(".writecomment").click(function(){
        var commentposition = $(document).height()-$(window).height();
        window.scrollTo(0, commentposition);
    })
 });




/*!
 * Pusher JavaScript Library v1.12.5
 * http://pusherapp.com/
 *
 * Copyright 2011, Pusher
 * Released under the MIT licence.
 */

(function(){if(Function.prototype.scopedTo===void 0)Function.prototype.scopedTo=function(a,b){var e=this;return function(){return e.apply(a,Array.prototype.slice.call(b||[]).concat(Array.prototype.slice.call(arguments)))}};var c=function(a,b){this.options=b||{};this.key=a;this.channels=new c.Channels;this.global_emitter=new c.EventsDispatcher;var e=this;this.checkAppKey();this.connection=new c.Connection(this.key,this.options);this.connection.bind("connected",function(){e.subscribeAll()}).bind("message",
function(b){var a=b.event.indexOf("pusher_internal:")===0;if(b.channel){var c;(c=e.channel(b.channel))&&c.emit(b.event,b.data)}a||e.global_emitter.emit(b.event,b.data)}).bind("disconnected",function(){e.channels.disconnect()}).bind("error",function(b){c.warn("Error",b)});c.instances.push(this);c.isReady&&e.connect()};c.instances=[];c.prototype={channel:function(a){return this.channels.find(a)},connect:function(){this.connection.connect()},disconnect:function(){this.connection.disconnect()},bind:function(a,
b){this.global_emitter.bind(a,b);return this},bind_all:function(a){this.global_emitter.bind_all(a);return this},subscribeAll:function(){for(channelName in this.channels.channels)this.channels.channels.hasOwnProperty(channelName)&&this.subscribe(channelName)},subscribe:function(a){var b=this,e=this.channels.add(a,this);this.connection.state==="connected"&&e.authorize(this.connection.socket_id,this.options,function(c,f){c?e.emit("pusher:subscription_error",f):b.send_event("pusher:subscribe",{channel:a,
auth:f.auth,channel_data:f.channel_data})});return e},unsubscribe:function(a){this.channels.remove(a);this.connection.state==="connected"&&this.send_event("pusher:unsubscribe",{channel:a})},send_event:function(a,b,e){return this.connection.send_event(a,b,e)},checkAppKey:function(){(this.key===null||this.key===void 0)&&c.warn("Warning","You must pass your app key when you instantiate Pusher.")}};c.Util={extend:function b(e,c){for(var f in c)e[f]=c[f]&&c[f].constructor&&c[f].constructor===Object?b(e[f]||
{},c[f]):c[f];return e},stringify:function(){for(var b=["Pusher"],e=0;e<arguments.length;e++)typeof arguments[e]==="string"?b.push(arguments[e]):window.JSON==void 0?b.push(arguments[e].toString()):b.push(JSON.stringify(arguments[e]));return b.join(" : ")},arrayIndexOf:function(b,e){var c=Array.prototype.indexOf;if(b==null)return-1;if(c&&b.indexOf===c)return b.indexOf(e);for(i=0,l=b.length;i<l;i++)if(b[i]===e)return i;return-1}};c.debug=function(){c.log&&c.log(c.Util.stringify.apply(this,arguments))};
c.warn=function(){window.console&&window.console.warn?window.console.warn(c.Util.stringify.apply(this,arguments)):c.log&&c.log(c.Util.stringify.apply(this,arguments))};c.VERSION="1.12.5";c.host="ws.pusherapp.com";c.ws_port=80;c.wss_port=443;c.sockjs_host="sockjs.pusher.com";c.sockjs_http_port=80;c.sockjs_https_port=443;c.sockjs_path="/pusher";c.channel_auth_endpoint="/pusher/auth";c.cdn_http="http://js.pusher.com/";c.cdn_https="https://d3dy5gmtp8yhk7.cloudfront.net/";c.dependency_suffix=".min";c.channel_auth_transport=
"ajax";c.activity_timeout=12E4;c.pong_timeout=3E4;c.isReady=!1;c.ready=function(){c.isReady=!0;for(var b=0,e=c.instances.length;b<e;b++)c.instances[b].connect()};this.Pusher=c}).call(this);
(function(){function c(){this._callbacks={}}function a(b){this.callbacks=new c;this.global_callbacks=[];this.failThrough=b}c.prototype.get=function(b){return this._callbacks[this._prefix(b)]};c.prototype.add=function(b,a){var c=this._prefix(b);this._callbacks[c]=this._callbacks[c]||[];this._callbacks[c].push(a)};c.prototype.remove=function(b,c){if(this.get(b)){var a=Pusher.Util.arrayIndexOf(this.get(b),c);this._callbacks[this._prefix(b)].splice(a,1)}};c.prototype._prefix=function(b){return"_"+b};
a.prototype.bind=function(b,c){this.callbacks.add(b,c);return this};a.prototype.unbind=function(b,c){this.callbacks.remove(b,c);return this};a.prototype.emit=function(b,c){for(var a=0;a<this.global_callbacks.length;a++)this.global_callbacks[a](b,c);var f=this.callbacks.get(b);if(f)for(a=0;a<f.length;a++)f[a](c);else this.failThrough&&this.failThrough(b,c);return this};a.prototype.bind_all=function(b){this.global_callbacks.push(b);return this};this.Pusher.EventsDispatcher=a}).call(this);
(function(){function c(b,c,a){if(c[b]!==void 0)c[b](a)}function a(c,a,f){b.EventsDispatcher.call(this);this.state=void 0;this.errors=[];this.stateActions=f;this.transitions=a;this.transition(c)}var b=this.Pusher;a.prototype.transition=function(a,g){var f=this.state,j=this.stateActions;if(f&&b.Util.arrayIndexOf(this.transitions[f],a)==-1)throw this.emit("invalid_transition_attempt",{oldState:f,newState:a}),Error("Invalid transition ["+f+" to "+a+"]");c(f+"Exit",j,g);c(f+"To"+(a.substr(0,1).toUpperCase()+
a.substr(1)),j,g);c(a+"Pre",j,g);this.state=a;this.emit("state_change",{oldState:f,newState:a});c(a+"Post",j,g)};a.prototype.is=function(b){return this.state===b};a.prototype.isNot=function(b){return this.state!==b};b.Util.extend(a.prototype,b.EventsDispatcher.prototype);this.Pusher.Machine=a}).call(this);
(function(){var c=function(){var a=this;Pusher.EventsDispatcher.call(this);window.addEventListener!==void 0&&(window.addEventListener("online",function(){a.emit("online",null)},!1),window.addEventListener("offline",function(){a.emit("offline",null)},!1))};c.prototype.isOnLine=function(){return window.navigator.onLine===void 0?!0:window.navigator.onLine};Pusher.Util.extend(c.prototype,Pusher.EventsDispatcher.prototype);this.Pusher.NetInfo=c}).call(this);
(function(){function c(a){a.connectionWait=0;a.openTimeout=b.TransportType==="native"?4E3:b.TransportType==="flash"?7E3:6E3;a.connectedTimeout=2E3;a.connectionSecure=a.compulsorySecure;a.failedAttempts=0}function a(a,s){function k(){d.openTimeout<j&&(d.openTimeout+=g);d.connectedTimeout<t&&(d.connectedTimeout+=f);if(d.compulsorySecure!==!0)d.connectionSecure=!d.connectionSecure;d.failedAttempts++}function u(a){a=a||document.location.protocol==="https:";return(a?"wss://":"ws://")+b.host+":"+(a?b.wss_port:
b.ws_port)}function v(a){a=a||document.location.protocol==="https:";return(a?"https://":"http://")+b.sockjs_host+":"+(a?b.sockjs_https_port:b.sockjs_http_port)+b.sockjs_path}function m(){d._machine.transition("impermanentlyClosing")}function p(){d._activityTimer&&clearTimeout(d._activityTimer);if(d.ping)d._activityTimer=setTimeout(function(){d.send_event("pusher:ping",{});d._activityTimer=setTimeout(function(){d.socket.close()},d.options.pong_timeout||b.pong_timeout)},d.options.activity_timeout||
b.activity_timeout)}function q(){var b=d.connectionWait;if(b===0&&d.connectedAt){var a=(new Date).getTime()-d.connectedAt;a<1E3&&(b=1E3-a)}return b}function w(b){b=r(b);if(b!==void 0)if(b.event==="pusher:connection_established")d._machine.transition("connected",b.data.socket_id);else if(b.event==="pusher:error"){var a=b.data.code;d.emit("error",{type:"PusherError",data:{code:a,message:b.data.message}});a===4E3?(d.compulsorySecure=!0,d.connectionSecure=!0,d.options.encrypted=!0,m()):a<4100?d._machine.transition("permanentlyClosing"):
a<4200?(d.connectionWait=1E3,d._machine.transition("waiting")):a<4300?m():d._machine.transition("permanentlyClosing")}}function x(a){p();a=r(a);if(a!==void 0){b.debug("Event recd",a);switch(a.event){case "pusher:error":d.emit("error",{type:"PusherError",data:a.data});break;case "pusher:ping":d.send_event("pusher:pong",{})}d.emit("message",a)}}function r(b){try{var a=JSON.parse(b.data);if(typeof a.data==="string")try{a.data=JSON.parse(a.data)}catch(c){if(!(c instanceof SyntaxError))throw c;}return a}catch(e){d.emit("error",
{type:"MessageParseError",error:e,data:b.data})}}function n(){d._machine.transition("waiting")}function o(b){d.emit("error",{type:"WebSocketError",error:b})}function h(a,c){var e=d.state;d.state=a;e!==a&&(b.debug("State changed",e+" -> "+a),d.emit("state_change",{previous:e,current:a}),d.emit(a,c))}var d=this;b.EventsDispatcher.call(this);this.ping=!0;this.options=b.Util.extend({encrypted:!1},s);this.netInfo=new b.NetInfo;this.netInfo.bind("online",function(){d._machine.is("waiting")&&(d._machine.transition("connecting"),
h("connecting"))});this.netInfo.bind("offline",function(){if(d._machine.is("connected"))d.socket.onclose=void 0,d.socket.onmessage=void 0,d.socket.onerror=void 0,d.socket.onopen=void 0,d.socket.close(),d.socket=void 0,d._machine.transition("waiting")});this._machine=new b.Machine("initialized",e,{initializedPre:function(){d.compulsorySecure=d.options.encrypted;d.key=a;d.socket=null;d.socket_id=null;d.state="initialized"},waitingPre:function(){d.netInfo.isOnLine()?(d.failedAttempts<2?h("connecting"):
(h("unavailable"),d.connectionWait=1E4),d.connectionWait>0&&d.emit("connecting_in",q()),d._waitingTimer=setTimeout(function(){d._machine.transition("connecting")},q())):h("unavailable")},waitingExit:function(){clearTimeout(d._waitingTimer)},connectingPre:function(){if(d.netInfo.isOnLine()===!1)d._machine.transition("waiting"),h("unavailable");else{var a="/app/"+d.key+"?protocol=5&client=js&version="+b.VERSION+"&flash="+(b.TransportType==="flash"?"true":"false");if(b.TransportType==="sockjs"){b.debug("Connecting to sockjs",
b.sockjs);var c=v(d.connectionSecure);d.ping=!1;d.socket=new SockJS(c);d.socket.onopen=function(){d.socket.send(JSON.stringify({path:a}));d._machine.transition("open")}}else c=u(d.connectionSecure)+a,b.debug("Connecting",c),d.socket=new b.Transport(c),d.socket.onopen=function(){d._machine.transition("open")};d.socket.onclose=n;d.socket.onerror=o;d._connectingTimer=setTimeout(m,d.openTimeout)}},connectingExit:function(){clearTimeout(d._connectingTimer);d.socket.onopen=void 0},connectingToWaiting:function(){k()},
connectingToImpermanentlyClosing:function(){k()},openPre:function(){d.socket.onmessage=w;d.socket.onerror=o;d.socket.onclose=n;d._openTimer=setTimeout(m,d.connectedTimeout)},openExit:function(){clearTimeout(d._openTimer);d.socket.onmessage=void 0},openToWaiting:function(){k()},openToImpermanentlyClosing:function(){k()},connectedPre:function(b){d.socket_id=b;d.socket.onmessage=x;d.socket.onerror=o;d.socket.onclose=n;c(d);d.connectedAt=(new Date).getTime();p()},connectedPost:function(){h("connected")},
connectedExit:function(){d._activityTimer&&clearTimeout(d._activityTimer);h("disconnected")},impermanentlyClosingPost:function(){if(d.socket)d.socket.onclose=n,d.socket.close()},permanentlyClosingPost:function(){d.socket?(d.socket.onclose=function(){c(d);d._machine.transition("permanentlyClosed")},d.socket.close()):(c(d),d._machine.transition("permanentlyClosed"))},failedPre:function(){h("failed");b.debug("WebSockets are not available in this browser.")},permanentlyClosedPost:function(){h("disconnected")}})}
var b=this.Pusher,e={initialized:["waiting","failed"],waiting:["connecting","permanentlyClosed"],connecting:["open","permanentlyClosing","impermanentlyClosing","waiting"],open:["connected","permanentlyClosing","impermanentlyClosing","waiting"],connected:["permanentlyClosing","waiting"],impermanentlyClosing:["waiting","permanentlyClosing"],permanentlyClosing:["permanentlyClosed"],permanentlyClosed:["waiting","failed"],failed:["permanentlyClosed"]},g=2E3,f=2E3,j=1E4,t=1E4;a.prototype.connect=function(){!this._machine.is("failed")&&
!b.Transport?this._machine.transition("failed"):this._machine.is("initialized")?(c(this),this._machine.transition("waiting")):this._machine.is("waiting")&&this.netInfo.isOnLine()===!0?this._machine.transition("connecting"):this._machine.is("permanentlyClosed")&&(c(this),this._machine.transition("waiting"))};a.prototype.send=function(b){if(this._machine.is("connected")){var a=this;setTimeout(function(){a.socket.send(b)},0);return!0}else return!1};a.prototype.send_event=function(a,c,e){a={event:a,data:c};
e&&(a.channel=e);b.debug("Event sent",a);return this.send(JSON.stringify(a))};a.prototype.disconnect=function(){this._machine.is("permanentlyClosed")||(this._machine.is("waiting")||this._machine.is("failed")?this._machine.transition("permanentlyClosed"):this._machine.transition("permanentlyClosing"))};b.Util.extend(a.prototype,b.EventsDispatcher.prototype);this.Pusher.Connection=a}).call(this);
(function(){Pusher.Channels=function(){this.channels={}};Pusher.Channels.prototype={add:function(a,b){var c=this.find(a);c||(c=Pusher.Channel.factory(a,b),this.channels[a]=c);return c},find:function(a){return this.channels[a]},remove:function(a){delete this.channels[a]},disconnect:function(){for(var a in this.channels)this.channels[a].disconnect()}};Pusher.Channel=function(a,b){var c=this;Pusher.EventsDispatcher.call(this,function(b){Pusher.debug("No callbacks on "+a+" for "+b)});this.pusher=b;this.name=
a;this.subscribed=!1;this.bind("pusher_internal:subscription_succeeded",function(a){c.onSubscriptionSucceeded(a)})};Pusher.Channel.prototype={init:function(){},disconnect:function(){this.subscribed=!1;this.emit("pusher_internal:disconnected")},onSubscriptionSucceeded:function(){this.subscribed=!0;this.emit("pusher:subscription_succeeded")},authorize:function(a,b,c){return c(!1,{})},trigger:function(a,b){return this.pusher.send_event(a,b,this.name)}};Pusher.Util.extend(Pusher.Channel.prototype,Pusher.EventsDispatcher.prototype);
Pusher.Channel.PrivateChannel={authorize:function(a,b,c){var g=this;return(new Pusher.Channel.Authorizer(this,Pusher.channel_auth_transport,b)).authorize(a,function(a,b){a||g.emit("pusher_internal:authorized",b);c(a,b)})}};Pusher.Channel.PresenceChannel={init:function(){this.members=new c(this)},onSubscriptionSucceeded:function(){this.subscribed=!0}};var c=function(a){var b=this,c=function(){this._members_map={};this.count=0;this.me=null};c.call(this);a.bind("pusher_internal:authorized",function(c){var e=
JSON.parse(c.channel_data);a.bind("pusher_internal:subscription_succeeded",function(c){b._members_map=c.presence.hash;b.count=c.presence.count;b.me=b.get(e.user_id);a.emit("pusher:subscription_succeeded",b)})});a.bind("pusher_internal:member_added",function(c){b.get(c.user_id)===null&&b.count++;b._members_map[c.user_id]=c.user_info;a.emit("pusher:member_added",b.get(c.user_id))});a.bind("pusher_internal:member_removed",function(c){var e=b.get(c.user_id);e&&(delete b._members_map[c.user_id],b.count--,
a.emit("pusher:member_removed",e))});a.bind("pusher_internal:disconnected",function(){c.call(b)})};c.prototype={each:function(a){for(var b in this._members_map)a(this.get(b))},get:function(a){return this._members_map.hasOwnProperty(a)?{id:a,info:this._members_map[a]}:null}};Pusher.Channel.factory=function(a,b){var c=new Pusher.Channel(a,b);a.indexOf("private-")===0?Pusher.Util.extend(c,Pusher.Channel.PrivateChannel):a.indexOf("presence-")===0&&(Pusher.Util.extend(c,Pusher.Channel.PrivateChannel),
Pusher.Util.extend(c,Pusher.Channel.PresenceChannel));c.init();return c}}).call(this);
(function(){Pusher.Channel.Authorizer=function(c,a,b){this.channel=c;this.type=a;this.authOptions=(b||{}).auth||{}};Pusher.Channel.Authorizer.prototype={composeQuery:function(c){var c="&socket_id="+encodeURIComponent(c)+"&channel_name="+encodeURIComponent(this.channel.name),a;for(a in this.authOptions.params)c+="&"+encodeURIComponent(a)+"="+encodeURIComponent(this.authOptions.params[a]);return c},authorize:function(c,a){return Pusher.authorizers[this.type].call(this,c,a)}};Pusher.auth_callbacks={};
Pusher.authorizers={ajax:function(c,a){var b;b=Pusher.XHR?new Pusher.XHR:window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");b.open("POST",Pusher.channel_auth_endpoint,!0);b.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var e in this.authOptions.headers)b.setRequestHeader(e,this.authOptions.headers[e]);b.onreadystatechange=function(){if(b.readyState==4)if(b.status==200){var c,e=!1;try{c=JSON.parse(b.responseText),e=!0}catch(j){a(!0,"JSON returned from webapp was invalid, yet status code was 200. Data was: "+
b.responseText)}e&&a(!1,c)}else Pusher.warn("Couldn't get auth info from your webapp",b.status),a(!0,b.status)};b.send(this.composeQuery(c));return b},jsonp:function(c,a){this.authOptions.headers!==void 0&&Pusher.warn("Warn","To send headers with the auth request, you must use AJAX, rather than JSONP.");var b=document.createElement("script");Pusher.auth_callbacks[this.channel.name]=function(b){a(!1,b)};b.src=Pusher.channel_auth_endpoint+"?callback="+encodeURIComponent("Pusher.auth_callbacks['"+this.channel.name+
"']")+this.composeQuery(c);var e=document.getElementsByTagName("head")[0]||document.documentElement;e.insertBefore(b,e.firstChild)}}}).call(this);
var _require=function(){function c(a,c){document.addEventListener?a.addEventListener("load",c,!1):a.attachEvent("onreadystatechange",function(){(a.readyState=="loaded"||a.readyState=="complete")&&c()})}function a(a,e){var g=document.getElementsByTagName("head")[0],f=document.createElement("script");f.setAttribute("src",a);f.setAttribute("type","text/javascript");f.setAttribute("async",!0);c(f,function(){e()});g.appendChild(f)}return function(b,c){for(var g=0,f=0;f<b.length;f++)a(b[f],function(){b.length==
++g&&setTimeout(c,0)})}}();
(function(){!window.WebSocket&&window.MozWebSocket&&(window.WebSocket=window.MozWebSocket);if(window.WebSocket)Pusher.Transport=window.WebSocket,Pusher.TransportType="native";var c=(document.location.protocol=="http:"?Pusher.cdn_http:Pusher.cdn_https)+Pusher.VERSION,a=[];window.JSON||a.push(c+"/json2"+Pusher.dependency_suffix+".js");if(!window.WebSocket)window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0,window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR=!0,a.push(c+"/flashfallback"+Pusher.dependency_suffix+
".js");var b=function(){return window.WebSocket?function(){Pusher.ready()}:function(){window.WebSocket?(Pusher.Transport=window.WebSocket,Pusher.TransportType="flash",window.WEB_SOCKET_SWF_LOCATION=c+"/WebSocketMain.swf",WebSocket.__addTask(function(){Pusher.ready()}),WebSocket.__initialize()):(sockjsPath=c+"/sockjs"+Pusher.dependency_suffix+".js",_require([sockjsPath],function(){Pusher.Transport=SockJS;Pusher.TransportType="sockjs";Pusher.ready()}))}}(),e=function(a){var b=function(){document.body?
a():setTimeout(b,0)};b()},g=function(){e(b)};a.length>0?_require(a,g):g()})();

/*!!
 * Title Alert 0.7
 * 
 * Copyright (c) 2009 ESN | http://esn.me
 * Jonatan Heyman | http://heyman.info
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 */
 
/* 
 * @name jQuery.titleAlert
 * @projectDescription Show alert message in the browser title bar
 * @author Jonatan Heyman | http://heyman.info
 * @version 0.7.0
 * @license MIT License
 * 
 * @id jQuery.titleAlert
 * @param {String} text The text that should be flashed in the browser title
 * @param {Object} settings Optional set of settings.
 *	 @option {Number} interval The flashing interval in milliseconds (default: 500).
 *	 @option {Number} originalTitleInterval Time in milliseconds that the original title is diplayed for. If null the time is the same as interval (default: null).
 *	 @option {Number} duration The total lenght of the flashing before it is automatically stopped. Zero means infinite (default: 0).
 *	 @option {Boolean} stopOnFocus If true, the flashing will stop when the window gets focus (default: true).
 *   @option {Boolean} stopOnMouseMove If true, the flashing will stop when the browser window recieves a mousemove event. (default:false).
 *	 @option {Boolean} requireBlur Experimental. If true, the call will be ignored unless the window is out of focus (default: false).
 *                                 Known issues: Firefox doesn't recognize tab switching as blur, and there are some minor IE problems as well.
 *
 * @example $.titleAlert("Hello World!", {requireBlur:true, stopOnFocus:true, duration:10000, interval:500});
 * @desc Flash title bar with text "Hello World!", if the window doesn't have focus, for 10 seconds or until window gets focused, with an interval of 500ms
 */
;(function($){	
	$.titleAlert = function(text, settings) {
		// check if it currently flashing something, if so reset it
		if ($.titleAlert._running)
			$.titleAlert.stop();

		// override default settings with specified settings
		$.titleAlert._settings = settings = $.extend( {}, $.titleAlert.defaults, settings);

		// if it's required that the window doesn't have focus, and it has, just return
		if (settings.requireBlur && $.titleAlert.hasFocus)
			return;

		// originalTitleInterval defaults to interval if not set
		settings.originalTitleInterval = settings.originalTitleInterval || settings.interval;

		$.titleAlert._running = true;
		$.titleAlert._initialText = document.title;
		document.title = text;
		var showingAlertTitle = true;
		var switchTitle = function() {
			// WTF! Sometimes Internet Explorer 6 calls the interval function an extra time!
			if (!$.titleAlert._running)
				return;

		    showingAlertTitle = !showingAlertTitle;
		    document.title = (showingAlertTitle ? text : $.titleAlert._initialText);
		    $.titleAlert._intervalToken = setTimeout(switchTitle, (showingAlertTitle ? settings.interval : settings.originalTitleInterval));
		}
		$.titleAlert._intervalToken = setTimeout(switchTitle, settings.interval);

		if (settings.stopOnMouseMove) {
			$(document).mousemove(function(event) {
				$(this).unbind(event);
				$.titleAlert.stop();
			});
		}

		// check if a duration is specified
		if (settings.duration > 0) {
			$.titleAlert._timeoutToken = setTimeout(function() {
				$.titleAlert.stop();
			}, settings.duration);
		}
	};

	// default settings
	$.titleAlert.defaults = {
		interval: 500,
		originalTitleInterval: null,
		duration:0,
		stopOnFocus: true,
		requireBlur: false,
		stopOnMouseMove: false
	};

	// stop current title flash
	$.titleAlert.stop = function() {
		clearTimeout($.titleAlert._intervalToken);
		clearTimeout($.titleAlert._timeoutToken);
		document.title = $.titleAlert._initialText;

		$.titleAlert._timeoutToken = null;
		$.titleAlert._intervalToken = null;
		$.titleAlert._initialText = null;
		$.titleAlert._running = false;
		$.titleAlert._settings = null;
	}

	$.titleAlert.hasFocus = true;
	$.titleAlert._running = false;
	$.titleAlert._intervalToken = null;
	$.titleAlert._timeoutToken = null;
	$.titleAlert._initialText = null;
	$.titleAlert._settings = null;


	$.titleAlert._focus = function () {
		$.titleAlert.hasFocus = true;

		if ($.titleAlert._running && $.titleAlert._settings.stopOnFocus) {
			var initialText = $.titleAlert._initialText;
			$.titleAlert.stop();

			// ugly hack because of a bug in Chrome which causes a change of document.title immediately after tab switch
			// to have no effect on the browser title
			setTimeout(function() {
				if ($.titleAlert._running)
					return;
				document.title = ".";
				document.title = initialText;
			}, 1000);
		}
	};
	$.titleAlert._blur = function () {
		$.titleAlert.hasFocus = false;
	};

	// bind focus and blur event handlers
	$(window).bind("focus", $.titleAlert._focus);
	$(window).bind("blur", $.titleAlert._blur);
})(jQuery);


var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var f=null,g=window,h="push",i="replace",k="length";var m=g,r=document,u=m.location,w=function(){},x=/\[native code\]/,A=function(a,b,c){return a[b]=a[b]||c},C=function(a){for(var b=0;b<this[k];b++)if(this[b]===a)return b;return-1},D=function(){var a;if((a=Object.create)&&x.test(a))a=a(f);else{a={};for(var b in a)a[b]=void 0}return a},E=A(m,"gapi",{});var F;F=A(m,"___jsl",D());A(F,"I",0);A(F,"hel",10);var G=function(){var a=u.href,b;if(F.dpo)b=F.h;else{b=F.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),e=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||e.exec(a)))try{b=decodeURIComponent(a[2])}catch(d){}}return b},I=function(a){return A(A(F,"H",D()),a,D())};var J=A(F,"perf",D()),L=A(J,"g",D()),M=A(J,"i",D());A(J,"r",[]);D();D();var N=function(a,b,c){var e=J.r;"function"===typeof e?e(a,b,c):e[h]([a,b,c])},P=function(a,b,c){b&&0<b[k]&&(b=O(b),c&&0<c[k]&&(b+="___"+O(c)),28<b[k]&&(b=b.substr(0,28)+(b[k]-28)),c=b,b=A(M,"_p",D()),A(b,c,D())[a]=(new Date).getTime(),N(a,"_p",c))},O=function(a){return a.join("__")[i](/\./g,"_")[i](/\-/g,"_")[i](/\,/g,"_")};var Q=D(),R=[],S;S={a:"callback",g:"sync",e:"config",c:"_c",d:"h",l:"platform",i:"jsl",TIMEOUT:"timeout",f:"ontimeout",k:"mh",j:"u"};R[h]([S.i,function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?F[b]=A(F,b,[]).concat(c):A(F,b,c)}if(b=a[S.j])a=A(F,"us",[]),a[h](b),(b=/^https:(.*)$/.exec(b))&&a[h]("http:"+b[1])}]);var T=decodeURI("%73cript");Q.m=function(a){var b=F.ms||"https://apis.google.com";a=a[0];var c;if(!(c=!a))c=0<=a.indexOf("..");if(c)throw"Bad hint";return b+"/"+a[i](/^\//,"")};
var U=function(a){return a.join(",")[i](/\./g,"_")[i](/-/g,"_")},W=function(a,b){for(var c=[],e=0;e<a[k];++e){var d=a[e];d&&0>C.call(b,d)&&c[h](d)}return c},aa=/^[\/_a-zA-Z0-9,.\-!:=]+$/,ba=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,ca=/\/cb=/g,da=/\/\//g,X=function(a){var b=r.createElement(T);b.setAttribute("src",a);b.async="true";(a=r.getElementsByTagName(T)[0])?a.parentNode.insertBefore(b,a):(r.head||r.body||r.documentElement).appendChild(b)},Z=function(a,b){var c=b||{};"function"==
typeof b&&(c={},c[S.a]=b);var e=c,d=e&&e[S.c];if(d)for(var j=0;j<R[k];j++){var l=R[j][0],n=R[j][1];n&&Object.prototype.hasOwnProperty.call(d,l)&&n(d[l],a,e)}e=a?a.split(":"):[];if(!(d=c[S.d]))if(d=G(),!d)throw"Bad hint";j=d;l=A(F,"ah",D());if(!l["::"]||!e[k])Y(e||[],c,j);else{d=[];for(n=f;n=e.shift();){var q=n.split("."),q=l[n]||l[q[1]&&"ns:"+q[0]||""]||j,v=d[k]&&d[d[k]-1]||f,y=v;if(!v||v.hint!=q)y={hint:q,b:[]},d[h](y);y.b[h](n)}var B=d[k];if(1<B){var z=c[S.a];z&&(c[S.a]=function(){0==--B&&z()})}for(;e=
d.shift();)Y(e.b,c,e.hint)}},Y=function(a,b,c){var e=a.sort();a=[];for(var d=void 0,j=0;j<e[k];j++){var l=e[j];l!=d&&a[h](l);d=l}a=a||[];var n=b[S.a],q=b[S.e],d=b[S.TIMEOUT],v=b[S.f],y=f,B=!1;if(d&&!v||!d&&v)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var e=A(I(c),"r",[]).sort(),z=A(I(c),"L",[]).sort(),H=[].concat(e),V=function(a,b){if(B)return 0;m.clearTimeout(y);z[h].apply(z,p);var d=((E||{}).config||{}).update;d?d(q):q&&A(F,"cu",[])[h](q);if(b){P("me0",
a,H);try{$(function(){var a;a=c===G()?A(E,"_",D()):D();a=A(I(c),"_",a);b(a)})}finally{P("me1",a,H)}}n&&n();return 1};0<d&&(y=m.setTimeout(function(){B=!0;v()},d));var p=W(a,z);if(p[k]){var p=W(a,e),s=A(F,"CP",[]),t=s[k];s[t]=function(a){if(!a)return 0;P("ml1",p,H);var b=function(){s[t]=f;return V(p,a)};if(0<t&&s[t-1])s[t]=b;else for(b();(b=s[++t])&&b(););};if(p[k]){var K="loaded_"+F.I++;E[K]=function(a){s[t](a);E[K]=f};a=c.split(";");a=(d=Q[a.shift()])&&d(a);if(!a)throw"Bad hint:"+c;d=a=a[i]("__features__",
U(p))[i](/\/$/,"")+(e[k]?"/ed=1/exm="+U(e):"")+("/cb=gapi."+K);j=d.match(da);l=d.match(ca);if(!l||!(1===l[k]&&ba.test(d)&&aa.test(d)&&j&&1===j[k]))throw"Bad URL "+a;e[h].apply(e,p);P("ml0",p,H);b[S.g]||m.___gapisync?(b=a,"loading"!=r.readyState?X(b):r.write("<"+T+' src="'+encodeURI(b)+'"></'+T+">")):X(a)}else s[t](w)}else V(p)};var $=function(a){if(F.hee&&0<F.hel)try{return a()}catch(b){F.hel--,Z("debug_error",function(){g.___jsl.hefn(b)})}else return a()};E.load=function(a,b){return $(function(){return Z(a,b)})};L.bs0=g.gapi._bs||(new Date).getTime();N("bs0");L.bs1=(new Date).getTime();N("bs1");delete g.gapi._bs;})();
gapi.load("client",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"services":{},"deviceType":"desktop","lexps":[69,100,71,98,96,79,74,45,17,86,82,92,94,61,90,30],"inline":{"css":1},"report":{},"oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay"},"isPlusUser":false,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv"},":socialhost:":"https://plusone.google.com","plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv"},"recobox":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobox?bsv"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv"},"hangout":{"url":"https://talkgadget.google.com/widget/go?bsv"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?bsv"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv"}},"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.sqZYWQ5C8Ko.O/m\u003d__features__/am\u003dQQ/rt\u003dj/d\u003d1/rs\u003dAItRSTPjTMFi86_vA6VZ2jAa4YutQ3Lwdg","u":"https://apis.google.com/js/client.js","hee":true,"fp":"82aabf5ff7c16931d1eed28ededb20c21b3067f0","dpo":false},"fp":"82aabf5ff7c16931d1eed28ededb20c21b3067f0","annotation":["autocomplete","profile"],"bimodal":[]}});


window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"' +
                   ' type="text/javascript"><' + '/script>');
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["https://mts0.googleapis.com/vt?lyrs=m@207000000\u0026src=api\u0026hl=en\u0026","https://mts1.googleapis.com/vt?lyrs=m@207000000\u0026src=api\u0026hl=en\u0026"],null,null,null,null,"m@207000000"],[["https://khms0.googleapis.com/kh?v=124\u0026hl=en\u0026","https://khms1.googleapis.com/kh?v=124\u0026hl=en\u0026"],null,null,null,1,"124"],[["https://mts0.googleapis.com/vt?lyrs=h@207000000\u0026src=api\u0026hl=en\u0026","https://mts1.googleapis.com/vt?lyrs=h@207000000\u0026src=api\u0026hl=en\u0026"],null,null,"imgtp=png32\u0026",null,"h@207000000"],[["https://mts0.googleapis.com/vt?lyrs=t@130,r@207000000\u0026src=api\u0026hl=en\u0026","https://mts1.googleapis.com/vt?lyrs=t@130,r@207000000\u0026src=api\u0026hl=en\u0026"],null,null,null,null,"t@130,r@207000000"],null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=69\u0026hl=en\u0026","https://khms1.googleapis.com/kh?v=69\u0026hl=en\u0026"],null,null,null,null,"69"],[["https://mts0.googleapis.com/mapslt?hl=en\u0026","https://mts1.googleapis.com/mapslt?hl=en\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en\u0026"]],[["https://mts0.googleapis.com/vt?hl=en\u0026","https://mts1.googleapis.com/vt?hl=en\u0026"]]],["en","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com"],["https://maps.gstatic.com/intl/en_ALL/mapfiles/api-3/10/20","3.10.20"],[1546407822],1.0,null,null,null,null,0,"",null,null,1,"https://khms.googleapis.com/mz?v=124\u0026","AIzaSyApTRZxR9qAHBk8vBJDwELX3ExZs5eATIE","https://earthbuilder.google.com","https://earthbuilder.googleapis.com"], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
  getScript("https://maps.gstatic.com/intl/en_ALL/mapfiles/api-3/10/20/main.js");
})();
