// start off with 500 in the bank
// popup window for results
let totalAmount = 500;
const banktag = document.getElementById('bank');
banktag.innerHTML = `Bank Account: $${totalAmount}`;
document.getElementById('btn25').addEventListener('click', placeBet);
document.getElementById('btn50').addEventListener('click', placeBet);
document.getElementById('btn100').addEventListener('click', placeBet);
document.getElementById('btn250').addEventListener('click', placeBet);

function placeBet(e) {
	if (totalAmount = 0) {
		//losePopUp();
		console.log('Bet Your House or Your Spouse if you want to keep playing');
	}
	const betAmount = e.target.value;

	const winBool = spinSlots();

	if (winBool) {
		//winPopUp();
		console.log('Money Magic! You Won!');
		totalAmount = parseInt(totalAmount) + parseInt(betAmount);
		banktag.innerHTML = `Bank Account: $${totalAmount}`;
	} else {
		totalAmount = parseInt(betAmount) - parseInt(totalAmount);
		banktag.innerHTML = `Bank Account: $${totalAmount}`;
	}
}


function spinSlots(){
	let slot1, slot2, slot3;
	slot1 = spinRandom();
	//making it easier to win
	slot2 = slot1;
  slot3 = spinRandom();
  document.getElementById('slot1').innerHTML = slot1;
  document.getElementById('slot2').innerHTML = slot2;
  document.getElementById('slot3').innerHTML = slot3;
	return compareSpin(slot1, slot2, slot3);
}
//function for selecting random pictures in the slots
function spinRandom(){
  //change strings into pictures
  const pics = ['<img src="images/clouds.jpg">', '<img src="images/dragon.jpg">', '<img src="images/fairy1.jpg">', '<img src="images/firesword.jpg">', '<img src="images/signback.jpg">', '<img src="images/wizard.jpg">'];
	//pics.length = length of array of pics (6)
	//math.random() choses a random number, when multiplied by 6, it will choose a decimal number 6 or under, Math.floor will round the decimal to the nearest whole number.
  let reelRoll = pics[Math.floor(Math.random()*pics.length)];
  return reelRoll;
}

//function for comparing slot pictures ( aka variable values)
function compareSpin(slot1, slot2, slot3){
  if(slot1 === slot2 && slot1 === slot3){
    return true;
  }else{
    return false;
  }
}

function winPopUp() {
	const popup = document.querySelector('.resultModal');
	const winMsg = document.querySelector('.winnerMsg');
	popup.style.display = 'block';
	winMsg.style.display = 'block';
}
function losePopUp() {
	const popup = document.querySelector('.resultModal');
	const loseMsg = document.querySelector('.loserMsg');
	popup.style.display = 'block';
	loseMsg.style.display = 'block';
}
