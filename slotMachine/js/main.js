play = document.getElementById("play").onclick = startSpin;
var firstReel = document.getElementById("firstReel");
var secondReel = document.getElementById("secondReel");
var thirdReel = document.getElementById("thirdReel");

var cash = document.getElementById("cash");
newAmount = 1000;
var items = ["luckyseven", "cherries", "apple", "money", "bomb"];

function startSpin() {
  spinSlotOne = items[Math.floor(Math.random() * items.length)];
  spinSlotTwo = items[Math.floor(Math.random() * items.length)];
  spinSlotThree = items[Math.floor(Math.random() * items.length)];
  if (spinSlotOne == spinSlotTwo && spinSlotThree) {
    newAmount += range.value * 10;
    cash.innerHTML = `${newAmount}`;
    firstReel.innerHTML = `You won ${spinSlotOne} - ${spinSlotTwo} - ${spinSlotTwo}`;
  } else {
    newAmount -= range.value;
    cash.innerHTML = `${newAmount}`;
    firstReel.innerHTML = `You Lost ${spinSlotOne} - ${spinSlotTwo} - ${spinSlotTwo}`;
    return;
  }
}

// figured out how to do slider from mdn and w3 school
var range = document.getElementById("range");
var currentBet = document.getElementById("currentBet");
currentBet.innerHTML = range.value;

range.oninput = function () {
  currentBet.innerHTML = `${this.value}`;
};
