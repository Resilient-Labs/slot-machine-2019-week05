

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
  }else if (outcome==="lose"){
    balance -= userBet
    document.getElementById("outcome").innerHTML="YOU LOST!";
  }document.getElementById("bank").innerHTML=balance;
}


document.getElementById("fiveDollarBet").onclick=bankBalance;
document.getElementById("fiftyDollarBet").onclick=bankBalance;
