const slot1 = document.querySelector('#reel1')
const slot2 = document.querySelector('#reel2')
const slot3 = document.querySelector('#reel3')

const pics = ['marty.jpg', 'deloreon.jpg', 'doc.jpg', 'movielogo.jpg', 'shoes.jpg']

document.querySelector('#minBet').addEventListener('click', startGame)
document.querySelector('#maxBet').addEventListener('click' , startGame)


//start money
let money = 1000

//prize
let prize = 1000

//minBet 
let minBet = 100

//maxBet
let maxBet = 250

// Function to start the game
function startGame(event) {
  let lostMoney = Number(event.target.value)
  if (money < lostMoney) {
    alert('you got too confident lol you got GOT')
    document.querySelector('#display').innerText = ""
  } else {
    money -= lostMoney
    document.querySelector('#total').innerText = money
    returnPicture()
  }
}

// Function to get a random picture
function getRandomPicture(){
  let picture = Math.floor(Math.random()*5)
  return picture
}

// Function to display the pictures on the slots
function returnPicture() {
  let firstNumber = getRandomPicture()
  let secondNumber = getRandomPicture()
  let thirdNumber = getRandomPicture()

  reel1.src = pics[firstNumber]
  reel2.src = pics[secondNumber]
  reel3.src = pics[thirdNumber]

  win(firstNumber, secondNumber, thirdNumber)
}

// Function to check for a win
function win(firstNumber, secondNumber, thirdNumber) {
  if (firstNumber === secondNumber && secondNumber === thirdNumber) {
    document.querySelector('#display').innerText = 'AYYYYYY you finally won'
    coinss()
  } else {
    document.querySelector('#display').innerText = 'ahaahaahaaaa got cha money SUCKER'
  }
}

// Function to add prize money
function coinss() {
  money += prize
  document.querySelector('#amount').innerText = money
}


