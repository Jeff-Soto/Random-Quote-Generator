var APIurl = 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=general';
var headers={ 
	'X-Mashape-Key': 'nDegI0wJR6mshIjYx6LMEfYdXB3Lp1oa3FRjsnfnpNhjfD2Xjb', 
 	'Content-Type': 'application/x-www-form-urlencoded',
 	'Accept': 'application/json'
 };


var info;
var getQuote = function(){
	$.ajax({
		type: 'GET',
		url: APIurl,
		headers: headers,
		success: function(response){
			response= JSON.parse(response)
			console.log("success is firing auto");
			processQuotes(response);
			info = response;
		},
		error: function(err){
			console.log("An error occured", err);
		}
	})
}

var tweet = function(){
	var textToTweet = info.quote + "\n -" + info.author;
	 if (textToTweet.length > 140) {
	 	alert('Tweet should be less than 140 Chars');
	 }
	 else {
		var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
		window.open(twtLink,'_blank');
 	}	
}
var processQuotes= function(param){
	$('.quotes .quote').html("<em>&quot;" + param.quote + "&quot;</em>");
	$('.quotes .quoteAuthor').html("<strong>- " + param.author + "</strong>");
}

$(document).ready(function() {

	getQuote();

    $("#newQuote").on("click", function(){
      getQuote();
     });

    $("#tweetQuote").on("click", function(){
     	tweet();
     });
});
