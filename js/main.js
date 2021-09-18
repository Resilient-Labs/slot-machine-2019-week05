const totalMoney = document.getElementById("totalMoney");
var minBet = 5;
var maxBet = 50;
//put the clicker in html and not the JS because it wasn't working properly with my code//
const minButton = document.querySelector("#betFive");
const maxButton = document.querySelector("#betFifty");

const myImageArray = ["css/img/bell.png", "css/img/cherry.png", "css/img/grape.png", "css/img/lemon.png", "css/img/lucky7.png"];
var image1 = document.getElementById("reel1");
var image2 = document.getElementById("reel2");
var image3 = document.getElementById("reel3");

//changed from Math.ceiling to floor as to round down and not up//
function getRandomInt(){
    return Math.floor(Math.random() * 5);
}

image1.src = myImageArray[getRandomInt()];
image2.src = myImageArray[getRandomInt()];
image3.src = myImageArray[getRandomInt()];
totalMoney.innerText = 1000;

function betWin(bet){
    totalMoney.innerText += (bet * 10);
}

function betLoss(bet){
    totalMoney.innerText -= bet;
    if (totalMoney.innerText <= 0) totalMoney.innerText = 0;
}

function spin(bet){
    image1.src = myImageArray[getRandomInt()];
    image2.src = myImageArray[getRandomInt()];
    image3.src = myImageArray[getRandomInt()];

    if (image1.src === image2.src === image3.src) {
      betWin(bet);
    } else {
      betLoss(bet);
    }
}
