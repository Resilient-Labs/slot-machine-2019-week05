//   Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels 
//1. made 3 sections. each section is one reel.
//2. need to have 5 items or symbols in the form of images - will use placeholders for now.

// user should be able to bet min or max and have their total update aka how much money they have won or lost.
//1. created a section where we show their current total. They should start with $1000.
let total = 1000;

//insert starting total into the yourCredits section
document.querySelector('#yourCredits').innerText = total;

// make a variable for how much you are betting, for both min and max - inside of the function
//let betsfiveDollars = 5;
//let betsFiftyDollars = 50;

//2. created a button showing bet min. Min bet does $5. added event handler
document.querySelector('#minBet').addEventListener('click', turtleSpinFive);

//3. created a button showing bet max. Max bet does $50. added event handler
document.querySelector('#maxBet').addEventListener('click', flatBreadSpinFifty);


//create a function that will use math.random and give a number that is a whole number
function randomNumber () {
    return Math.floor(Math.random()* 5) //gives numbers 0,1,2,3,4
}

//create a function that runs when clicking the $50 button
function flatBreadSpinFifty (){
    let betsFiftyDollars = 50;

    let outcomeForReelOne = randomNumber();  //assigned random number to a variable representing a reel
    document.querySelector('#reelOne').innerText = outcomeForReelOne  // inserts random number into DOM
    
    let outcomeForReelTwo = randomNumber();
    document.querySelector('#reelTwo').innerText = outcomeForReelTwo

    let outcomeForReelThree = randomNumber();
    document.querySelector('#reelThree').innerText = outcomeForReelThree

    //create a true if statement for winning
    if( outcomeForReelOne == outcomeForReelTwo && outcomeForReelTwo == outcomeForReelThree ){
        //what happens when we win? insert text into a space that says you win
        document.querySelector('#resultsStatement').innerText = 'you win!'
        //modify the total value with new winnings
        total= total + (betsFiftyDollars * 10);
        //insert new total into the DOM
        document.querySelector("#yourCredits").innerText = total;
        
        }else{
            //what happens when we lose? insert text into a space that says you lose
            document.querySelector('#resultsStatement').innerText = 'you lose!'
            //modify the total value losting your bet
            total = total - betsFiftyDollars;
            //insert new total into the DOM
            document.querySelector("#yourCredits").innerText = total;
        }
}

//create a function that runs when clicking the $10 button
function turtleSpinFive (){
    let betsFiveDollars = 5;

    let outcomeForReelOne = randomNumber();  //assigned random number to a variable representing a reel
    document.querySelector('#reelOne').innerText = outcomeForReelOne  // inserts random number into DOM
    
    let outcomeForReelTwo = randomNumber();
    document.querySelector('#reelTwo').innerText = outcomeForReelTwo

    let outcomeForReelThree = randomNumber();
    document.querySelector('#reelThree').innerText = outcomeForReelThree

    //create a true if statement for winning
    if( outcomeForReelOne == outcomeForReelTwo && outcomeForReelTwo == outcomeForReelThree ){
        //what happens when we win? insert text into a space that says you win
        document.querySelector('#resultsStatement').innerText = 'you win!'
        //modify the total value with new winnings
        total= total + (betsFiveDollars * 10);
        //insert new total into the DOM
        document.querySelector("#yourCredits").innerText = total;
        
        }else{
            //what happens when we lose? insert text into a space that says you lose
            document.querySelector('#resultsStatement').innerText = 'you lose!'
            //modify the total value losting your bet
            total = total - betsFiveDollars;
            //insert new total into the DOM
            document.querySelector("#yourCredits").innerText = total;
        }
}




// object is a container element that holds something.

// the object is some thing where you put the animation.
