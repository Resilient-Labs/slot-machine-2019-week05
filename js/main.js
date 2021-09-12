var totalMoney = 1000;
var minBet = 5;
var maxBet = 50;
let reel1;
let reel2;
var reel3;
document.getElementById("#minBet").addEventListener("click", spin)
document.getElementById("#maxBet").addEventListener("click", spin)

const myImageArray = ["css/img/bell.png", "css/img/cherry.png" , "css/img/grape.png" , "css/img/lemon.png" , "css/img/lucky7.png"]

function getRandomInt(){
    return Math.ceiling(Math.random() * 5)
}

function betWin(bet){
    totalMoney += (bet*5)
}

function betLoss(bet){
    totalMoney -= bet
    if (totalMoney <= 0) {
        totalMoney = 0
    }
}

function spin(bet){
    reel1 = getRandomInt()
    reel2 = getRandomInt()
    reel3 = getRandomInt()

    if (reel1 === reel2 === reel3)
        betWin(bet)
    else
        betLoss(bet)
}

