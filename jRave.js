// rave jQuery coded by @JonathanHosein

var feed1, feed3, feed4;

$.get("https://www.getrave.com/rss/tntech/channel1", function (data) {
    $(data).find("item").each(function () {
        feed1 = $(this);
    });
});

//Feed 2 is used for testing purposes.

$.get("https://www.getrave.com/rss/tntech/channel3", function (data) {
    $(data).find("item").each(function () {
        feed3 = $(this);
   });
});

$.get("https://www.getrave.com/rss/tntech/channel4", function (data) {
    $(data).find("item").each(function () {
        feed4 = $(this);
   });
});

var raveFeeds = [feed1, feed3, feed4];
var streamingFeed;
var streamingFeedDate = new Date();
var date = new Date();

for (let index = 0; index < raveFeeds.length; index++) {
    
    date = Date.parse(raveFeeds[index].find("dc:date").text); //Added Date.Parse 3/25... never tested
    
    if(date > streamingFeed)
    {
        streamingFeed = raveFeeds[index];
        streamingFeedDate = date;

    }
};

$("#description").text(streamingFeed.find("description").text());
$("#pubDate").text(streamingFeed.find("pubDate").text());   
