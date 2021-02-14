


// let counter = 0
//
// document.getElementById('box1').addEventListener('click', rotate)
//
// function rotate (){
//    document.getElementById("box1").style.transform += 'rotate(45deg)';
//   counter = counter + 1
// }
//
//
//  if (counter === 3){
//   document.getElementById("box2").style.background = "orange"
// }


// Variables
let funds = 2500
let currentbets = 0

document.getElementById('balance').innerText = funds
document.getElementById('totalbets').innerText = currentbets


// Event Listeners
document.querySelector("#five").addEventListener("click", betFive)
document.querySelector("#fifty").addEventListener("click", betFifty)
document.querySelector("#hundred").addEventListener("click", betHundred)
document.querySelector("#addbet").addEventListener("click", addBet)
document.querySelector("#subbet").addEventListener("click", subBet)
document.querySelector("#start").addEventListener("click", spin)


// Bets
function betFive(){
  currentbets = currentbets + 10
  document.querySelector("#totalbets").innerText = currentbets
}
function betFifty(){
  currentbets = currentbets + 50
  document.getElementById('totalbets').innerText = currentbets
}
function betHundred(){
  currentbets = currentbets + 100
  document.getElementById('totalbets').innerText = currentbets

}
function addBet(){
  currentbets = currentbets + 1
  document.getElementById('totalbets').innerText = currentbets

}
function subBet(){
  funds = funds + 1
  currentbets = currentbets - 1
  document.getElementById('totalbets').innerText = currentbets

}

// Spin reels
function spin(e){
  currentbets = parseInt(document.getElementById('totalbets').innerText)
  funds = funds - currentbets
  document.getElementById('balance').innerText = funds
  const slot1 = Math.floor(Math.random()*5)
  const slot2 = Math.floor(Math.random()*5)
  const slot3 = Math.floor(Math.random()*5)
  const iconArray = [
    'diamond.jpg',
    'seven.jpg',
    'fruit1.jpg',
    'dollars.jpg',
    'trash.png',
  ]
  document.querySelector('#slot1').style.backgroundImage = "url(" + iconArray[slot1] +")" 
  document.querySelector('#slot1').style.backgroundSize = "100%"
  document.querySelector('#slot2').style.backgroundImage = "url(" + iconArray[slot2] +")" 
  document.querySelector('#slot2').style.backgroundSize = "100%"
  document.querySelector('#slot3').style.backgroundImage = "url(" + iconArray[slot3] +")" 
  document.querySelector('#slot3').style.backgroundSize = "100%"
  if(funds <= 0){
    alert('You dont have enough money..')
    return;
  }else if((slot1 === slot2) && (slot2 === slot3)){
    document.getElementById('results').innerText = 'You Win!'
    funds = funds + (currentbets*10)
    document.getElementById('balance').innerText = funds;
  }else{
    document.getElementById('results').innerText = 'You Lose!'
  }
  currentbets = 0 
  document.getElementById('totalbets').innerText = currentbets
}
