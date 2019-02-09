function getUrlParams(prop) {
    var params = {};
    var search = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 1));
    var definitions = search.split('&');
    definitions.forEach(function(val, key) {
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
    } else {
        $('#message').remove();
    }
}