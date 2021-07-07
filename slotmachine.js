// Slot Machine Instructions- Build a simple slot Machine; Minimum 5 items / reel; 3 reels; users can BET -  Min or Max; Total (amoutn $) won or loss; Min Bet = $5; Max Bet = $50; Matches of 3 wheels is A WIN.; WIN is 10x BET.

// Grandparent FUNCTION (A of A & B)
let balance = 1000
document.getElementById("minBet").onclick = function(){
  let outcome = winCheck()
  if (outcome === "loss"){
    balance = balance - 5
  }else if (outcome === "win"){
    balance = balance - 5 + (5 * 10)
  }
  document.getElementById("amount").innerHTML = `${outcome} $${balance}.00`
}
// (B of A & B)
document.getElementById("maxBet").onclick = function(){
  let outcome = winCheck()
  if (outcome === "loss"){
    balance = balance - 50
  }else if (outcome === "win"){
    balance = balance - 50 + (50 * 10)
  }
  document.getElementById("amount").innerHTML = `${outcome} $${balance}.00`
}

// Parent FUNCTION
function winCheck (){
  let reel1 = reelspin()
  let reel2 = reelspin()
  let reel3 = reelspin()
  document.getElementById("reel-1").innerHTML = reel1;
  document.getElementById("reel-2").innerHTML = reel2;
  document.getElementById("reel-3").innerHTML = reel3;

  if(reel1 === reel2 && reel2 === reel3){
    return "win"
  }else{
    return "loss"
  }
}

// Child FUNCTION
function reelspin(){
  let result = Math.random()
  if (result<.2){
    return "Duck"
  }else if (result<.4){
    return "Frog"
  }else if (result<.6){
    return "Zebra"
  }else if (result<.8){
    return "Cow"
  }else if (result<1){
    return "Dog"
  }
}





















// We need to create 3 functions.
//
// Grandparent Score FUNCTION 1 -
// A or B. ONCLICK NEEDED IN JAVASCRIPT, not HTML (SEPARATION OF CONCERNS). CAN'T STATE ARGUMENT IN ONCLICK FUNCTION CALL. ONLY CAN RUN FUNCTION "AS IS".
// *We are going to use a range BETWEEN min and max.
// *We are going to start at $1000 (variable will be "balance").
// *loss = balance - bet
// *win = balance - bet + (bet*10)
//
// Parent WinCheck FUNCTION 2 -
// *If Reel 1 === Reel 2 === Reel 3, then WIN.
// *every else is a loss.
// -->return (send this to Output Function)
//
// Child Reels FUNCTION 3 -
// *Measure the outcomes of each reel.
// *We will focus on 1 reel (and then do a loop to create 3 reels)
// *Each reel has its own result
// -->return (send to Parent)
//
// FUNCTION - Output to HTML
// We need to connect the input & output between the Dom and JS
// -Create the HTML.
// -Add appropriate tags to link input to JS.
// -Also use tags to report output to HTML.
