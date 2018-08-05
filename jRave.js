$(document).ready(()=>{

  var raveAlert = {},
  ravePromise = Promise.resolve(getFeed()); //since request is async, returned value is a promise
    ravePromise.then( (result) => {         //parse promise into raveAlert var
    raveAlert.date = result.date;
    raveAlert.desc = result.desc;
    raveAlert.title = result.title;
  });

  console.log(raveAlert.date);

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
  }
return getLatest(alertList);
}

function getLatest(list) {
  var mostRecentDate = 0,
  mostRecentAlert;

  for (let i = 0; i < list.length; i++) {
      let currentDate = Date.parse(list[i].date);

      if (currentDate > mostRecentDate) {
        mostRecentDate = currentDate;
        mostRecentAlert = list[i];
      }
  }
  return mostRecentAlert;
}