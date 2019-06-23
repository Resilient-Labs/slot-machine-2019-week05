//randomnize - we need to randomize the possibility of getting 1 out of 5 items in one reel
document.getElementById('fifty').onclick = bet50
document.getElementById('five').onclick = bet5

function bet50(){
  bet(50)
}

function bet5(){
  bet(5)
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




//- Create a function that choses a random throw of rock, paper, scissors, lizard, spock and alerts the random choice

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
//
// function chooseRandom() {
//   var randomInt = getRandomInt(4);
//
//   if (randomInt === 0) {
//     alert('rock');
//   }
//   else if (randomInt === 1) {
//     alert('scissors')
//   }
//   else if (randomInt === 2) {
//     alert('lizard')
//   }
//   else if (randomInt === 3) {
//     alert('spock')
//   }
//   else {
//     alert('paper')
//   }
// }
//
// chooseRandom();



// //count the score
// function score(){
//
// }
//
//
// //betting function
// function moneybet(minBet, maxBet){
// let minBet=document.getElementById('bet').value
// let maxBet=document.getElementById('bet').value
// }
// moneyBet(5,50)
// //
// //determineWinner
// function determineWinner(){
//  if (3 ducks = win){  //syntax will be improved
//
//  }
//  else if ( 2< ducks = lose)
// }
