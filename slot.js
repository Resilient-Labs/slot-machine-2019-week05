// Initialize stats variables
var credits = 1000;
var plays = 0;
var wins = 0;
 var one = 0;
var test = 1;
// Main play function when $5 button is pressed 
function playSlots() {
  // check that user has enough credits
  if (credits > 0) {
    
    //the random method 
    var one = Math.floor(Math.random() * 5);
    var two = Math.floor(Math.random() * 5);
    var three = Math.floor(Math.random() * 5);
 
    // Array of possible icons that match with CSS background url 
    var icons = ["shoes", "purse", "cage", "broom", "mirror"];

    // This is to get the icons for each of the random number result 
    var iconsOne = icons[one];
    var iconsTwo = icons[two];
    var iconsThree = icons[three];

    // this is to set the class of each slot to the icons name 
    document.getElementById("spotOne").classList = iconsOne;
    document.getElementById("spotTwo").classList = iconsTwo;
    document.getElementById("spotThree").classList = iconsThree;

    // condition if all slots are the same 
    if (iconsOne == iconsTwo && iconsTwo == iconsThree) {
      alert('You Won!');
      // Add $5 credit
      credits += 5;
      // Add 1 win 
      wins += 1;

    } else {
      // if player losses, subtract $5 
      credits-=5;
    }
    // keeps track of the number of plays 
    plays++;
    // the status function is called for it to update the scoreboard etc.
    status();
  } else {
    alert('Not enough credits!');
  }
}


// function to write stats to page
function status() {
  document.getElementById("credits").innerHTML = credits;
  document.getElementById("plays").innerHTML = plays;
  document.getElementById("wins").innerHTML = wins;
}

// Call function for when page loads //
status();

//  click event listener for each of the button/lever $5 bet /$50 bet
document.getElementById("button50").addEventListener("click", playSlots50); 
document.getElementById("button5").addEventListener("click", playSlots); 

// Main play function for button press $50 bet 
function playSlots50() {
  // check that user has enough credits
  if (credits > 0) {
    
    //the random method 
    var one = Math.floor(Math.random() * 5);
    var two = Math.floor(Math.random() * 5);
    var three = Math.floor(Math.random() * 5);
 
    // Array of possible icons that match with CSS background url 
    var icons = ["shoes", "purse", "cage", "broom", "mirror"];

    // This is to get the icons for each of the random number result 
    var iconsOne = icons[one];
    var iconsTwo = icons[two];
    var iconsThree = icons[three];

    // this is to set the class of each slot to the icons name 
    document.getElementById("spotOne").classList = iconsOne;
    document.getElementById("spotTwo").classList = iconsTwo;
    document.getElementById("spotThree").classList = iconsThree;

    // condition if all slots are the same 
    if (iconsOne == iconsTwo && iconsTwo == iconsThree) {
      alert('You Won!');
      // Add $50 credit
      credits += 50;
      // Add 1 win 
      wins += 1;
    } else  {
      // if player losses, subtract $50 
      credits-=50;
    }
    // keeps track of the number of plays 
    plays++;
    // the status function is called for it to update the scoreboard etc. 
  status();

  } else {
    alert('Not enough credits!');
  }
}