//randomnize - we need to randomize the possibility of getting 1 out of 5 items in one reel
document.getElementById('submit').onclick = makeBet;

function makeBet() {
  const input = parseInt(document.getElementById('bet').value);

  if (validateBet(input)) {
    bet(input);
  }
}

function validateBet(bet) {
  if (bet < 5 || bet > 50) {
    alert('Invalid bet! Can only bet between $5 and $50');
    return false;
  }

  return true;
}

function bet(amtOfBet){
  let reelOne = getReelValue()
  document.getElementById("reelOne").innerHTML=reelOne
  let reelTwo = getReelValue()
  document.getElementById("reelTwo").innerHTML=reelTwo
  let reelThree = getReelValue()
  document.getElementById("reelThree").innerHTML=reelThree
  let win = checkWin(reelOne, reelTwo, reelThree)
  addMoneySubMoney (win, amtOfBet)
}

function getReelValue(){
  let result = Math.ceil(Math.random()*5)
  if (result === 1) {
    return 'dog'
  }
  else if (result === 2){
    return 'frog'
  }
  else if (result === 3){
    return 'cow'
  }
  else if (result === 4){
    return 'zebra'
  }
  else if (result === 5){
    return 'hog'
  }
}


function checkWin (reelOne, reelTwo, reelThree) {
  if ((reelOne === reelTwo) && (reelOne == reelThree) ) {
    return true
  }
  else{
    return false
  }
}

let startTotal = 1000;
function addMoneySubMoney(win,inputNum){

  console.log(win);
  if (win) {
    startTotal= inputNum * 10 + startTotal
  }else{
    startTotal = startTotal - inputNum;
  }
  document.getElementById('Cash').innerHTML = startTotal
}
