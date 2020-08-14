/*
reelImg[0] = new Image();
reelImg[0].src = '/images/pic01.png';
reelImg[1] = new Image();
reelImg[1].src = '/images/pic02.png';
reelImg[2] = new Image();
reelImg[2].src = '/images/pic03.png';
reelImg[3] = new Image();
reelImg[3].src = '/images/pic01.png';
reelImg[4] = new Image();
reelImg[4].src = '/images/pic01.png';
*/

var reelImg = ['images/pic01.png', 'images/pic02.png', 'images/pic03.png', 'images/pic04.png', 'images/pic05.png'];

let btn = document.querySelectorAll('.button');
  btn = Array.from(btn);

let currentWinnings = document.getElementById("winningsAmount");

btn.forEach((bet) =>{
  bet.addEventListener("click", (e)=>{
    var chosenImg1 = getRandomIndex();
    var chosenImg2 = getRandomIndex();
    var chosenImg3 = getRandomIndex();
    displayReel(chosenImg1, chosenImg2, chosenImg3);
    let betAmount = e.target.getAttribute("data-id");
    checkAndUpdate(chosenImg1, chosenImg2, chosenImg3, betAmount);
  })
})
function displayReel(chosenImg1, chosenImg2, chosenImg3){
  document.getElementById("leftReel").src= reelImg[chosenImg1];
  document.getElementById("midReel").src= reelImg[chosenImg2];
  document.getElementById("rightReel").src= reelImg[chosenImg3];
}
function getRandomIndex(){
  var randomNum = Math.random();
  var randomIndex = 0;
  if(randomNum<0.2){
    randomIndex=1;
  }else if (randomNum<0.4){
    randomIndex=2;
  }else if (randomNum<0.6){
    randomIndex=3;
  }else if (randomNum<0.8) {
    randomIndex=4;
  }
  return randomIndex;
}
function checkAndUpdate(chosenImg1, chosenImg2, chosenImg3, betAmount){
  if(chosenImg1 === chosenImg2 && chosenImg2=== chosenImg3 && chosenImg1 === chosenImg3){
    incWinnings(betAmount);
    document.getElementById("msg").style.display="block";
    document.getElementById("msg").innerHTML="JACKPOT! You're a winner!";

  }else{
    decWinnings(betAmount);
  }
}
function incWinnings(betAmount){
  betAmount= betAmount*10;
  var money = parseInt(currentWinnings.innerHTML);
  money += betAmount;
  document.getElementById("winningsAmount").innerHTML=money;
}

function decWinnings(betAmount){
  var money = parseInt(currentWinnings.innerHTML);
  if(money==0){
    document.getElementById("msg").style.display="block";
    document.getElementById("msg").innerHTML="Oh No! You've run out of money!";
  }else{
    money -= betAmount;
    document.getElementById("winningsAmount").innerHTML=money;
    document.getElementById("msg").style.display="none";
  }
}



// ---- ONCLICK CODE -----
// var reelImg = ['images/pic01.png', 'images/pic02.png', 'images/pic03.png', 'images/pic04.png', 'images/pic05.png'];
//
// let currentWinnings = 1000;
// let betAmount = 0;
// let elMin = document.getElementById("minBet");
// let elMid = document.getElementById("midBet");
// let elMax= document.getElementById("maxBet");
// let btn = document.querySelectorAll('.button');
//   btn = Array.from(btn);
//
// document.getElementById("minBet").onclick=placeABet;
// function placeABet(){
//   var chosenImg1 = getRandomIndex();
//   var chosenImg2 = getRandomIndex();
//   var chosenImg3 = getRandomIndex();
//   var el = elMin;
//   checkandDisplay(chosenImg1, chosenImg2, chosenImg3, elMin);
//
// }
// document.getElementById("midBet").onclick=placeABet;
// function placeABet(){
//   var chosenImg1 = getRandomIndex();
//   var chosenImg2 = getRandomIndex();
//   var chosenImg3 = getRandomIndex();
//   var el = elMid;
//   checkandDisplay(chosenImg1, chosenImg2, chosenImg3, elMid);
//
// }
// document.getElementById("maxBet").onclick=placeABet;
// function placeABet(){
//   var chosenImg1 = getRandomIndex();
//   var chosenImg2 = getRandomIndex();
//   var chosenImg3 = getRandomIndex();
//   var el = elMax;
//   checkandDisplay(chosenImg1, chosenImg2, chosenImg3, el);
//
// }
// function getRandomIndex(){
//   var randomNum = Math.random();
//   var randomIndex = 0;
//   if(randomNum<0.2){
//     randomIndex=1;
//   }else if (randomNum<0.4){
//     randomIndex=2;
//   }else if (randomNum<0.6){
//     randomIndex=3;
//   }else if (randomNum<0.8) {
//     randomIndex=4;
//   }
//   return randomIndex;
// }
// function checkandDisplay(chosenImg1, chosenImg2, chosenImg3){
//
//   document.getElementById("leftReel").src= reelImg[chosenImg1];
//   document.getElementById("midReel").src= reelImg[chosenImg2];
//   document.getElementById("rightReel").src= reelImg[chosenImg3];
//
//   if(chosenImg1 == chosenImg2 == chosenImg3){
//     incWinnings();
//   }else{
//     decWinnings();
//   }
// }
// function incWinnings(el){
//   var betAmount = el.getAttribute("data-id");
//   currentWinnings = currentWinnings + (betAmount*10);
//   document.getElementById("winningsAmount").innerHTML=currentWinnings;
// }
// function decWinnings(el){
//   var betAmount = el.getAttribute("data-id");
//   currentWinnings = currentWinnings - betAmount;
//   document.getElementById("winningsAmount").innerHTML=currentWinnings;
// }
