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
document.getElementById('button4').addEventListener("click", buttonUp)

document.getElementById('1uurbutton').addEventListener("click", showTableOne)
document.getElementById('3uurbutton').addEventListener("click", showTableTwo)
document.getElementById('24uurbutton').addEventListener("click", showTableThree)

document.getElementById('1kwart').addEventListener("click", showTablesOne)
document.getElementById('2kwart').addEventListener("click", showTablesTwo)
document.getElementById('3kwart').addEventListener("click", showTablesThree)
document.getElementById('4kwart').addEventListener("click", showTablesFour)

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
    if(currentParam == 0) {
        document.getElementById('button2').setAttribute('style', 'display: none');
        document.getElementById('button3').setAttribute('style', 'display: none');
        document.getElementById('button4').click();
    } else {
        document.getElementById('buttons').setAttribute('style', 'display: none');
    }
    
        document.getElementById('button4').setAttribute('style', 'display: none');
}

// Table stuff
var tableOne = document.getElementById('1uur')
var tableTwo = document.getElementById('3uur')
var tableThree = document.getElementById('24uur')

function showTableOne() {
    tableOne.setAttribute("style", "display: block")
    tableTwo.setAttribute("style", "display: none")
    tableThree.setAttribute("style", "display: none")
}

function showTableTwo() {
    tableTwo.setAttribute("style", "display: block")
    tableOne.setAttribute("style", "display: none")
    tableThree.setAttribute("style", "display: none")
}

function showTableThree() {
    tableThree.setAttribute("style", "display: block")
    tableTwo.setAttribute("style", "display: none")
    tableOne.setAttribute("style", "display: none")
}

// 24 hour stuff
var div1 = document.getElementById('firstH');
var div2 = document.getElementById('secondH');
var div3 = document.getElementById('thirdH');
var div4 = document.getElementById('fourthH');

function showTablesOne() {
    div1.setAttribute('style', 'display: block')

    div2.setAttribute('style', 'display: none')
    div3.setAttribute('style', 'display: none')
    div4.setAttribute('style', 'display: none')
}

function showTablesTwo() {
    div2.setAttribute('style', 'display: block')

    div1.setAttribute('style', 'display: none')
    div3.setAttribute('style', 'display: none')
    div4.setAttribute('style', 'display: none')
}

function showTablesThree() {
    div3.setAttribute('style', 'display: block')

    div1.setAttribute('style', 'display: none')
    div2.setAttribute('style', 'display: none')
    div4.setAttribute('style', 'display: none')
}

function showTablesFour() {
    div4.setAttribute('style', 'display: block')

    div1.setAttribute('style', 'display: none')
    div2.setAttribute('style', 'display: none')
    div3.setAttribute('style', 'display: none')
}

})();