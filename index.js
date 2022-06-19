var numOfBtns = document.querySelectorAll(".drum").length;


for (i = 0; i < numOfBtns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var word = this.innerHTML;
        switch (word) {
            case "w": // in case of this
                var tom1 = new Audio("sounds/tom-1.mp3"); // do this
                tom1.play();

                break; // it ends the case
            case "a": // here is another case
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();

                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();

                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();

                break;
            case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();

                break;
            case "k":
                var snare = new Audio("sounds/snare.mp3");

                snare.play();

                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");

                kick.play();

                break;

            default: // its like a else statement 
                break;
        }
    })
}