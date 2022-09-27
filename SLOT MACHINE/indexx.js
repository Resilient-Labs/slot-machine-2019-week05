document.querySelector('#start').addEventListener('click',startGame)
let bankBalance = 1000

function startGame(){

let myArray = ['<img src="avax.png" alt="avalanche">','<img src="bitcoin.png" alt="bitcoin">','<img src="ethereum.jpg" alt="ethereum">','<img src="luna.png" alt="luna">','<img src="matic.jpg" alt="matic">','<img src="polkadot.png" alt="polkadot">','<img src="solana.png" alt="solana">']

let outcome = document.querySelector('#outcome')
let imgone = document.querySelector('#imgone')
let imgtwo = document.querySelector('#imgtwo')
let imgthree = document.querySelector('#imgthree')
let chooseAmount = document.querySelector('#chooseBet').value
let total = document.querySelector('#total')

let frameOne = myArray[Math.floor(Math.random() *7)]
let frameTwo = myArray[Math.floor(Math.random() *7)]
let frameThree = myArray[Math.floor(Math.random() *7)]

if ( frameOne===frameTwo && frameTwo===frameThree){
imgone.innerHTML = frameOne
imgtwo.innerHTML = frameTwo
imgthree.innerHTML = frameThree
outcome.innerHTML = 'YOU WIN THIS ROUND!'
bankBalance = (parseInt(chooseAmount) *10) + bankBalance 
total.innerHTML = bankBalance
}

else{
imgone.innerHTML = frameOne
imgtwo.innerHTML = frameTwo
imgthree.innerHTML = frameThree
outcome.innerHTML = 'YOU LOSE THIS ROUND!'
bankBalance = bankBalance - parseInt(chooseAmount) 
total.innerHTML = bankBalance
}
if ( bankBalance <= 0 ) {
alert('YOUR FUNDS ARE DEPLETED, RESETTING BANK BALANCE')
bankBalance = 1000
total.innerHTML = bankBalance
}
}







