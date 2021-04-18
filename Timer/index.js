"use strict";

var startingMinutes = document.querySelector("#zeiteingabe").valueAsNumber; //string in Number umgewandelt
var time = startingMinutes * 60;
var minutes = Math.floor(time / 60);
var seconds = time % 60;
let myInterval; //setInterval als Variable deklariert
const RESETANZEIGE = 0;

const COUNTDOWNANZEIGE = document.querySelector("#countdown");
const COUNTDOWNSTARTBUTTON = document.querySelector("#startbutton");
const COUNTDOWNRESETBUTTON = document.querySelector("#resetbutton");
const COUNTDOWNPAUSEBUTTON = document.querySelector("#pausebutton");

COUNTDOWNSTARTBUTTON.addEventListener("click", startInterval);
COUNTDOWNRESETBUTTON.addEventListener("click", resetCountdown);
COUNTDOWNPAUSEBUTTON.addEventListener("click", pauseCountDown);

function startInterval() {
   myInterval = setInterval(function () {
      //diesen interval als Variable
      minutes = Math.floor(time / 60); //zeigt Minuten an
      seconds = time % 60; //zeigt Sekunden an

      COUNTDOWNANZEIGE.innerHTML = minutes + " : " + seconds;
      time--;
   }, 1000);
}
function pauseCountDown() {
   clearInterval(myInterval);
   COUNTDOWNANZEIGE.innerHTML = minutes + " : " + seconds;
   COUNTDOWNSTARTBUTTON.value = "Weiter";
}
function resetCountdown() {
   clearInterval(myInterval); //um interval zu löschen
   COUNTDOWNANZEIGE.innerHTML = RESETANZEIGE;
}
