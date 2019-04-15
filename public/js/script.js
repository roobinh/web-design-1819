console.log("script.js imported.")

document.onkeydown = function(e) {
    if(e.keyCode == 37) { // left Key
        console.log("Left")
    } else if(e.keyCode == 38) { // up key
        console.log("Up")
    } else if(e.keyCode == 39) { //right key
        console.log("Right")
    } else if(e.keyCode == 40) { //down key
        console.log("Down")
    }
}
