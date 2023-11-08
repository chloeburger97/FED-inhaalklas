// JavaScript Document

// het audio element opzoeken
// en die een naam (muziek) geven
// zodat we er straks iets mee kunnen doen
var muziek = document.querySelector("audio");

// zelfde voor de play button
var buttonplay = document.querySelector("#play");

// de play button luistert naar kliks
// als er op de button geklikt wordt, wordt de functie muziekspeler uitgevoerd
buttonplay.addEventListener("click", muziekspeler);


function muziekspeler() {
    if (muziek.paused == true) {
        muziek.play();
        buttonplay.classList.add("playing")
    } else {
        muziek.pause();
        buttonplay.classList.remove("playing")
    }
}