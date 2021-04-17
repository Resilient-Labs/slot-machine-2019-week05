//Mentor Mike helped me with coding my images into js instead of my html!

// create 3 reels with 5 images in each
//create three buttons, minimum ,maximum, and play, plus, minus
// plus minus buttons will increase or decrease by 10
// create place to see current value total
//create placce to see if you win or lose


//when player starts game with start with 3 random images
//player starts with $1000 and has to select betting amount between 5, 15, 25, 50
// when i click button i want my 3 reels to pick 1 out of 5 images for each reel
// and i also want my start amount to go up or down by 5, 15, 25, or 50 depending if i lose or win
// depending on how much money i bet
// if all 3 images match you win and if they dont match you lose


document.getElementById('lucky').addEventListener('click', feelLucky)

let money = 1000
document.getElementById('startAmount').innerText = '$1000'

const game = document.createElement('img')
const gameTwo = document.createElement('img')
const gameThree = document.createElement('img')

document.getElementById('left').appendChild(game)
document.getElementById('middle').appendChild(gameTwo)
document.getElementById('right').appendChild(gameThree)

game.src = 'imgfive.png'
gameTwo.src = 'imgtwo.png'
gameThree.src = 'imgfive.png'


function feelLucky() {
  const randomNumber = Math.random();
  const randomNumber2 = Math.random();
  const randomNumber3 = Math.random();
  const betAmount = document.querySelector('#betAmount').value
  const message = document.querySelector('#message')
  if (randomNumber < .2) {
    game.src = 'imgtwo.png'
  } else if (randomNumber < .55) {
    game.src = 'imgone.png'
  } else if (randomNumber < .98) {
    game.src = 'imgfour.png'
  } else if (randomNumber < 1) {
    game.src = 'imgthree.png'
  } else {
    game.src = 'imgfive.png'
  }
  if (randomNumber2 < .4) {
    gameTwo.src = 'imgtwo.png'
  } else if (randomNumber2 < .85) {
    gameTwo.src = 'imgone.png'
  } else if (randomNumber2 < .30) {
    gameTwo.src = 'imgfour.png'
  } else if (randomNumber2 < .99) {
    gameTwo.src = 'imgthree.png'
  } else {
    gameTwo.src = 'imgfive.png'
  }
  if (randomNumber3 < .30) {
    gameThree.src = 'imgtwo.png'
  } else if (randomNumber3 < .50) {
    gameThree.src = 'imgone.png'
  } else if (randomNumber3 < .20) {
    gameThree.src = 'imgfour.png'
  } else if (randomNumber3 < .90) {
    gameThree.src = 'imgthree.png'
  } else {
    gameThree.src = 'imgfive.png'
  }
  
  if (money === 0) {
    message.innerText = "Go home, you're broke"
  } else if(game.src === gameTwo.src && game.src === gameThree.src) {
    document.getElementById('startAmount').innerText = money += parseInt(betAmount) * 10
    message.innerText = "You won, keep playing!"
    console.log('you won');
  } else if (game.src != gameTwo.src || gameThree.src != game.src || money === 0) {
    message.innerText = "You lost!"
    document.getElementById('startAmount').innerText = money -= parseInt(betAmount)
  }  else {
    document.getElementById('startAmount').innerText = money -= parseInt(betAmount)
  }
}
