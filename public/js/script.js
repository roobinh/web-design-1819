(() => {
console.log("script.js imported.")

var currentParam = window.location.pathname.split('/')[2]; //i.e. 0, 1, 2, 3...

// play song on load
// window.onload = function() {
//     document.getElementById("audio").play();
//     var audio = document.getElementById("audio")
//     audio.volume = 0.1;
// }

// button onclicks
document.getElementById('button1').addEventListener("click", buttonRight)
document.getElementById('button2').addEventListener("click", buttonLeft)
document.getElementById('button3').addEventListener("click", buttonDown)

checkForValidDate();
checkForValidButton();

//Als het binnen een uur gaat regenen, speel rain.mp3. Else, speel nature.mp3.

var forecast = document.getElementById('rainforecast').innerHTML.split(' ');
console.log(forecast)

if(forecast[7] == "0") {
    var audio1 = new Audio('../mp3/rain.mp3')
} else {
    var audio1 = new Audio('../mp3/nature.mp3');
}

audio1.volume = 0.1;

document.onkeydown = function(e) {
    if(e.keyCode == 37) { // left Key
        buttonLeft();
    } else if(e.keyCode == 38) { // up key
        buttonUp();
    } else if(e.keyCode == 39) { //right key
        buttonRight();
    } else if(e.keyCode == 40) { //down key
        buttonDown();
    } else if(e.keyCode == 9) {
        console.log("play audio");
        audio1.play();
    }
}

function buttonLeft() {
    if(currentParam > 0) {
        var newDate = parseInt(currentParam) - 1; 
        window.location.href = "/home/" + newDate;
    } else {
        console.log("Niet mogelijk om terug te gaan")
    }
}

function buttonUp() {
    if(currentParam == 0) {
        detailsDiv = document.getElementById('details')
        detailsDiv.setAttribute('style', 'display: block');
    }
}

function buttonRight() {
    var newDate = parseInt(currentParam) + 1; 
    window.location.href = "/home/" + newDate;
}

function buttonDown() {
    window.location.href = "/home/0";
}

function checkForValidDate() {
    if(currentParam > 6) {
        document.getElementById('error').setAttribute('style', 'display: block');
        document.getElementById('information').setAttribute('style', 'display: none');
    }
}

function checkForValidButton() {
    if(currentParam == 0) {
        document.getElementById('button2').setAttribute('style', 'display: none');
        document.getElementById('button3').setAttribute('style', 'display: none');
    } else {
        document.getElementById('buttons').setAttribute('style', 'display: none');
    }
}

})();
