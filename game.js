$("button").on("click", function (min, max) {
    min = Math.ceil(0);
    max = Math.floor(9);
    randomize = document.getElementById("goal").innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomize
});


function getRandom(length) {

    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));

}