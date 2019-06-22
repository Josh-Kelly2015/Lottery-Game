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
