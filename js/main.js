const slotPics = ["img/pikachu.jpeg", "img/charmander.png", "img/jiggle.png", "img/eevee.png", "img/squirtle.png"]
const fiveBet = 5;
const fiftyBet = 50;
let total = 1000;
let leftBox;
let middleBox;
let rightBox;


function getRandomPic(){
  const leftBoxRanNum = Math.random();
  const leftBoxIndex = Math.round(leftBoxRanNum * (slotPics.length - 1));
  return slotPics[leftBoxIndex];
}
document.getElementById("fiveBet").addEventListener("click",runGame)
document.getElementById("fiftyBet").addEventListener("click",runGame)

function runGame(e){
   leftBox = getRandomPic();
   middleBox = getRandomPic();
   rightBox = getRandomPic();

if(total <= 0){
  alert("Balance too Low!")
  return;
}
  else if(leftBox === middleBox && middleBox === rightBox) {
    document.getElementById("status").innerHTML = "You won!"
       winner(e.target.value);
     } else {
       loser(e.target.value);
       document.getElementById("status").innerHTML = "Sorry! Try again.";
     }
     document.getElementById("leftImg").src = leftBox;
     document.getElementById("middleImg").src = middleBox;
     document.getElementById("rightImg").src = rightBox;
   }


// WIN OR LOSE
function winner(coins){
  total = total + (coins * 10);
  document.getElementById("cashTotal").innerHTML = total;
  console.log(coins)
}
function loser(coins){
  total = total - coins;
  document.getElementById("cashTotal").innerHTML = total;
  console.log(coins)
}
