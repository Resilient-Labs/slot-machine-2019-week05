// VARIABLES
const resetButton = document.querySelector(".resetButton");
const minBet = document.querySelector(".minBet");
const maxBet = document.querySelector(".maxBet");
const reel1 = document.querySelector("#reel1");
const reel2 = document.querySelector("#reel2");
const reel3 = document.querySelector("#reel3");
const total = document.querySelector(".total");
const decision = document.querySelector(".winlose");
let updatedTotal = 1000;

// FUNCTIONS
const slotRandomizer = () => {
  let randomImg1 = Math.floor(Math.random() * 5) + 1;
  let randomImg2 = Math.floor(Math.random() * 5) + 1;
  let randomImg3 = Math.floor(Math.random() * 5) + 1;

  reel1.src = `img/${randomImg1}.png`;
  reel2.src = `img/${randomImg2}.png`;
  reel3.src = `img/${randomImg3}.png`;
};

const minRoll = (bet) => {
  bet = 50;
  if (bet > updatedTotal) {
    decision.innerText = "NICE TRY, GO HOME BEFORE I CALL YOUR MAMA";
  } else {
    slotRandomizer();
    if (reel1 === reel2 && reel2 === reel3) {
      updatedTotal += bet * 10;
      total.innerHTML = updatedTotal;
      console.log(total);
      console.log(updatedTotal);
      decision.innerText = "YOU WIN!!!";
    } else {
      updatedTotal -= bet;
      total.innerHTML = updatedTotal;
      console.log(total);
      console.log(updatedTotal);
      console.log(bet);
      decision.innerText = "LOSSAH!!!";
      console.log(total.value);
    }
  }
};

const maxRoll = (bet) => {
  bet = 100;
  if (bet > updatedTotal) {
    decision.innerText = "NICE TRY, GO HOME BEFORE I CALL YOUR MAMA";
  } else {
    slotRandomizer();
    if (reel1 === reel2 && reel2 === reel3) {
      updatedTotal += bet * 10;
      total.innerHTML = updatedTotal;
      console.log(total);
      console.log(updatedTotal);
      decision.innerText = "YOU WIN!!!";
    } else {
      updatedTotal -= bet;
      total.innerHTML = updatedTotal;
      console.log(total);
      console.log(updatedTotal);
      console.log(bet);
      decision.innerText = "LOSSAH!!!";
      console.log(total.value);
    }
  }
};

// const reset = () => {
//   updatedTotal = 1000;
//   reel1.src === "img/frog.png";
//   reel2.src === "img/frog.png";
//   reel3.src === "img/frog.png";
// };

// EVENT LISTENERS
minBet.addEventListener("click", minRoll);
maxBet.addEventListener("click", maxRoll);
resetButton.addEventListener("click", reset);

// const maths = (bet) => {
//   bet = Number(minBet.target.value);
//   if ((reel1 === reel2) === reel3) {
//     updatedTotal += Number(bet) * 10;
//     total.innerHTML = updatedTotal;
//     console.log(total);
//     console.log(updatedTotal);
//     alert("YOU WIN!!!");
//   } else {
//     updatedTotal -= Number(bet);
//     total.innerHTML = updatedTotal;
//     console.log(total);
//     console.log(updatedTotal);
//     console.log(bet);
//     alert("LOSAH!!!");
//   }
// };
// if(randomReel === 1){
//   reelOne.scr ==='1.png'
// }
// else if(randomReel === 2){
//   reelOne.value ==='1'
// }
// else if(randomReel === 3){
//   reelOne.value ==='1'
// }
// else if(randomReel === 4){
//   reelOne.value ==='1'
// }
// else if(randomReel === 5){
//   reelOne.value ==='1'
// }
