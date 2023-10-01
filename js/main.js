/* Pseudo Code 

1. Look at specific parts of our webpage: where the money is shown, the betting buttons, the big spin button, and the result area.
2. Place a smurf on each button and tell the smurf what to do when called.
3. Give the player a starting amount of money ($1000) and remember they haven’t chosen their bet yet.
4. Write down the emoji symbols the slot machine can show.
5. Choose a random emoji from our list.
6. Show the player their current money.
7. Tell the smurfs on the betting buttons what to do when called: set the bet to a small or big amount.
8. Decide the outcome when the player doesn’t get the same emojis: show them different emojis and take away their bet money.
9. The big spin: check if the emojis match to see if the player wins or loses, then adjust their money.
10. First things first, show the player their starting money amount.
*/

const balanceElement = document.getElementById("balance");
const minBetButton = document.querySelector(".bet-btn.min-bet");
const maxBetButton = document.querySelector(".bet-btn.max-bet");
const spinButton = document.querySelector(".spin-btn");
const resultElement = document.getElementById("result");

minBetButton.addEventListener("click", setMinBet);
maxBetButton.addEventListener("click", setMaxBet);
spinButton.addEventListener("click", spinReels);

let playerBalance = 1000;
let currentBet = 0;

let reels = document.querySelectorAll(".reel");

const emojis = ["🍒", "🍌", "🔔", "🫐", "🍋", "✖️", "🍊", "7️⃣", "🍉"];

function getRandomEmoji() {
	return emojis[Math.floor(Math.random() * emojis.length)];
}

function updateBalanceDisplay() {
	balanceElement.textContent = `Balance: $${playerBalance}`;

	if (playerBalance < 5) {
		minBetButton.remove();
	}

	if (playerBalance < 50) {
		maxBetButton.remove();
	}
}

function setMinBet() {
	currentBet = 5;
}

function setMaxBet() {
	currentBet = 50;
}

function playerLoses() {
	const reels = document.querySelectorAll(".reel");
	resultElement.innerText = "You Lost!";
	resultElement.style.color = "red";

	// this is reinitialized the original values of the array so that every time the function is called the array emojis are back to 9 and not 6 items
	// due to the splice method being run 3 times in the loop.
	let nonMatchingEmojis = [
		"🍒",
		"🍌",
		"🔔",
		"🫐",
		"🍋",
		"✖️",
		"🍊",
		"7️⃣",
		"🍉",
	];

	for (let i = 0; i < 3; i++) {
		const chosenIndex = Math.floor(Math.random() * nonMatchingEmojis.length);
		reels[i].textContent = nonMatchingEmojis[chosenIndex];

		// this method is removing the element from the array at the given index and only removing one element
		// so that when the loop runs again its not selecting the same element twice because it no longer exist in the array

		nonMatchingEmojis.splice(chosenIndex, 1);
	}

	playerBalance -= currentBet;
}

function spinReels() {
	if (currentBet === 0) {
		return (resultElement.innerText = "Please place a bet first!");
	}

	let probabilityOfWinning = 1 / 9;

	if (Math.random() < probabilityOfWinning) {
		// Player wins
		resultElement.innerText = "You Won!";
		resultElement.style.color = "green";

		let winningEmoji = getRandomEmoji();

		document.querySelector(".reel1").innerText = winningEmoji;
		document.querySelector(".reel2").innerText = winningEmoji;
		document.querySelector(".reel3").innerText = winningEmoji;

		if (currentBet === 5) {
			playerBalance += 100;
		} else if (currentBet === 50) {
			playerBalance += 500;
		}
	} else {
		// Player loses
		playerLoses();
	}

	currentBet = 0;
	updateBalanceDisplay();
}

updateBalanceDisplay();
