const spinWheel = document.querySelector('#spinWheel')
const gameResult = document.querySelector('#gameResult')
const purseValue = document.querySelector('#purse')
const betButtons = document.querySelectorAll('.betButtons')
const reel1Display = document.querySelector('#reel1')
const reel2Display = document.querySelector('#reel2')
const reel3Display = document.querySelector('#reel3')
const reelImages = ['css/img/seven.png', 'css/img/lemon.png', 'css/img/diamond.png', 'css/img/cherries.png', 'css/img/bar.png']

let currentWager = document.querySelector('#wager')
let purse = 1000
let bet = 0

spinWheel.addEventListener('click', verifyBet)
betButtons.forEach(element => element.addEventListener('click', setWager))

function verifyBet(){
  if (purse < bet) {
    gameResult.innerHTML = 'Not Enough Money!'
  } else if (bet === 0) {
    gameResult.innerHTML = 'Place Your Bet!'
  } else {
    spinTheWheel()
  }
}

function spinTheWheel(){
  let reel1Result = reelImages[Math.floor(Math.random() * 5)]
  let reel2Result = reelImages[Math.floor(Math.random() * 5)]
  let reel3Result = reelImages[Math.floor(Math.random() * 5)]

  reel1Display.src = reel1Result
  reel2Display.src = reel2Result
  reel3Display.src = reel3Result

  if (reel1Result === reel2Result && reel1Result === reel3Result){
  executeIfWin()
  } else {
  executeIfLose()
  } 
}

function executeIfWin (){
  gameResult.innerHTML = '      Win!'
  purse += bet * 10
  purseValue.innerHTML = purse
  setTimeout(() => {gameResult.innerHTML = ''}, 1500)
}

function executeIfLose(){
  gameResult.innerHTML = '     Lose!'
  purse -= bet
  purseValue.innerHTML = purse
  setTimeout(() => {gameResult.innerHTML = ''}, 1500)
}

function setWager(event){
  bet = Number(event.target.value)
  currentWager.innerText = bet
  console.log(bet)
  return bet
  
}
function removeResult () {
  gameResult.innerHTML = ''
}
