//Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet

//user puts money in slot // slot machine gives random num
//check to see if slot machine gives matches // which implies if user won
//user wins 10x their bet (50*10) to total money.
//if user lose - user lose their money (depending on their bet)


//get bet 50 


//variables
const bet5 = document.querySelector('.minbet');
const bet50 = document.querySelector('maxbet');
const slotone = document.querySelector('.slotone');
const slottwo = document.querySelector('.slottwo');
const slotthree = document.querySelector('.slotthree');
const totalMoney = document.querySelector('.totalMoney');
const message = document.querySelector('#message');


//functions
function gamblerBets5() {
  if (totalMoney.textContent === '0') {
    slotone.textContent = '';
    slottwo.textContent = '';
    slotthree.textContent = '';
    message.textContent = 'Go home Roger!';
    return;
  }
  slotone.textContent = Math.ceil(Math.random() * 7);
  slottwo.textContent = Math.ceil(Math.random() * 7);
  slotthree.textContent = Math.ceil(Math.random() * 7);

  if (slotone.textContent === slottwo.textContent && slotthree.textContent === slottwo.textContent) {
    totalMoney.textContent = parseInt(totalMoney.textContent) + (5 * 10);
  } else {
    totalMoney.textContent = parseInt(totalMoney.textContent) - 5;
  }
}
function gamblerBets50() {
  if (totalMoney.textContent === '0') {
    slotone.textContent = '';
    slottwo.textContent = '';
    slotthree.textContent = '';
    message.textContent = 'Go home Roger!';
    return;
  }
  slotone.textContent = Math.ceil(Math.random() * 7);
  slottwo.textContent = Math.ceil(Math.random() * 7);
  slotthree.textContent = Math.ceil(Math.random() * 7);

  if (slotone.textContent === slottwo.textContent && slotthree.textContent === slottwo.textContent) {
    totalMoney.textContent = parseInt(totalMoney.textContent) + (5 * 10);
  } else {
    totalMoney.textContent = parseInt(totalMoney.textContent) - 5;
  }
}


//addeventlisteners
bet5.addEventListener('click', gamblerBets5);
bet50.addEventListener('click', gamblerBets50);