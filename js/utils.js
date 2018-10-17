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

function handleDomContentLoaded(event) {
    var params = getUrlParams();
    var from = params.from;
    var to = params.to;
    var message = params.message;
    console.log("From " + from);
    if (from != undefined) {
        document.querySelector('#from').innerHTML = from;
        document.title = from + ' sent a card for you';
    }
    if (to != undefined) {
        document.querySelector('#to').innerHTML = to;
    }
    if (message != undefined) {
        document.querySelector('#message').innerHTML = message;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    handleDomContentLoaded();
});