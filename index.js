/* Events */

var drumSetButtonsCount = document.querySelectorAll(".drum");

for (var x = 0; x < drumSetButtonsCount.length; x++) {
    drumSetButtonsCount[x].addEventListener("click", function () { // Loops through all buttons and applys the event.
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

//Keystroke event listeners
document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(button){
    switch (button) {
        case "w":
            var drumSound = new Audio("sounds/tom-1.mp3");
            drumSound.play();
            break;
        case "a":
            var drumSound = new Audio("sounds/tom-2.mp3");
            drumSound.play();
            break;
        case "s":
            var drumSound = new Audio("sounds/tom-3.mp3");
            drumSound.play();
            break;
        case "d":
            var drumSound = new Audio("sounds/tom-4.mp3");
            drumSound.play();
            break;
        case "j":
            var drumSound = new Audio("sounds/snare.mp3");
            drumSound.play();
            break;
        case "k":
            var drumSound = new Audio("sounds/crash.mp3");
            drumSound.play();
            break;
        case "l":
            var drumSound = new Audio("sounds/kick-bass.mp3");
            drumSound.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },
    200);
}