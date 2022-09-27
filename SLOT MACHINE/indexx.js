document.querySelector('#start').addEventListener('click',startGame)
let bankBalance = 1000
let myPictures = ['<img src="avax.png" alt="avalanche">','<img src="bitcoin.png" alt="bitcoin">','<img src="ethereum.jpg" alt="ethereum">','<img src="luna.png" alt="luna">','<img src="matic.jpg" alt="matic">','<img src="polkadot.png" alt="polkadot">','<img src="solana.png" alt="solana">']
let pictureCount = myPictures.length
let outcome = document.querySelector('#outcome')
let imgone = document.querySelector('#imgone')
let imgtwo = document.querySelector('#imgtwo')
let imgthree = document.querySelector('#imgthree')
let total = document.querySelector('#total')

function startGame(){

let chooseAmount = document.querySelector('#chooseBet').value
let frameOne = myPictures[Math.floor(Math.random() * pictureCount)]
let frameTwo = myPictures[Math.floor(Math.random() * pictureCount)]
let frameThree = myPictures[Math.floor(Math.random() * pictureCount)]
imgone.innerHTML = frameOne
imgtwo.innerHTML = frameTwo
imgthree.innerHTML = frameThree

if ( frameOne===frameTwo && frameTwo===frameThree){
outcome.innerHTML = 'YOU WIN THIS ROUND!'
bankBalance = (parseInt(chooseAmount) *10) + bankBalance 
}


else{
outcome.innerHTML = 'YOU LOSE THIS ROUND!'
bankBalance = bankBalance - parseInt(chooseAmount) 
}
total.innerHTML = bankBalance

if ( bankBalance <= 0 ) {
alert('YOUR FUNDS ARE DEPLETED, RESETTING BANK BALANCE')
bankBalance = 1000
total.innerHTML = bankBalance
}
}
