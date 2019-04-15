(() => {

console.log("script.js imported.")

// window.onload = function() {
//     document.getElementById("audio").play();
//     var audio = document.getElementById("audio")
//     audio.volume = 0.1;
// }

// button onclicks
document.getElementById('button1').addEventListener("click", buttonRight)
document.getElementById('button2').addEventListener("click", buttonLeft)
document.getElementById('button3').addEventListener("click", buttonDown)
document.getElementById('button4').addEventListener("click", buttonUp)

var currentParam = window.location.pathname.split('/')[2]; //i.e. 0, 1, 2, 3...
checkForValidDate();
checkForValidButton();

document.onkeydown = function(e) {
    if(e.keyCode == 37) { // left Key
        buttonLeft();
    } else if(e.keyCode == 38) { // up key
        buttonUp();
    } else if(e.keyCode == 39) { //right key
        buttonRight();
    } else if(e.keyCode == 40) { //down key
        buttonDown();
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
    console.log("param = 0");

    if(currentParam == 0) {
        document.getElementById('button2').setAttribute('style', 'display: none');
    }
}

})();