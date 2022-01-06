function startTimer() {
  timer();
  setInterval(function () {
    timer();
  }, 500);
}

function timer() {
  var dateLocal = new Date();
  var currentTime = Math.floor(dateLocal);
  var alphaTime = Math.floor(new Date(Date.UTC(2021, 5, 7, 16, 0, 0, 0)));
  var timer = Math.floor((currentTime - alphaTime) / 1000);

  days = Math.floor(timer / 24 / 60 / 60);
  hours = Math.floor(timer / 60 / 60 - days * 24);
  minutes = Math.floor(timer / 60 - (days * 24 * 60 + hours * 60));
  seconds = Math.floor(
    timer - (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60)
  );
  if (days < 10) days = "0" + days;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  document.querySelector("#time").textContent =
    days + ":" + hours + ":" + minutes + ":" + seconds;
}
