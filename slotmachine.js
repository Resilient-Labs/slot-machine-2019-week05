const items = ["🍓", "🍌", "🍏", "🍑", "🍇"];

let balance = 1000;
let bet = 0;
const total = document.querySelector("#total");
const msg = document.querySelector('#message');
const min = document.querySelector('#min').addEventListener ('click', minBet);
const max = document.querySelector('#max').addEventListener ('click', maxBet);
let reel1 = document.querySelector("#reel1");
let reel2 = document.querySelector("#reel2");
let reel3 = document.querySelector("#reel3");
document.querySelector("#spinner").addEventListener("click", spin);

function randomIndexGen(lastIndex) {
  return Math.floor(Math.random() * (lastIndex - 0 + 1));
}

function spin() {
  let x, y, z;
  //    for (let i = 0; i < items.length; i++) {
  x = randomIndexGen(items.length - 1);
  y = randomIndexGen(items.length - 1);
  z = randomIndexGen(items.length - 1);
  //    }
  console.log(x, y, z);
  reel1.innerText = items[x];
  reel2.innerText = items[y];
  reel3.innerText = items[z];

  if (x === y && x === z) {
    msg.innerText = "Congratulations!";
    balance = balance + bet;
  } else {
    msg.innerText = "Sorry, try again.";
    balance = balance - bet;
  }
  total.innerText = balance;
}

function minBet() {
  bet = 10;
}

function maxBet() {
  bet = 1000;
}

// this.reel1 = ['🍓','🍌','🍏','🍑','🍇'];
// this.reel2 = ['🍓','🍌','🍏','🍑','🍇'];
// this.reel3 = ['🍓','🍌','🍏','🍑','🍇']

// reel1.innerText = random;
// reel2.innerText = random;
// reel3.innerText = random;
// return

// function maxBet() {
//     if (total.innerText <= 0) {
//         msg.innerText = 'Sorry, try again!';
//         console.log('sorry');    }
// }
// function slotMachine(){
//         this.reel1 = ['🍓','🍌','🍏','🍑','🍇'];
//         this.reel2 = ['🍓','🍌','🍏','🍑','🍇'];
//         this.reel3 = ['🍓','🍌','🍏','🍑','🍇'];

//         while (randNum > weights[i])

//         // index equals index

// }

// 5 items per reel 3 reels
// function SlotMachine(){
//     this.reel1 = ["pear","apple","banana","cherry","grapes"];
//     this.reel2 = ["pear","apple","banana","cherry","grapes"];
//     this.reel3 = ["pear","apple","banana","cherry","grapes"];
//   }

// i=30 times for 10 times 3 items
// background image for

//Input field. Ask the user how much they are betting. Min and max
//Create a slot game object with 3 reels
//Each reel is an array with five elements
//the slot object has method to pull the rod
// function SlotMachine(){
//     this.reel1 = ["pear","apple","banana","cherry","grapes"];
//     this.reel2 = ["pear","apple","banana","cherry","grapes"];
//     this.reel3 = ["pear","apple","banana","cherry","grapes"];
//   }
//   SlotMachine.prototype.pullRod = function (x) {
//     var resultArray=[];
//     var money = x;
//     //take every reel in  the prototype
//     //define a random number between 0-4
//     var num1 = Math.floor(Math.random()*5);
//     var num2 = Math.floor(Math.random()*5);
//     var num3 = Math.floor(Math.random()*5);
//     resultArray.push(this.reel1[num1]);
//     resultArray.push(this.reel2[num2]);
//     resultArray.push(this.reel3[num3]);
//     console.log(resultArray);
//     //evaluate the result
//     if ((resultArray[0]==resultArray[1])&&(resultArray[1]==resultArray[2])){
//       console.log("You multiplied by 10!");
//       money = money*10;
//     } else if ((resultArray[0]==resultArray[1])||(resultArray[1]==resultArray[2])||(resultArray[0]==resultArray[2])) {
//       //user duplicates
//       console.log("You doubled!");
//       money = money*2;
//     } else{
//       //user looses
//       console.log("You lost!");
//       money=0;
//     }
//   };
//   var slot = new SlotMachine();
//   slot.pullRod(10);
