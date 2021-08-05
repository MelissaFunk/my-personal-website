function howManyHotDogs() {
    var numDogs = prompt ("How many hot dogs can you eat?", "1");
    if (numDogs <= 2) {
        document.getElementById("hotDogButtonAnswer").innerHTML =
        "Really, only " + numDogs + "?";
    }
    if (numDogs >= 5) {
        document.getElementById("hotDogButtonAnswer").innerHTML =
        "Wow, you can eat " + numDogs + "! That's pretty good!";
    }
    if (numDogs >= 10) {
        document.getElementById("hotDogButtonAnswer").innerHTML =
        "Oh " + numDogs + "? Brag alert.";
    }
    if (numDogs >= 20) {
        document.getElementById("hotDogButtonAnswer").innerHTML =
        "What the hell.. " + numDogs + "? Calm down, dude.";
    }
}
