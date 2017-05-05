$.get("https://api.whatdoestrumpthink.com/api/v1/quotes/", function(data){
  var length = data.messages.non_personalized.length;
  var textToTweet;



  $("#getQuote").click(function() {           
    $("#newQuote").html('\"' + data.messages.non_personalized[Math.floor(Math.random() * length)] + '\"');
    var colors = ["#69c9ca", "#981b1e", "#fcd21b", "#C91318", "#3cbb35", "#336297", "#9F0004", "#577EAA", "#67D062"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    $("#content").animate({backgroundColor: randomColor});

    textToTweet = $("#newQuote").text();
  });        


  $("#tweetQuote").click(function() {
    var windowObjectReference =  window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(textToTweet + " -Donald Trump"));
  });
});
