const min = document.querySelector("#min").addEventListener("click", minBet);
const max = document.querySelector("#max").addEventListener("click", maxBet);
const text = document.querySelector("#text");
const reelOne = document.querySelector("#reelOne");
const reelTwo = document.querySelector("#reelTwo");
const reelThree = document.querySelector("#reelThree");
const total = document.querySelector("#total");

//Generate random number for reels
function random() {
  return Math.ceil(Math.random() * 5);
}

function minBet() {
  if(total.innerText <= '0'){
    text.innerText = 'Hold this L'
    return
  }


  reelOne.innerText = random();
  reelTwo.innerText = random();
  reelThree.innerText = random();

  if (
    reelOne.innerText === reelTwo.innerText &&
    reelTwo.innerText === reelThree.innerText
  ) {
    total.innerText = parseInt(total.innerText) + 10;
    message.innerText = 'You won!'
  } else {
    total.innerText = parseInt(total.innerText) - 10;
  }
}

function maxBet() {
  if(total.innerText <= '0'){
    text.innerText = 'Hold this L'
    return
  }
  reelOne.innerText = random();
  reelTwo.innerText = random();
  reelThree.innerText = random();

  if (
    reelOne.innerText === reelTwo.innerText &&
    reelTwo.innerText === reelThree.innerText
  ) {
    total.innerText = parseInt(total.innerText) + 100;
    message.innerText = 'You won!'
  } else {
    total.innerText = parseInt(total.innerText) - 100;
  }
}
