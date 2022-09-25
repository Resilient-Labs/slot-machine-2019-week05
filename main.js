// worked with Jeffrey Moreta (alumni) & Cory (mentor)

// Click on button
// 5 items per slot
// User should be able to bet min or max (2 buttons) and have their total displayed

//start off with $1000
// click on button for a $10 bet now left with current amount $990
//once you click on bet the pictures randomize
//if 3 matching pictures then you win a prize
let total = 1000;
let bet = 0;

document.querySelector('#minBet').addEventListener('click', betTen);
document.querySelector('#fiftyBet').addEventListener('click', betFifty);
document.querySelector('#maxBet').addEventListener('click', betHundred);

// document.querySelector('.result').addEventListener('click', result);

// These functions display current bet and removes total amount of $ and shows how much you've already bet
function betTen() {
	// total = total - 10;
	bet = 10;
	document.querySelector('#currentBet').innerText = bet;
	// document.querySelector('#currentAmt').innerText = total;
}

function betFifty() {
	// total = total - 50;
	bet = 50;
	document.querySelector('#currentBet').innerText = bet;
	// document.querySelector('#currentAmt').innerText = total;
}

function betHundred() {
	// total = total - 100;
	bet = 100;
	document.querySelector('#currentBet').innerText = bet;
	// document.querySelector('#currentAmt').innerText = total;
}

// When you hit submit the slots spin

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#examples
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

document.querySelector('#submitBtn').addEventListener('click', rollTheDice);

function rollTheDice() {
	let currentBet = document.querySelector('#currentBet').innerText;
	if (currentBet != '') {
		if (bet <= total) {
			total = total - bet;
			let randomPic = [
				'img/dollarsign2.jpeg',
				'img/number1.jpeg',
				'img/goldmario1.jpeg',
				'img/number4.jpeg',
				'img/goldbars.jpeg'
			];
			document.querySelector('#slotOne img').src = randomPic[getRandomInt(5)];
			document.querySelector('#slotTwo img').src = randomPic[getRandomInt(5)];
			document.querySelector('#slotThree img').src = randomPic[getRandomInt(5)];

			if (
				document.querySelector('#slotOne img').src == document.querySelector('#slotTwo img').src &&
				document.querySelector('#slotOne img').src == document.querySelector('#slotThree img').src
			) {
				console.log('Winner!');
				document.querySelector('#endGame').innerText = 'You Win!';
				total = total + 2 * bet;
			} else {
				document.querySelector('#endGame').innerText = 'Try Again!';
			}
			document.querySelector('#currentBet').innerText = '';
			bet = 0;
			document.querySelector('#currentAmt').innerText = total;
		} else {
			document.querySelector('#endGame').innerText = 'Go Home!';
		}
	}
}
