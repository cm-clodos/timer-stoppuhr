"use strict";

var startMinuten = 0;
var zeit = startMinuten * 60;
let myCount;
var minuten = Math.floor(zeit / 60);
var sekunden = zeit % 60;

const STOPPUHRSTART = document.querySelector("#startbutton-stoppuhr");
const STOPPUHRSTOPP = document.querySelector("#pausebutton-stoppuhr");
const STOPPUHRANZEIGE = document.querySelector("#countup");

STOPPUHRSTART.addEventListener("click", startStoppUhr);
STOPPUHRSTOPP.addEventListener("click", pauseStoppUhr);

function startStoppUhr() {
   myCount = setInterval(function () {
      minuten = Math.floor(zeit / 60);
      sekunden = zeit % 60;

      STOPPUHRANZEIGE.innerHTML = minuten + " : " + sekunden;
      zeit++;
   }, 1000);
}

function pauseStoppUhr() {
   clearInterval(myCount);
   STOPPUHRANZEIGE.innerHTML = minuten + " : " + sekunden;
   STOPPUHRSTART.value = "Weiter"; // Value des Buttons ändern
}
