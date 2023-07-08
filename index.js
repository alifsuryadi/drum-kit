
// Di tekan pake mouse
var drumList = document.querySelectorAll("button.drum");

for (var i = 0; i < drumList.length; i++){
    drumList[i].addEventListener("click", function (){
       
        var buttonDrum = this.innerHTML;
        soundDrum(buttonDrum);
        effectDrum(buttonDrum);

    })
}


// Di tekan pake keyboard
// Gunakan di seluruh element
document.addEventListener("keydown", function (event){

    var keyPress = event.key;
    soundDrum(keyPress);
    effectDrum(keyPress);

})


function soundDrum(key){
    switch (key){
        case "w" :
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a" :
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s" :
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d" :
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j" :
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "k" :
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l" :
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        default :
            console.log(key);
    }

}



function effectDrum(currentKey){

    var selectButton = document.querySelector("." + currentKey);

    selectButton.classList.add("pressed");

    setTimeout(function (){
        selectButton.classList.remove("pressed");
    }, 100);

}