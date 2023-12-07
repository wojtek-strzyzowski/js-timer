
let countdownTime
//let countDownDate = new Date().getTime();
// Update the count down every 1 second
let interval = setInterval(countDown, 1000);


function setDate() {
  event.preventDefault()
  countdownTime = new Date(document.getElementById("countdownTime").value).getTime();
  interval
}



function countDown() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countdownTime - now;
    
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  // Time calculations for days, hours, minutes and seconds
  if(countdownTime !== NaN && countdownTime !== undefined) {
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
    


  // Update the "Tage"-Card with the remaining days
  document.getElementById("daysCard").innerHTML = days + " days";

  //update Stunden-Card with remaining hours
  document.getElementById("hoursCard").innerHTML = hours + " Hours";

  //update Minuten-Card with remaining Minutes
  document.getElementById("minutesCard").innerHTML = minutes + " Minutes";

  //update Seconds-Card with remaining Seconds
  document.getElementById("secondsCard").innerHTML = seconds + " Seconds";
    
  // If the count down is over, write some text 
  if (distance <= 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "Zeit ist abgelaufen";
  }
}

let timer;
let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");
let timerDisplay = document.getElementById("timer");

function startTimer() {
    let hours = parseInt(hoursInput.value) || 0;
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds > 0) {
        timer = setInterval(function() {
            if (totalSeconds <= 0) {
                clearInterval(timer);
                timerDisplay.innerHTML = "00:00:00";
            } else {
                let hours = Math.floor(totalSeconds / 3600);
                let minutes = Math.floor((totalSeconds % 3600) / 60);
                let seconds = totalSeconds % 60;

                timerDisplay.innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
                totalSeconds--;
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    timerDisplay.innerHTML = "00:00:00";
    hoursInput.value = 0;
    minutesInput.value = 0;
    secondsInput.value = 0;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}