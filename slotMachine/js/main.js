play = document.getElementById("play").onclick = startSpin;
var firstReel = document.getElementById("firstReel");
var secondReel = document.getElementById("secondReel");
var thirdReel = document.getElementById("thirdReel");
var result = document.getElementById("result");

var cash = document.getElementById("cash");
newAmount = 1000;
var items = ["luckyseven", "cherries", "apple", "money", "bomb"];

function startSpin() {
  spinSlotOne = items[Math.floor(Math.random() * items.length)];
  spinSlotTwo = items[Math.floor(Math.random() * items.length)];
  spinSlotThree = items[Math.floor(Math.random() * items.length)];
  if (spinSlotOne === spinSlotTwo && spinSlotTwo === spinSlotThree) {
    newAmount += range.value * 10;
    cash.innerHTML = `${newAmount}`;
    firstReel.innerHTML = `${spinSlotOne} - ${spinSlotTwo} - ${spinSlotTwo}`;
    result.innerHTML = "You Won!";
  } else {
    newAmount -= range.value;
    cash.innerHTML = `${newAmount}`;
    firstReel.innerHTML = `${spinSlotOne} - ${spinSlotTwo} - ${spinSlotTwo}`;
    result.innerHTML = "You Lost!";
    negative();
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

function negative() {
  if (newAmount <= 0) {
    alert("You lost all your money! Go Home");

    newAmount = 1050;
  }
}
