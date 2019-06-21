/* $("button").on("click", function (min, max) {
    min = Math.ceil(0);
    max = Math.floor(9);
    randomize = document.getElementById("goal").innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomize
}); */
$(document).ready(function() {
$("#random-button").on("click", function() {

var lnumber = "";

for (var i = 0; i < 9; i++) {
  var randomnumber = Math.floor(Math.random() * 9) + 1; 
  lnumber = randomnumber + lnumber;
  console.log (lnumber);
}

});
});