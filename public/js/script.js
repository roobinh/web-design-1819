console.log("script.js imported.")

var currentParam = window.location.pathname.split('/')[2]; //i.e. 0, 1, 2, 3...
checkForValidDate(currentParam);

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
    detailsDiv = document.getElementById('details')
    detailsDiv.setAttribute('style', 'display: block');
}

function buttonRight() {
    var newDate = parseInt(currentParam) + 1; 
    window.location.href = "/home/" + newDate;
}

function buttonDown() {
    window.location.href = "/home/0";
}

function checkForValidDate(param) {
    if(param > 6) {
        document.getElementById('error').setAttribute('style', 'display: block');
        document.getElementById('information').setAttribute('style', 'display: none');
    }
}

