$(function () {
	console.log("Hello world!");
	callAJAX();
});

function callAJAX() {
	console.log("Making AJAX call...");
	$.ajax({
			type: "GET",
			cache: false,
			url: 'https://randimg.herokuapp.com/',
			dataType: "jsonp",
			contentType: "application/jsonp",
			jsonpCallback: 'displayRandomImage'
	});
}

function displayRandomImage(responseJSON) {
	// debugger;
	var imgUrl = responseJSON.url;
	console.log("Response recieved! Image URL = " + imgUrl);
	$('#random-image').html("<img src='" + imgUrl + "'>");
}