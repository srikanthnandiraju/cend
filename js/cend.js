var App = {};
App.baseURL = "http://cend.in/";

// Global Event Bus to fire and listen to events
App.Events = {
    emit: function (event_name, event_payload) {
        $('body').trigger(event_name, event_payload);
    },
    listen: function (event_name, callback) {
        $('body').unbind(event_name).bind(event_name, function (e, data) {
            callback(data);
        });
    }
};

App.FullScreen = {
    show: function (screenurl) {
        $("#fullscreen_stage").load(screenurl);
        $('#fullscreenElement').addClass('open');
    },
    hide: function () {
        $('#fullscreenElement').removeClass('open');
    }
};

$('.close').on('click', function (event) {
    $('#fullscreenElement').removeClass('open');
});


var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
};

function getUrlParams(prop) {
    var params = {};
    var search = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 1));
    var definitions = search.split('&');
    definitions.forEach(function (val, key) {
        var parts = val.split('=', 2);
        params[parts[0]] = parts[1];
    });
    return (prop && prop in params) ? params[prop] : params;
}

function firstReadAndSetParameters() {
    var params = getUrlParams();
    var from = params.from;
    var to = params.to;
    var message = params.message;
    if (from != undefined) {
        $('#from').html(from);
        document.title = from + ' sent a card for you';
    } else {
        $("#from").remove();
    }
    if (to != undefined) {
        $('#to').html(to);
    } else {
        $("#to").remove();
    }
    if (message != undefined) {
        $('#message').html(message);
    }
}

App.Events.listen("show-edit-card", function (data) {
    App.FullScreen.show("edit_card.html");
});
App.Events.listen("card-edited", function (payload) {
    $("#to").html(payload.to);
    $("#message").html(payload.message);
    $("#from").html(payload.from);
});


App.Events.listen("show-action-bar", function (payload) {
    $("#action-bar").show("fast");
});

App.Events.listen("hide-action-bar", function (payload) {
    $("#action-bar").hide();
});

function initCard() {
    $("#action-bar").hide();
    // $("#share-button").hide();
    // $("#create-button").click(function (e) {
    //     $("#share-button").show();
    // });
}