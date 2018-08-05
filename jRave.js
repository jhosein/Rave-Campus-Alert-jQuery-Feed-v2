$(document).ready(()=>{

	var alerts = getFeed();
})


async function getFeed() {

var feedList = [
"https://www.getrave.com/rss/tntech/channel1",
"https://www.getrave.com/rss/tntech/channel3",
"https://www.getrave.com/rss/tntech/channel4"
],

alertList = [];


for (let i = 0; i < feedList.length; i++){
  var alertData = {};
  
  await $.ajax({
    url : feedList[i],
    type: "get",
    async: true,
    success : (data) => {
      alertData.date = $(data).find("channel").children("Item").find(":last-child").text();
      alertData.title = $(data).find("channel").children("Item").find("title").text();
      alertData.desc = $(data).find("channel").children("Item").find("description").text();
    },
    error: ()=>{
      alert("error loading feed");
    }
  });






  alertList.push(alertData);
  console.log(alertList);
}
return alertList;
}