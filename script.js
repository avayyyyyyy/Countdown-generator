const dayLeft = document.getElementById("day-left");
const hourLeft = document.getElementById("hour-left");
const minuteLeft = document.getElementById("minute-left");
const secondLeft = document.getElementById("second-left");
const endDate = document.getElementById("endDate");

const finalDate = "25 July 2026 05:30 AM";

endDate.innerText = `End Date Is : ${finalDate}`;

timer = () => {
  const final = new Date(finalDate);
  const now = new Date();
  const diff = (final - now) / 1000;
  dayLeft.innerText = Math.floor(diff / 3600 / 24);
  hourLeft.innerText = Math.floor(diff / 3600) % 24;
  minuteLeft.innerText = Math.floor(diff / 60) % 60;
  secondLeft.innerText = Math.floor(diff) % 60;

  timer();
};

setInterval(() => {
  timer();
}, 1000);
// timer();

// 1 Days = 24 hours
// 60 min = 3600 sec
