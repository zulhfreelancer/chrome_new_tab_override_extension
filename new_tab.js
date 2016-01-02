$(function(){

	var url = "http://www.santapanminda.com/api.php?format=json";
	var quote = $("#quote"); // id="quote" inside the html file

	// send HTTP GET request to the quote API server
	$.get(url, function(data){

		// convert the data that we get from the server to JSON
		var new_quote = JSON.parse(data);

		// change the h1#quote with the new converted quote
		quote.text(new_quote.posts[0].post.content);

	});

});