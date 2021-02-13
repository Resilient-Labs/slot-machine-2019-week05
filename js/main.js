/* Build a simple slot machine with minimum 5 items per reel and 3 reels
the pictures in the slot machine should visablly shuffle before one is selected  -
user should be able to bet min or max and have their total update aka how much money they have won or lost.
 two buttons or a drop down selector for how much the user wants to bet
 Min bet does $5 and Max bet does $50. They should start with $1000.
 track how much money is had through subtracting the bet from total
  Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet
  if three pictures dont match up the user will lose the money that they put up to bet
  when balance reaches 0 a message alerts the user that theyve lost
*/
let handle = document.querySelector('#handle')
handle.addEventListener('click', spin)
let img1 = document.querySelector('.money1')
let img2 = document.querySelector('.money2')
let img3 = document.querySelector('.money3')
let balance = 1000;
let display
let runs = 0
let images = ['gold', 'bitcoin', 'watch', 'purse', 'channel', 'blank']
let bool = false
let flashBool = true
flash = setInterval(flash, 400)

function rewards(){ // Reward Generator, Randomizes values between 0-4 and sets them as options
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      return 0
      break;
    case 1:
      return 1
      break;
    case 2:
      return 2
      break;
    case 3:
      return 3
      break;
    case 4:
      return 4
      break;
  }
}


function spin(){
  handle.src = 'assets/handle.gif'
  display = setInterval(show, 350) //Display a new image every 350th of a second
}


function show(){

  if (bool === false){
    bool = true
    if (runs > 0){
      // alert('one')
      img1.src = `assets/${images[5]}.png`
      img2.src = `assets/${images[5]}.png`
      img3.src = `assets/${images[5]}.png`
      img1.classList.toggle('anim')
      img2.classList.toggle('anim')
      img3.classList.toggle('anim')
    }
  }
  else if (bool === true){
    bool = false
    runs +  1
    console.log(runs);
    if (runs < 10){

      console.log(runs);
      runs = runs + 1
      img1.src = `assets/${images[rewards()]}.jpg`
      img2.src = `assets/${images[rewards()]}.jpg`
      img3.src = `assets/${images[rewards()]}.jpg` //set temporary images
      img1.classList.toggle('anim')
      img2.classList.toggle('anim')
      img3.classList.toggle('anim')// Set the slide in animation
    }
    else{
      img1.src = `assets/${images[rewards()]}.jpg`
      img2.src = `assets/${images[rewards()]}.jpg`
      img3.src = `assets/${images[rewards()]}.jpg`
      img1.classList.toggle('anim')
      img2.classList.toggle('anim')
      img3.classList.toggle('anim')
      checkWin()
    }
  }
}

function checkWin(){
  runs = 0
  img1.classList.toggle('anim')
  img2.classList.toggle('anim')
  img3.classList.toggle('anim')
  clearInterval(display)
  //reset all the things and clear the intervals

  let bet = document.querySelector('#bet').value //grab current winnings
  if ((img1.src === img2.src) && (img2.src === img3.src)){
    bet = bet * 10
    balance += bet
    document.querySelector('.cash').innerText = `$${balance}`
    document.querySelector('#result').innerText = `Congratulations you won $${bet}`
  }
  else{
    balance -= bet
    document.querySelector('.cash').innerText = `$${balance}`
    document.querySelector('#result').innerText = `Sorry you lost $${bet}`
  }

}

function flash(){ //flashy flashy

  if (flashBool){
    flashBool = false
    document.querySelector('.mainSec').style.borderColor = 'black'

  }
  else{
    flashBool = true
    document.querySelector('.mainSec').style.borderColor = 'rgba(232, 200, 68, 1)'
  }
}
