// Define the symbols for the reels
let symbols = [
 '👻', '✨', '👩🏻‍💻', '🌹', '❤️‍🔥'
]
document.querySelector('#minBtn').addEventListener('click', minBtn)
document.querySelector('#maxBtn').addEventListener('click',maxBtn)


// Define the minimum and maximum bet amounts
const minBet = 50;
const maxBet = 100;

// Define the initial balance
let balance = 4000;

// Define the initial bet amount
let betAmount = 50;


function minBtn(){
  let bx1 = symbols[Math.floor(Math.random() *5)]
  let bx2 = symbols[Math.floor(Math.random() *5)]
  let bx3 = symbols[Math.floor(Math.random() *5)]
  reel1.innerText= bx1
  reel2.innerText= bx2
  reel3.innerText= bx3

if (bx1 === bx2 && bx2 === bx3) {
  balance += 100
  document.querySelector('h3').innerText = 'oh la la!'
} else {
  balance -= 50
  document.querySelector('h3').innerText = 'Do better!'
}
document.querySelector('#balance').innerText=balance
if(balance <= 0)  {
  alert ("Better Luck Next Time!!")
  balance = 4000
  document.querySelector('#balance').innerText = balance
}
}

function maxBtn(){
  let bx1 = symbols[Math.floor(Math.random() *5)]
  let bx2 = symbols[Math.floor(Math.random() *5)]
  let bx3 = symbols[Math.floor(Math.random() *5)]
  reel1.innerText= bx1
  reel2.innerText= bx2
  reel3.innerText= bx3

if (bx1 === bx2 && bx2 === bx3) {
  balance += 100
  document.querySelector('h3').innerText = 'oh la la!'
} else {
  balance -= 50
  document.querySelector('h3').innerText = 'Do better!'
}
document.querySelector('#balance').innerText=balance
if(balance <= 0)  {
  alert ("Better Luck Next Time!!")
  balance = 4000
  document.querySelector('#balance').innerText = balance
}
}

// Define the win amounts for each symbol
// const winAmount
// THREE SMURFS FOR EACH SLOT
// CREATE FUNCTION TO GENERATE RANDOM NUMBER
// ASIGN GENERATOR RANDOM NUMBER TO EACH SLOT
// CREATE FUNCTION FOR ALL MY BUTTONS
