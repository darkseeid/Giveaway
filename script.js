var presentdate = new Date();
var targetd = new Date(presentdate.getTime() + (10*24*60*60*1000));
var dataformat = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
var dateshow = targetd.toLocaleDateString('en-US', dataformat);
document.getElementById("end").textContent = dateshow;

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);

const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".timers .times:nth-child(1) .counts").innerText = formatTime(days);
  document.querySelector(".timers .times:nth-child(2) .counts").innerText = formatTime(hours);
  document.querySelector(".timers .times:nth-child(3) .counts").innerText = formatTime(minutes);
  document.querySelector(".timers .times:nth-child(4) .counts").innerText = formatTime(seconds);

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerText = "Countdown Completed!";
  }
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

updateCountdown(); // Call updateCountdown once to start the countdown immediately