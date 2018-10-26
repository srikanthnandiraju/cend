Path.map("#/home").to(function() {
	$("#title_text").html("HOME");
	$("#stage").load("screens/home.html");
});

Path.map("#/create").to(function() {
	$("#title_text").html("CREATE CARD");
	$("#stage").load("screens/create.html");
});


Path.map("#/share").to(function() {
	$("#title_text").html("SHARE");
	$("#stage").load("screens/share.html");
});

Path.root("#/home");
Path.listen();

