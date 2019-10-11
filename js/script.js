// SLOT MACHINE GAME!!!!
// With $1,000 in hand, the player should be able to bet either a minimum value
// (which is $5) or a maximum value (which is $50).
// When the reels spin, give each reel a random image.
// If all three reels have the same image, the player wins money equal to 10
// times their bet (without refunding the money spent), and a fanfare is played.
// If they lose, they get nothing.

// How much money we have
let playerMoney = 1000;

// The fanfare that plays when a round is won
let gameWinFanfare = new Audio("snd/windows 3-1 fanfare.mp3");

// If this variable is false, the round won't play
let enoughTimePassedToPlay = true;

// Grab and loop through all play buttons in the DOM.
document.querySelectorAll(".playButton").forEach((el) => {

  // Add a click event listener.
  el.addEventListener("click", () => {

    if(!enoughTimePassedToPlay) {
      return;
    }

     // Variable to store bet in
    let bet,
        // array of the reels
        reelList = document.querySelectorAll(".reel");

    // determine the bet based on what button was pressed.
    bet = determineBet(event.target.id);

    // Decide if the player can play this bet.
    if(!canPlay(bet)) {

      // If they can't, alert that they don't have the money.
      alert("Oops, you don't have enough money!");

      // Return early, exiting the event.
      return;
    }

    // randomly go through each reel
    reelList.forEach((el) => {

      // give each reel a random image
      el.style.backgroundImage = spinRandomImage();

    })

    // based on the reel results, decide if the round was won
    const roundWon = checkIfWon(reelList);

    // using the bet and the round check, change the player's money
    const moneyModifier = calculateMoneyChange(bet, roundWon);

    // if the round was won
    if(roundWon) {

      // play the fanfare
      gameWinFanfare.play();

    }

    // modify the money
    playerMoney += moneyModifier;

    // Update the player's money in the DOM.
    document.querySelector("#playerMoney").innerHTML = `Player Money: \$${playerMoney}`;

    greyOutAndTempDisable();

  });
});

// Determine how much the player is betting
function determineBet(whichButton) {

  // If button clicked was the minimum button, bet $5. Otherwise, bet $50
  return whichButton === "betMinimum" ? 5 : 50;

}

// Determine if the player can even play the round
function canPlay(betAmount) {
  
  // Round can only be played if the bet would not bring the player into the negative.
  return (playerMoney - betAmount) >= 0;

}

// Determine if the player won the round
function checkIfWon(results) {

  // Check if all three reels have the same image.
  if(results[0].style.backgroundImage === results[1].style.backgroundImage && results[1].style.backgroundImage === results[2].style.backgroundImage) {
    
    // if they do, return true
    return true;

   } else {

    // otherwise, return false
    return false;

   }
}

// Based on the bet and the win/loss condition, determine how the player's money
// changes.
function calculateMoneyChange(bet, result) {

  // Money change is equal to bet * 9 ((bet * 10) - bet) if you win, and
  // -bet if you lose (adding negative = subtracting positive)
  return result ? bet * 9 : -bet;

}

// Randomly pick a picture to put in a reel
function spinRandomImage() {

  // Generate a random number
  let chance = Math.random();
  
  // 20% chance
  if(chance < .2) {

    // Return a picture of a 7
    return 'url("img/Image7.png")';

    // 20% chance
  } else if(chance < .4) {
  
    // Return a picture of a banana
    return 'url("img/ImageBanana.png")';

    // 20% chance
  } else if(chance < .6) {

    // Return a picture of "BIG WIN"
    return 'url("img/ImageBigWin.png")';

    // 20% chance
  } else if(chance < .8) { // 20% chance for a Cherry

    // Return a picture of a Cherry
    return 'url("img/ImageCherry.png")';

    // give this is none of the other chances was good
  } else {

    // Return a picture of a Lemon
    return 'url("img/ImageLemon.png")';

  }
}

// grey out buttons and disable ability to play for 2 seconds
function greyOutAndTempDisable() {
  //
  enoughTimePassedToPlay = false;
  
  document.querySelector("#betMinimum").style.backgroundColor = "#999999";
  document.querySelector("#betMaximum").style.backgroundColor = "#999999";

  console.log(`Timer Started at ${Date.now()}`);

  setTimeout(() => {
    enoughTimePassedToPlay = true;
    document.querySelector("#betMinimum").style.backgroundColor = "#00dddd";
    document.querySelector("#betMaximum").style.backgroundColor = "#ee0000";
    console.log(`Timer Ended at ${Date.now()}`);
  }, 2000);
}
