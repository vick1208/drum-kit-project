

// let btn = document.querySelectorAll("button");
// btn.forEach(btn =>{
//     btn.addEventListener("click",()=>{
//         alert("I got clicked");
//     });
// });

let numOfDrumBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfDrumBtn; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        soundDrum(buttonInnerHTML);
        btnAnimation(buttonInnerHTML);

    });


}


document.addEventListener("keydown", function (e) {
    soundDrum(e.key);
    btnAnimation(e.key);
});

function soundDrum(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        // default:
        //     console.log(`You pressed:${key}`);
        //     break;
    }
}

function btnAnimation(currentKey) {


    var activeButton = document.querySelector("." + currentKey);

    if (activeButton) {

        activeButton.classList.add("pressed");

        setTimeout(() => activeButton.classList.remove("pressed"), 200);
    }



}