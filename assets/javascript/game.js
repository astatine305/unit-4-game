$(document).ready(function(){

var yourNumber = 0;
var randNumberBox = randNumber();
var wins = 0;
var losses = 0;
var crystals;

//random number between 1 and 125
function randNumber() {
    return Math.floor(Math.random() * 125) + 1;
};
var myCrystals = [
{
  gem: "diamond",
  points: Math.floor(Math.random() * 15) + 1
},
{
  gem: "emerald",
  points: Math.floor(Math.random() * 15) + 1
},
{
  gem: "sapphire",
  points: Math.floor(Math.random() * 15) + 1
},
{
  gem: "ruby",
  points: Math.floor(Math.random() * 15) + 1
},
];

function startGame() {
yourNumber = 0;
randNumberBox = randNumber();
$("#randNumber").html(randNumberBox);
$("#yourNumber").html(yourNumber);
$("#win").html(wins);
$("#loss").html(losses);
}
// reset game 
function resetGame() {
yourNumber = 0;
randNumberBox = randNumber();
wins = 0;
losses = 0;
$("#randNumber").html(randNumberBox);
$("#yourNumber").html(yourNumber);
$("#win").html(wins);
$("#loss").html(losses);
};

//update your number box
function updateYourNumber() {
  $("#yourNumber").html(yourNumber);
};

//on click event
$(".gem").click(function(){
  var index = $(this).attr("data-gem");
  yourNumber += myCrystals[index].points;
  $("yourNumber").html(yourNumber);

updateYourNumber();
if (yourNumber === randNumberBox) {
  wins++;
  $("#win").html(wins);
  startGame();

}
else if (yourNumber > randNumberBox) {
  losses++;
  $("#loss").html(losses);
  startGame();
}
else if (losses === 5 || wins === 5){
  resetGame();
}
});


startGame();


})