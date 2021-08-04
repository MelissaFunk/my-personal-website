function howManyHotDogs() {
    var numDogs = prompt ("How many hot dogs can you eat?", "1");
    if (numDogs <= 2) {
        document.getElementById("hotdogs").innerHTML =
        "Really, only " + numDogs + "?";
    }
    if (numDogs >= 3) {
        document.getElementById("hotdogs").innerHTML =
        "Wow, you can eat " + numDogs + "! That's pretty good!";
    }
    if (numDogs >= 5) {
        document.getElementById("hotdogs").innerHTML =
        "What the hell.. " + numDogs + "? Calm down, dude.";
    }
}
