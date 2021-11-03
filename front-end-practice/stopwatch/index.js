let time = 0;

let start = document.getElementById('start');
let timer = document.getElementById('time');
let stop = document.getElementById('stop');
let timeIntervals = document.getElementById("timeIntervals");
let intervalId;
let intervals = [];

start.addEventListener('click', () => {
  intervalId = setInterval(() => {
    time += 1;
    timer.innerHTML = `${time}`;
  }, 1000);
})

stop.addEventListener('click', () => {
  intervals.push(time);
  clearInterval(intervalId);
  // reset timer
  time = 0;
  timer.innerHTML = '0';
  let newInterval = document.createElement('p');
  newInterval.innerHTML = intervals[intervals.length - 1];
  timeIntervals.appendChild(newInterval);
})
