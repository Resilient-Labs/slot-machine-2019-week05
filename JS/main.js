//selected variables
const reelTop = document.querySelector('#reelTop');
const reelMid = document.querySelector('#reelMid');
const reelBtm = document.querySelector('#reelBtm');
const balance = document.querySelector('.balance');
const spin = document.querySelector('#spinBtn').addEventListener('click', slotMachine)
const bet = document.getElementById('bet');

// img variables declared and connected to function in L33
let imgSlot1 = document.getElementById('imgSlot1');
let imgSlot2 = document.getElementById('imgSlot2');
let imgSlot3 = document.getElementById('imgSlot3');

const items = ['imgs/slots/bouquet.png','imgs/slots/brokenheart.png', 'imgs/slots/chocolatebox.png', 'imgs/slots/teddybear.png', 'imgs/slots/kiss.png'];

// currentBalance assigned to balance.textContent so total num will display and be operated on selectedBet
let currentBalance = 1000;
balance.textContent = `$ ${currentBalance}`;
let selectedBet = bet.value;
console.log(selectedBet);

// eventlistener to bet and created variable to track change in bets.
bet.addEventListener('change', function(){
  selectedBet = this.value;
  console.log('bet change: ', this.value);
});


function slotMachine(){
  const reelTopItem = items[Math.floor(Math.random() * items.length)];
  const reelMidItem = items[Math.floor(Math.random() * items.length)];
  const reelBtmItem = items[Math.floor(Math.random() * items.length)];
  imgSlot1.src = reelTopItem;
  imgSlot2.src = reelMidItem;
  imgSlot3.src = reelBtmItem;
  if (currentBalance <= 0){
    alert('You lost :( No more monies!')
  }else{
    // statements nested in first if statement so that conditional when met will stop the function
    if ((reelTopItem == reelMidItem) && (reelTopItem == reelBtmItem)){
      balance.textContent = `$ ${currentBalance += (parseInt(selectedBet)* 10)}`
      alert('You Won! Enjoy your monies. Feeling Lucky?');
      console.log(parseInt(selectedBet));
    }else{
      balance.textContent = `$ ${currentBalance -= parseInt(selectedBet)}`
      console.log(balance.innerHTML);
      console.log(parseInt(selectedBet));
    }
  }
}
