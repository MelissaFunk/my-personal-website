function howManyHotDogs() {
    var numDogs = prompt ("How many hot dogs can you eat?", "1");
    if (numDogs !=null) {
        document.getElementById("hotdogs").innerHTML =
        "Wow, you can eat " + numDogs + " ! Cool, dude.";
    }
}
