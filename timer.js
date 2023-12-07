
let countdownTime;
let interval;
let distance = 0;

// grab the cards and save in variables
let daysCard = document.getElementById("daysCard");
let hoursCard = document.getElementById("hoursCard");
let minutesCard = document.getElementById("minutesCard");
let secondsCard = document.getElementById("secondsCard");


function setDate() {
  event.preventDefault()
  countdownTime = new Date(document.getElementById("countdownTime").value).getTime();
  
  // Validation der Datumseingabe
  if((countdownTime - (new Date().getTime())) < 0){
    clearInterval(interval);
    alert ("Die angegebene Zeit liegt in der Vergangenheit!! Du depp!!");
    distance = 0;
    location.reload();
  }
  interval = setInterval(countDown, 1000);
}


// wird durch das intervall jede Sekunde ausgeführt
function countDown() {

  // Get miliseconds of todays date
  let now = new Date().getTime();
  console.log('countdown: ' + countdownTime);
    
  // Find the distance between now and the count down date
  distance = countdownTime - now;
  console.log('Übrige Zeit: ' + distance);

  // Unterbreche den Countdown, wenn Countdown kleiner als 0
  if (distance <= 0) {
    clearInterval(interval);
    distance = 0;
    alert ("Die Zeit ist abgelaufen.");
  }
    

  // Time calculations for days, hours, minutes and seconds
  if(!isNaN(distance)) {

     // Update the "Tage"-Card with the remaining days
     daysCard.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24)) + " days";

     //update Stunden-Card with remaining hours
     hoursCard.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + " Hours";
   
     //update Minuten-Card with remaining Minutes
     minutesCard.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + " Minutes";
   
     //update Seconds-Card with remaining Seconds
     secondsCard.innerHTML = Math.floor((distance % (1000 * 60)) / 1000) + " Seconds";
   
  }
  
  else {
    clearInterval(interval);
    alert ("Falsche Zeitangabe");
    distance = 0;
    location.reload();
  }
    

}