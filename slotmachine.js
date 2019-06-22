

function reelSpin (){
  let result=Math.ceil(Math.random()*5)
  if (result<=1){
    return "Earth"
  }else if (result<=2){
    return "Ocean"
  }else if (result<=3){
    return "Sky"
  }else if (result<=4){
    return "Sun"
  }else if (result<=5){
    return "Moon"
  }
}

function winOrLose (){
  let reel1=reelSpin()
  let reel2=reelSpin()
  let reel3=reelSpin()

  document.getElementById("reel-1").innerHTML=reel1;
  document.getElementById("reel-2").innerHTML=reel2;
  document.getElementById("reel-3").innerHTML=reel3;

  if (reel1===reel2 && reel2===reel3){
    return "win"
  }else {
    return "lose"
  }
}

let balance=1000;
function bankBalance(){
  let outcome=winOrLose()
  const userBet= parseFloat(this.getAttribute ("data-bet"));
  if (outcome==="win"){
    balance += (userBet*10)
    document.getElementById("outcome").innerHTML="YOU WON!";
    document.getElementById("outcome").style.color="blue";
  }else if (outcome==="lose"){
    balance -= userBet
    document.getElementById("outcome").innerHTML="YOU LOST!";
    document.getElementById("outcome").style.color="red";
  }document.getElementById("bank").innerHTML=balance;
}


document.getElementById("fiveDollarBet").onclick=bankBalance;
document.getElementById("fiftyDollarBet").onclick=bankBalance;






//
//
//
//
//
// We need to create 3 functions.
//
// Score FUNCTION 1 -
// *We are going to use a range BETWEEN min and max.
// *We are going to start at $1000 (variable will be "balance").
// *loss = balance - bet
// *win = balance - bet + (bet*10)
//
// Parent FUNCTION
// *If Reel 1 === Reel 2 === Reel 3, then WIN.
// *every else is a loss.
// -->return (send this to Output Function)
//
// Reels (child FUNCTION 2) -
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
