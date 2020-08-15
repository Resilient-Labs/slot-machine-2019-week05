 // Slot machine with 3 different reels. With 5 items per reel.
// Press lever button to play the game. After pressing button, there will
// be a result of random items. Three lists with five items each. The lists are the options. Min of 5 & max of 50 to bet. 

const slotItems = ["images/prisonmike.jpg", "images/narddog.jpg", "images/kevin.jpg", "images/office.jpg", "images/schrute.jpg"];
let reel1;
let reel2;
let reel3;
let playerMoney = 1000;
const minBet = 5;
const maxBet = 50;

function getRandomCharacter(){
  let reel1RandomNumber = Math.random();
  let reel1Index = Math.round(reel1RandomNumber * (slotItems.length - 1));
  return slotItems[reel1Index];
}

document.getElementById("minBet").addEventListener("click",runSlot)
document.getElementById("maxBet").addEventListener("click",runSlot)


function runSlot(e){
   reel1 = getRandomCharacter();
   reel2 = getRandomCharacter();
   reel3 = getRandomCharacter();

   if(playerMoney <= 0){
     alert("YOU LOST BUDDY")
     return;
   } else if(reel1 === reel2 && reel2 === reel3) {
    document.getElementById("alert").innerHTML = "You won! Get more money!"
    winMoney(e.target.value);
  } else {
    loseMoney(e.target.value);
    document.getElementById("alert").innerHTML = "You lost. Keep trying!"
    // reel1.innerHTML=`${slotItems}`
  }

  document.getElementById("one").src = reel1;
  document.getElementById("two").src = reel2;
  document.getElementById("three").src = reel3;
}


function winMoney(amount){
  playerMoney = playerMoney + (amount * 10);
  document.getElementById("money").innerHTML = playerMoney;
  console.log(amount)
}

function loseMoney(amount){
  playerMoney = playerMoney - amount;
  document.getElementById("money").innerHTML = playerMoney;
  console.log(amount)
}
