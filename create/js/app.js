// ------------------- EVENTS ON ELEMENTS -------------------------------
$('body').bind('refresh-navigation', function(e, data) {
	setupNavigation();
});

$(document.body).on('click', '.navigation-item', function() {
	var api_url = $(this).attr("data-api-url");
	document.location.href = api_url;
});
$(document.body).on('click', '.tile-item', function() {
	var details_url = $(this).attr("data-details-url");
	document.location.href = details_url;
});
$(document.body).on('click', '.save-navigation', function() {
	var api_url = $(this).attr("data-api-url");
	$("#feed").html('');
	parseRSS(api_url);
	$('body').trigger('hide-side-nav');
});

function showFullScreen() {
	$('#fullscreenElement').addClass('open');
}


$('.close').on('click', function(event) {
	$('#fullscreenElement').removeClass('open');
});

// ------------------------------ GLOBALS ------------------------------
var ALL_USERS, ALL_DEVICES, ALL_FEEDBACKS, ALL_OPTINS;

var CARD_DESIGNS = {
	announce : 2,
	birthday : 4,
	christmas : 7,
	newyear : 3
};

$(document.body).on('click', '.show-screen', function() {
	var api_url = $(this).attr("data-api-url");
	document.location.href = api_url;
});

// ------------------------------ SCREENS ------------------------------
function createCard() {
	document.location.href = "#/create";
}

function showPoems() {
	document.location.href = "#/poems";
}

function showShare() {
	document.location.href = "#/share";
}

function showSearchScreen() {
	$("#fullscreen_stage").load("screens/search.html");
	showFullScreen();
}

var layouts = [4, 4, 4];
var index = -1;
function getSpan() {
	index++;
	if (index >= layouts.length) {
		index = 0;
	};
	return layouts[index];
}


$(document).ajaxStart(function() {
	NProgress.start();
});

$(document).ajaxStop(function() {
	NProgress.done();
});

var PREVIEW_URL = "";
var PREVIEW_CARD = {};
$('body').bind('preview-card', function(e, data) {
	var data = data || e.data;
	$("#fullscreen_stage").load("screens/preview.html");
	showFullScreen();
});

function loadGAPI() {
	gapi.client.setApiKey('AIzaSyCMvXG9CB8wfVNttNn6i8KAAyZ7xFGxfRI');
	gapi.client.load('urlshortener', 'v1', function() {
	});
}

window.onload = loadGAPI();

function makeShort(longUrl) {
	var request = gapi.client.urlshortener.url.insert({
		'resource' : {
			'longUrl' : longUrl
		}
	});
	request.execute(function(response) {
		if (response.id != null) {
			str = "<b>Long URL:</b>" + longUrl + "<br>";
			str += "<b>Short URL:</b> <a href='" + response.id + "'>" + response.id + "</a><br>";
			document.getElementById("output").innerHTML = str;
		} else {
			alert("error: creating short url");
		}
	});
}
