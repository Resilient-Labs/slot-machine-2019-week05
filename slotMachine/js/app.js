const bet1 = document.querySelector('#placeBet10');
const bet2 = document.querySelector('#placeBet25');
const bet3 = document.querySelector('#placeBet50');
const bet4 = document.querySelector('#placeBet100');
const outputLeft = document.querySelector('.outputLeft');
const outputMiddle = document.querySelector('.outputMiddle');
const outputRight = document.querySelector('.outputRight');
const outputBottom = document.querySelector('.outputBottom');


let moneyPot = 1000;

function numCheck(e) {
  const betAmount = e.target.value
  const reward = e.target.value * 10;
  const slot1 = Math.floor(Math.random() *5);
  const slot2 = Math.floor(Math.random() *5);
  const slot3 = Math.floor(Math.random() *5);
  const winCondition = slot1 === slot2 && slot1 === slot3;
  const imageArray = [
    'images/seven.png',//0
    'images/cherry.png',//1
    'images/bar.png',//2
    'images/diamond.png',//3
    'images/horseshoe.png'//4
  ];
  document.querySelector('#hi').setAttribute('src',imageArray[slot1]);
  document.querySelector('#hi2').setAttribute('src',imageArray[slot2]);
  document.querySelector('#hi3').setAttribute('src',imageArray[slot3]);
  if (!winCondition){
    moneyPot-= betAmount;
    outputBottom.innerText = `$${moneyPot} I'll hold your money, you hold this L`;
    if (moneyPot<=0) {
      moneyPot= 1000;
      outputBottom.innerText = `That's the last of your money huh? If you've got a house or a car I can lend you some cash, I'm sure you can make it all back...`;
    }
  }else{
    moneyPot-= betAmount;
    moneyPot+= reward;
    outputBottom.innerText = `$${moneyPot} YOU WON!!`;
  }
};


bet1.addEventListener("click",numCheck);
bet2.addEventListener("click",numCheck);
bet3.addEventListener("click",numCheck);
bet4.addEventListener("click",numCheck);
