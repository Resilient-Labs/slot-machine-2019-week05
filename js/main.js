// VARIABLES
const minBet = document.querySelector(".minBet");
const maxBet = document.querySelector(".maxBet");
const reel1 = document.querySelector("#reel1");
const reel2 = document.querySelector("#reel2");
const reel3 = document.querySelector("#reel3");
const total = document.querySelector(".total");
const decision = document.querySelector(".winLose");
const x = document.querySelector(".closeOne");
const y = document.querySelector(".closeTwo");
const z = document.querySelector(".closeThree");
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
    outOfMoneyModal();
  } else {
    slotRandomizer();
    if (reel1.src === reel2.src && reel2.src === reel3.src) {
      updatedTotal += bet * 10;
      total.innerHTML = updatedTotal;
      console.log(total);
      console.log(updatedTotal);
      winModal();
      decision.innerText = "WINNER!";
    } else {
      updatedTotal -= bet;
      total.innerHTML = updatedTotal;
      console.log(total);
      console.log(updatedTotal);
      console.log(bet);
      decision.innerText = "LOSER! TRY AGAIN";
      console.log(total.value);
    }
  }
};

const maxRoll = (bet) => {
  bet = 100;
  if (updatedTotal === 0) {
    outOfMoneyModal();
  } else if (bet > updatedTotal) {
    notEnoughMoneyModal();
  } else {
    slotRandomizer();
    if (reel1.src === reel2.src && reel2.src === reel3.src) {
      updatedTotal += bet * 10;
      total.innerHTML = updatedTotal;
      console.log(total);
      console.log(updatedTotal);
      winModal();
      decision.innerText = "WINNER!";
    } else {
      updatedTotal -= bet;
      total.innerHTML = updatedTotal;
      console.log(total);
      console.log(updatedTotal);
      console.log(bet);
      decision.innerText = "LOSER! TRY AGAIN";
      console.log(total.value);
    }
  }
};

// MODALS
const winModal = () => {
  document.getElementById("winModal").style.display = "block";
};
const outOfMoneyModal = () => {
  document.getElementById("outOfMoneyModal").style.display = "block";
};
const notEnoughMoneyModal = () => {
  document.getElementById("notEnoughMoneyModal").style.display = "block";
};

const closeOne = () => {
  document.getElementById("winModal").style.display = "none";
};
const closeTwo = () => {
  document.getElementById("outOfMoneyModal").style.display = "none";
};
const closeThree = () => {
  document.getElementById("notEnoughMoneyModal").style.display = "none";
};

// EVENT LISTENERS
minBet.addEventListener("click", minRoll);
maxBet.addEventListener("click", maxRoll);
x.addEventListener("click", closeOne);
y.addEventListener("click", closeTwo);
z.addEventListener("click", closeThree);
