

document.getElementById("playSlots").addEventListener("click", spinReel)


const minBet = 5
const maxBet = 50
let balance = 1000

let slotOne = document.getElementById("slot1")
let slotTwo = document.getElementById("slot2")
let slotThree = document.getElementById("slot3")
let images = ["img/heart.png", "img/ace.png", "img/queen.png", "img/diamond.png", "img/joker.png"];
//length property starts at zero not 1

document.getElementById("balance").innerHTML = balance

function displayMessage (msg){
  document.getElementById("displayMessage").innerHTML = msg
}

function spinReel() {
  let randomSpin1 = Math.floor(Math.random() * 5) // thhis is going to randomize the images and *5 is the length of the images in the array 0,1,2,3,4,
  let randomSpin2 = Math.floor(Math.random() * 5)
  let randomSpin3 = Math.floor(Math.random() * 5)

  document.getElementById("slot1Img").src=images[randomSpin1]  // First I read on stack over flow about linking imgs on JS using src tag and spoke with Ken to figure out how I should add it.
  document.getElementById("slot2Img").src=images[randomSpin2]   // Ken helped me look over my image src code for this section
  document.getElementById("slot3Img").src=images[randomSpin3]

  let bet = document.getElementById("displayBet").value


  if (bet < minBet || bet > maxBet){
    displayMessage(`Bet must be between ${minBet} and ${maxBet}.`)
    return;
    // just like the horoscope app that uses a range
  }
  if (balance < 50){
    displayMessage("GAME OVER SUCKER")
    return;
  }
  if (randomSpin1 === randomSpin2 && randomSpin2 === randomSpin3){
    displayMessage('Yay, you won! Keep going!')
    balance += bet * 10
  }else{
    displayMessage('I am sorry, you lost. Try again though.')
    balance -= bet
  }

  document.getElementById("balance").innerHTML = balance

  // slotOne.innerHTML = images[randomSpin1] // removed this. Spoke with Leon to help me figure this out
  // slotTwo.innerHTML = images[randomSpin2] // this was overiding lines 27-29 and only uploading the text versus the images
  // slotThree.innerHTML = images[randomSpin3] // this is not needed if i put document.getElementById ...
}


// for this I worked in a a group (Sam, Divya, Abby, Chi, Anjelica, Sebastian, and myself)and got extra assistance from Leon, Ken, Stackoverflow.com reading, and MDN
// We also got help from mentor Anthony during community hour.

//Create three boxes in your HTML / CSS
//Click on a box and have it rotate (45+ degrees each click)
//On the third click of each box change the color of the other two boxes
//On a click of a box, turn that box into a circle and have it move to the right
//Pseudo Code and Wireframes:

//Build a simple slot machine with minimum 5 items per reel
//and 3 reels - user should be able to bet min or max and have their total update
//aka how much money they have won or lost.
//Min bet does $5 and Max bet does $50.
//They should start with $1000. Matches of the three wheels = a win just like a
//normal slot machine and they win 10x their bet
