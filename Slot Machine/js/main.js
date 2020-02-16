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
//Worked with mentor Antony on the minBet maxBet functionality & my group that included: Aiperi

document.getElementById("playSlots").addEventListener("click", spinReel)

const minBet = 5
const maxBet = 50
let balance = 1000

let slotOne = document.getElementById("slot1")
let slotTwo = document.getElementById("slot2")
let slotThree = document.getElementById("slot3")

document.getElementById("balance").innerHTML = balance

function displayMessage(msg){
  document.getElementById("displayMessage").innerHTML = msg
}

function spinReel() {
  let images = ["./hummingbird-transparent-11.png", "mask.png", "./hibiscus.png", "./mango.png", "./pan.png"];
  let randomSpin1 = Math.floor(Math.random() * images.length)
  let randomSpin2 = Math.floor(Math.random() * images.length)
  let randomSpin3 = Math.floor(Math.random() * images.length)
  let bet = document.getElementById("displayBet").value

  if (bet < minBet || bet > maxBet){
    displayMessage(`Bet must be between ${minBet} and ${maxBet}.`)
    return;
  }

  if (balance <= 0){
    displayMessage("Oh No! Game Over!")
    return;
  }

  if (randomSpin1 === randomSpin2 && randomSpin2 === randomSpin3){
    displayMessage('You Win!')
    balance += bet * 10
  }else{
    displayMessage('You Lose!')
    balance -= bet
  }

  document.getElementById("balance").innerHTML = balance
  slotOne.setAttribute("src", images[randomSpin1]);
  slotTwo.setAttribute("src", images[randomSpin2]);
  slotThree.setAttribute("src", images[randomSpin3]);
}



// document.getElementById("box1").onclick = rotating;
// var keepRotating = 0;
//
// function rotating(){
//   var rotateB = document.getElementById('box1');
//     rotateB.style.transform = `rotate(${keepRotating+= 45}deg)`;
// }

// const boxes = document.querySelectorAll(".boxes")
// let box1Clicks = 0,
//     box2Clicks = 0,
//     box3Clicks = 0
//
// boxes.forEach(el => {
//   el.addEventListener("click", ()=> {
//     const boxClicked = event.target.id
//     if( boxClicked === "box1"){
//       box1Clicks++
//     }else if (boxClicked === "box2"){
//       box2Clicks++
//     }else{
//       box3Clicks++
//     }
//     if(box1Count !== 3 && box2Count !== 3 && box3Count !== 3){
//       document.querySelectorAll(".box").forEach((el)=>{
//        el.style.background = "white"
//      })
//     }
//     if( box1Clicks === 3 ){
//       document.querySelector("#box2").style.background = "red";
//       document.querySelector("#box3").style.background = "red";
//       box1Clicks = 0
//     }else if( box2Clicks === 3 ){
//       document.querySelector("#box1").style.background = "red";
//       document.querySelector("#box3").style.background = "red";
//       box2Clicks = 0
//     }else if (box3Clicks === 3) {
//       document.querySelector("#box1").style.background = "red";
//       document.querySelector("#box2").style.background = "red";
//       box3Clicks = 0
//     }
//     console.log(box1Clicks,box2Clicks,box3Clicks);
//   })
// })
