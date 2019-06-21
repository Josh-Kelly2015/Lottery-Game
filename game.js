$("button").on("click", function (min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    randomize = document.getElementById("goal").innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomize
});