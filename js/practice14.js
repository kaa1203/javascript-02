const refs = {
  day: document.querySelector("#day"),
  hour: document.querySelector("#hour"),
  date: document.querySelector("#date"),
  mer: document.querySelector("#time"),
}
let mer = "AM";

function addZero(time) {
  if (time < 10) { time = "0" + time }
  return time;
}

function daySelector(day) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  return days[day];
}

function monthSelector(month) {
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

  return months[month];
}

function clock() {
  setInterval(() => {
    const date = new Date();  
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    if (hours > 12) {
      hours -= 12;
      mer = "pm";
    }

    refs.hour.innerText = `${addZero(hours)} : ${addZero(minutes)} : ${addZero(seconds)}`;
    refs.day.innerText = daySelector(date.getDay());
    refs.date.innerText = `${monthSelector(date.getMonth())} ${addZero(date.getDate())}. ${date.getFullYear()}`;
    refs.mer.innerText = mer;
  }, 1000);
}

clock();