// Select a betting amount
// When the you hit place bet take away the designated amount of money from your wallet
// The three sections show an image between five options
// We get told win, lose.
// If win money betted is doubled
// If lost money lost


const arr = [1,2,3,4,5]

const images = ['img/777.jpeg', 'img/bar.jpeg', 'img/cherry.jpeg', 'img/chopper.jpeg', 'img/jordans.png']

const slot1 = document.querySelector('#slot1')
const slot2 = document.querySelector('#slot2')
const slot3 = document.querySelector('#slot3')
const betOne = document.querySelector('#betOne')
const betTwo = document.querySelector('#betTwo')
const placeBetButton = document.querySelector('#placeBet')
const wallet = document.querySelector('#wallet')
const message = document.querySelector('#message')

let bet = 0

const setBetAmount = function(e){
  const target = e.target
  const value = target.value
  bet = parseInt(value)
  return bet
}

betOne.addEventListener('click', setBetAmount)
betTwo.addEventListener('click', setBetAmount)

const placeBet = function(e){
  e.preventDefault()
  if(parseInt(wallet.innerText) < bet){
    return
  }
  
  wallet.innerText = parseInt(wallet.innerText) - bet
  slot1.src = images[getRandomIndex()]
  slot2.src = images[getRandomIndex()]
  slot3.src = images[getRandomIndex()]




  if(checkWin()){
    wallet.innerText = parseInt(wallet.innerText) + bet  + parseInt(bet * 2)
    message.innerText = 'You Win!!!'
    return
  }
// message.innerText = 'You Lose!!! has to go after the if(checkWin) conditional because you need the function inside of it to run prior.'

  message.innerText = 'You Lose!!!'
}
placeBetButton.addEventListener('click', placeBet)



const getRandomIndex = function(){
  const index = Math.floor((Math.random() * images.length))
  return index
}

const checkWin = function(){
  return slot1.src=== slot2.src && slot1.src === slot3.src
}