

//TASK://
//Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update

//  PLay button to start the slot machine and button to reset, minimum bet and maximum bet button , two buttons to increase or descrease bet amount for plus or minus 10 (6 total)
// section to display current value/total, you won or lost
//3 "reels" or vertical columns  to spin each image in side, to be spun randomly - similar to Rock, paper scissors
// 5 images inside of the reels//

//Got help from Mark and Dash

let startMoney = 1000
let tenDollars = 10
let pot = parseInt(document.querySelector('.pot h2').innerText)


document.getElementById("minBet").addEventListener("click", betMin)
document.getElementById("minus").addEventListener("click", subtractTen)
document.getElementById("plus").addEventListener("click", plusTen)
document.getElementById("maxBet").addEventListener("click", betMax)
document.getElementById("play").addEventListener("click", play )


document.querySelector('.pot h2').innerText = 0

// IMAGES IN REELS//

const items = ['Dilla.jpg','MF.jpg', 'Pete Rock.jpeg', 'timbo.jpg', '9th.jpg'];

// variable for current pot, pot cannot be less than zero or more than 100 at any given time, user can only bet what user has, so once users money is less than 100, you cannot do max bet, less than 10 no min bet etc


function betMin(){
    if (startMoney <= 0){
        return startMoney
    } 
    document.querySelector('.start h2').innerText = startMoney
    pot = 10
    document.querySelector('.pot h2').innerText = pot
}
function betMax(){
    if (startMoney < 100){
        return startMoney
    }
    document.querySelector('.start h2').innerText = startMoney
    
    pot = 100
    document.querySelector('.pot h2').innerText = pot
}

function subtractTen(){
    pot >= 10? pot -= 10: pot = 0
    document.querySelector('.pot h2').innerText = pot
}
function plusTen(){
    pot >= 0 && pot < 100? pot += 10: pot = 0
    document.querySelector('.pot h2').innerText = pot
}

function play(){
  if(startMoney === 0){
    return
  }  
  const middle = document.getElementById('middle')
  const left = document.getElementById('left')
  const right = document.getElementById('right')
  let random = parseInt (Math.random()*items.length)
  let random1 = parseInt (Math.random()*items.length)
  let random2 = parseInt (Math.random()*items.length)
  middle.src=items[random]
  left.src=items[random1]
  right.src=items[random2]
  let pot = parseInt(document.querySelector('.pot h2').innerText)
  if( random == random1 && random1 == random2){
      pot *=2
      startMoney += pot
      document.querySelector('.start h2').innerText = startMoney
      setTimeout(function(){ alert("You Win!"); }, 100);
  } else{ 
      startMoney -= pot
      document.querySelector('.start h2').innerText = startMoney
  }
    document.querySelector('.pot h2').innerText = 0
    // don't let them play with zero in the pot
  
}































// function spin(){


// }


// function getRandomWeapon(){
// 	var randomNumber=Math.random();
// 	if(randomNumber<.3333){
// 		botsWeapon="scissors";
// 	}
// 	else if(randomNumber<.6666){
// 		botsWeapon="paper";
// 	}
// 	else{
// 		botsWeapon ="rock";
// 	}
// 	return botsWeapon;
// }




