$(document).ready(()=>{

	getFeed();
})


function getFeed() {

var feedList = [
"https://www.getrave.com/rss/tntech/channel1",
"https://www.getrave.com/rss/tntech/channel3",
"https://www.getrave.com/rss/tntech/channel4"
]

//TODO create array with feed data
$.get("https://www.getrave.com/rss/tntech/channel1", (data) => {
		console.log(data);
    
    var alertDate = $(data).find("channel").children("Item").find(":last-child").text();
    console.log(alertDate);
    console.log(Date.parse(alertDate));
    
});

}