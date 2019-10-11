// function maxBet()
// lose their bet money $50

let bank = 1000;
let wheel1 = 0,
  wheel2 = 1,
  wheel3 = 2;
let bett = 0
// wheel starts spinning becomes a new state

// function for when they bet
document.getElementById("btn1").addEventListener("click", minBet);
function minBet() {
  bank -= 5;
  console.log(`${bank} is now this amount`);
  spin();


  if (iWin()) {
    document.getElementById('results').innerHTML= "You win get that bag!!!";
    let winnings = reward(5);
    let newBank = winnings + bank;
    document.getElementById('moneyUpdate').innerHTML=newBank

  } else {
    document.getElementById('moneyUpdate').innerHTML= bank-5;
    document.getElementById('results').innerHTML="Try again"
  }
}

function moneyUpdate() {
  document.getElementById('moneyUpdate').innerHTML= bank

}

document.getElementById("btn2").addEventListener("click", maxBet);
function maxBet() {
  bank -= 50;
  console.log(`${bank} is now this amount`);
  spin();
  if (iWin()) {
    let winnings = reward(50);
    let newBank = winnings + bank;
    console.log(newBank);    document.getElementById('moneyUpdate').innerHTML= newBank
    return("you win!!!");

  } else {
    document.getElementById('moneyUpdate').innerHTML=  bank-50;
    document.getElementById('results').innerHTML="Try again"

  }
}
// if they win multiply their bet by 10
function reward(bet) {
  return bet * 10;
}

// functions for how the wheel will spin
function spin() {
  let symbols = [
    "img/oranges.png",
    "img/apple.png",
    "img/lemon.png",
    "img/cherries.png",
    "img/grapes.png"
  ];

   wheel1 = Math.floor(Math.random()* symbols.length);
   // symbols[wheel1]
   document.getElementById("box1img").src=symbols[wheel1];

    wheel2 = Math.floor(Math.random()* symbols.length);
    // symbols[wheel2]
    document.getElementById("box2img").src=symbols[wheel2];


    wheel3 = Math.floor(Math.random()* symbols.length);
    // symbols[wheel3]
    document.getElementById("box3img").src=symbols[wheel3];



  console.log(
    `This is the status of wheel1:${wheel1},wheel2:${wheel2},wheel3:${wheel3}`
  );
}

function iWin() {
  return wheel1 === wheel2 && wheel2 === wheel3;
}
