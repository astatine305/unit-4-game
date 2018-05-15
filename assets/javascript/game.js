$(document).ready(function(){

var yourNumber = 0;
var randNumberBox = randNumber();
var wins = 0;
var losses = 0;
var crystals;

//random number between 1 and 200
function randNumber() {
    return Math.floor(Math.random() * 200) + 1;
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
// console.log('this '+this.gem.points);
 console.log(myCrystals);
 console.log(myCrystals[1].points);

// function randCrystal() {
//   return {
//     diamond: {
//       points: Math.floor(Math.random() * 15) + 1
//     },
//     sapphire: {
//       points: Math.floor(Math.random() * 15) + 1
//     },
//     ruby: {
//       points: Math.floor(Math.random() * 15) + 1
//     },
//     emerald: {
//       points: Math.floor(Math.random() * 15) + 1
//     },
//   };
// }
// console.log(randCrystal(diamond));
// function updateYourNumber() {
// }

function startGame() {
yourNumber = 0;
randNumberBox = randNumber();
// crystals = myCrystals();
$("#randNumber").html(randNumberBox);
$("#yourNumber").html(yourNumber);
// $("#diamond").text(myCrystals[0].points);
// $("#emerald").text(myCrystals[1].points);
// $("#sapphire").text(myCrystals[2].points);
// $("#ruby").text(myCrystals[3].points);

}
//update your number box
function updateYourNumber() {
  $("#yourNumber").html(yourNumber);
};


$(".gem").click(function(){
  var index = $(this).attr("data-gem");
  yourNumber += myCrystals[index].points;
  $("yourNumber").html(yourNumber);
  console.log('your number '+yourNumber);
  console.log('data-gem '+myCrystals[index].points);
updateYourNumber();
});


function resetGame() {
$("#wrapper").empty();
}

startGame();

})