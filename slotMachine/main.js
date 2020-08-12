let images= ["img/coin.png", "img/egg.png", "img/flower.png", "img/mushroom.png", "img/star.png"]
let leftReel;
let midReel;
let rightReel;
let remaining = 1000;
const minBet = 5;
const maxBet= 50;

function reelRandom(){
  const pickNumber = Math.random();
  const index = Math.round(pickNumber * (images.length - 1));
  return images[index];
}

document.getElementById('lever5').onclick=reelPick;
document.getElementById('lever50').onclick=reelPick;



function reelPick (e){
  leftReel = reelRandom();
  midReel = reelRandom();
  rightReel = reelRandom ();
  document.getElementById("leftPic").src=leftReel;
  document.getElementById("midPic").src=midReel;
  document.getElementById("rightPic").src=rightReel;

  if (remaining < 0) {
    alert ("You're in debt. Stop.");
    return;
  }
    else if (remaining == 0) {
    alert ("You're out of money");
    return;
  }
  else if (leftReel === midReel && midReel === rightReel){
    moneyWon(e.target.value);
    document.getElementById('winOrLose').innerHTML = "YOU WIN!";
  }
  else if (leftReel!= midReel || midReel!= rightReel) {
    moneyLost (e.target.value);
      document.getElementById('winOrLose').innerHTML = "YOU LOSE";

  }
}

function moneyWon(total){
  remaining = remaining + (10 * total);
  document.getElementById('changeRemaining').innerHTML = remaining;
  return remaining;
}

function moneyLost(total){
  remaining = remaining - total;
  document.getElementById('changeRemaining').innerHTML = remaining;
  return remaining;
}
