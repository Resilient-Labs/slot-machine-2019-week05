//randomnize - we need to randomize the possibility of getting 1 out of 5 items in one reel
document.getElementById('goodLuck').onclick = go
function  go (){
let reelOne = getReelValue()
console.log(reelOne)
let reelTwo = getReelValue()
console.log(reelTwo)
let reelThree = getReelValue()
console.log(reelThree)
checkWin(reelOne, reelTwo, reelThree)
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
    alert('You Win!')
  }
  else{
    alert('Loser')
  }
}
// - Create a function that choses a random throw of rock, paper, scissors, lizard, spock and alerts the random choice

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function chooseRandom() {
  var randomInt = getRandomInt(4);

  if (randomInt === 0) {
    alert('rock');
  }
  else if (randomInt === 1) {
    alert('scissors')
  }
  else if (randomInt === 2) {
    alert('lizard')
  }
  else if (randomInt === 3) {
    alert('spock')
  }
  else {
    alert('paper')
  }
}

chooseRandom();



//count the score
function score(){

}


//betting function
function moneybet(minBet, maxBet){
let minBet=document.getElementById('bet').value
let maxBet=document.getElementById('bet').value
}
moneyBet(5,50)
//
//determineWinner
function determineWinner(){
 if (3 ducks = win){  //syntax will be improved

 }
 else if ( 2< ducks = lose)
}
