function howManyHotDogs() {
    var numDogs = prompt ("How many hot dogs can you eat?", "1");
    if (numDogs === 0) {
        document.getElementById("hotDogButtonAnswer").innerHTML =
        "numDogs + "? If you hate hot dogs, you will hate me.";
    }    
    if (numDogs <= 2) {
        document.getElementById("hotDogButtonAnswer").innerHTML =
        "Really, only " + numDogs + "?";
    }
    if (numDogs >= 3) {
        document.getElementById("hotDogButtonAnswer").innerHTML =
        "Wow, you can eat " + numDogs + " hot dogs! That's pretty good!";
    }
    if (numDogs >= 7) {
        document.getElementById("hotDogButtonAnswer").innerHTML =
        "Oh " + numDogs + " hot dogs? Brag alert.";
    }
    if (numDogs >= 20) {
        document.getElementById("hotDogButtonAnswer").innerHTML =
        "What the hell.. " + numDogs + " hot dogs?? Calm down, dude.";
    }
}
