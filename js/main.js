/*
The user will have three choices.
$5 || $100 || Wager
-Press the button to gamble and start the function. This will subtract from the start amount automatically.
-Enter their own amount in the wager and press the button to do the same as above
-This will spin the slot machine for a randomized picture
Win || Loss condition 
-If you win from having 3 match then it will add to the accumulated number and will display WINNER! at the bottom.
-If you lose from no matches then it will just display LOSER! at the bottom.
-The user will have the option to add the accumulated gold to their main pot to use again.
*/
// Variables

document.querySelector('.betFive').addEventListener('click', betFive)
document.querySelector('.betHundred').addEventListener('click',betHundred)
document.querySelector('.wager').addEventListener('click', wager)
document.querySelector('.addToChest').addEventListener('click', chestAddition)

var currentGold = 1000
var fiveDollars = 5
var fiftyDollars = 50
let accumulated = document.querySelector('.accumulated h2').innerText
let chestChange = document.querySelector('.currentAmount h2')


const characters = ['images/luffy.jpg', 'images/ussop.jpg', 'images/ChopperImg.png', 'images/pandaman.jpg', 'images/nami.jpg']

let slotOne = document.querySelector('#imageOne')
let slotTwo = document.querySelector('#imageTwo')
let slotThree = document.querySelector('#imageThree')


function gamble(){
  return parseInt(document.querySelector('#gamble').value)
  // Need if statement for gamble
}

//BETTING FUNCTIONS
function betFive(){
  if(fiveDollars > currentGold ){
    return currentGold
  }
  else {
    currentGold = currentGold - fiveDollars
    chestChange.innerText = currentGold
    betChange = fiveDollars
    gameStart(betChange)
  }
}

function betHundred(){
  if(fiftyDollars > currentGold){
    return currentGold
  }

  currentGold = currentGold - fiftyDollars
  chestChange.innerText = currentGold
  betChange = fiftyDollars
  gameStart(betChange)
}

// WAGER INPUT
function wager(){
  if(gamble() > currentGold){
    return currentGold
  }
  else if(gamble() === 0){
    return gamble()
  } 
  else{
    currentGold = currentGold - gamble()
    chestChange.innerText = currentGold
    betChange = gamble()
    gameStart(betChange)
  }
  
}
// ADD TO CHEST
function chestAddition(){
  if(accumulated > 0){
    currentGold = currentGold + accumulated
    chestChange.innerText = currentGold
    accumulated -= accumulated
    document.querySelector('.accumulated h2').innerText = 0
  }
  else {
    currentGold === currentGold
  }
}

// Function Start Game
function gameStart(betChange){
  //For each slot, this will randomize the characters array with a number from 1-5
  const firstPicture = characters[Math.floor(Math.random() * characters.length)]
  const secondPicture = characters[Math.floor(Math.random() * characters.length)]
  const thirdPicture = characters[Math.floor(Math.random() * characters.length)]
  // assignment of slot src to each picture  
  slotOne.src = firstPicture
  slotTwo.src = secondPicture
  slotThree.src = thirdPicture
  // if matching

  if(firstPicture === secondPicture && secondPicture === thirdPicture){
    total = parseInt(accumulated + (betChange * 10))
    accumulated = total
    document.querySelector('.accumulated h2').innerText = total
    winnerText()
  }
  //if not matching
  if(firstPicture != secondPicture && secondPicture != thirdPicture){
    loserText()
  }
}



// WIN/LOSS TEXT FUNCTIONS
function winnerText(){
  document.querySelector('.winText').style.color = "rgb(30, 223, 30)"
  setTimeout(function(){
     document.querySelector('.winText').style.color = "rgb(83, 81, 78)"
  },800);
}


function loserText(){
  if(chestChange === 0 || currentGold === 0){
    document.querySelector('.lossText').style.color = "rgb(255,0,0)"
  }
  else {
    document.querySelector('.lossText').style.color = "rgb(255,0,0)"
    setTimeout(function(){
      document.querySelector('.lossText').style.color = "rgb(83, 81, 78)"
    },800);
  }
}