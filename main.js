// slot machine symbols
const symbols = ["🍒", "🍊", "🍋", "🍇", "🍉"];

// DOM elements
const reels = [
  document.getElementById("reel1"),
  document.getElementById("reel2"),
  document.getElementById("reel3"),
];
const balanceDisplay = document.getElementById("balance");
const maxBetButton = document.getElementById("max-bet");
const minBetButton = document.getElementById("min-bet");
const spinButton = document.getElementById("spin");

// initial balance
let balance = 100;

// spin cost
let betAmount = 1;

// function to generate a random symbol
function getRandomSymbol() {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

// function to spin the reels
function spinReels() {
  if (balance < betAmount) {
    alert("Insufficient balance. Please place a lower bet.");
    return;
  }

  balance -= betAmount;
  balanceDisplay.textContent = balance;

  for (let i = 0; i < 3; i++) {
    const symbol = getRandomSymbol();
    reels[i].textContent = symbol;
  }

  if (
    reels[0].textContent === reels[1].textContent &&
    reels[1].textContent === reels[2].textContent
  ) {
    balance += betAmount * 5; // You win! Payout 5x the bet
    balanceDisplay.textContent = balance;
    alert("Make It Rain! You won!");
  }
}

// event listeners
maxBetButton.addEventListener("click", function () {
  betAmount = 10;
});

minBetButton.addEventListener("click", function () {
  betAmount = 1;
});

spinButton.addEventListener("click", spinReels);
