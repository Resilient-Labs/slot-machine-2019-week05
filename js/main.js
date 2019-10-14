// How much money we got
let playerMoney = 1000;

const slotMachine = document.querySelectorAll(".playButton").forEach((el) => {
  el.addEventListener("click", () => {

    let bet, // Variable to store bet in
    reelValues = [0, 0, 0]; // Array to store Reel Values in

    // using event.target.id, figure out if 'Minimum Bet' or 'Maximum Bet' was pressed.
    // If it was Minimum, bet is 5. If it was Maximum, bet is 50.
    bet = event.target.id === "betMinimum" ? 5 : 50;

    // Spend the Bet Money
    playerMoney -= bet;

    document.querySelectorAll(".reel").forEach((el, index) => {
      let reelPick = Math.floor(Math.random() * 7); // Pick a number for the reel
      reelValues[index] = reelPick; // Assign the number to the current Reel's spot in the reels list
      switch(reelPick) { // Do an action based on the number picked.
        case 0: // if the number picked is 0, show a 7
          el.style.backgroundImage = 'url("css/the-office-characters/1.png")';
          break;
        case 1: // if the number picked is 1, show a Banana
          el.style.backgroundImage = 'url("css/the-office-characters/2.png")';
          break;
        case 2: // if the number picked is 2, show "Big Win"
          el.style.backgroundImage = 'url("css/the-office-characters/3.png")';
          break;
        case 3: // if the number picked is 3, show a Cherry
          el.style.backgroundImage = 'url("css/the-office-characters/4.png")';
          break;
        case 4: // if the number picked is 4, show a Lemon
          el.style.backgroundImage = 'url("css/the-office-characters/5.png")';
          break;
        case 5:// if the number picked is 4, show a Lemon
        el.style.backgroundImage = 'url("css/the-office-characters/6.png")';
        break;
        case 6:// if the number picked is 4, show a Lemon
        el.style.backgroundImage = 'url("css/the-office-characters/7.png")';
        break;
        default: // this default should never be reached. if it is, we did something wrong
          alert("THERE WAS AN ERROR!");
          playerMoney += bet;
          return; // give back the betted money and do not proceed
      }
    })

    if (playerMoney <0){
      alert("PLEASE ADD MORE MONEY")

    }

    // if all three values in reelValues are equal, then the bet has been won.
    if(reelValues[0] === reelValues[1] && reelValues[1] === reelValues[2]) {
      alert   ("I DECLARE BANKRUPTCYYYYYYYYYYYY (sike you won)")
      playerMoney += bet * 10;
    }


    // Update the player's money in the DOM.
    document.querySelector("#playerMoney").innerHTML = `Player Money: \$${playerMoney}`;

  });
});
