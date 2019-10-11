let balance = 1000

document.getElementById("bet5").addEventListener("click", ()=>{
  calculateBalance(5);
})

document.getElementById("bet50").addEventListener("click", ()=>{
  calculateBalance(50);
})

function multiplyBy10(bet){
  return bet * 10
}

function balanceMinusBet(bet){
  return balance - bet
}

function calculateBalance(bet){
  const outcome = winCheck()
  if (outcome === "loss"){
    balance = balanceMinusBet(bet)
  }else if (outcome === "win"){
    balance = balanceMinusBet(bet) + multiplyBy10(bet)
  }
  document.getElementById("amount").innerHTML = `${outcome} $${balance}.00`//template string to add $ sign and .00 to balance
}

function winCheck (){
  const reel1 = reelspin()  //In order to return the results of a function, you need to call the function and make the return a variable in the function your working in.
  document.getElementById("reel-1").innerHTML = reel1;
  const reel2 = reelspin()
  document.getElementById("reel-2").innerHTML = reel2;
  const reel3 = reelspin()
  document.getElementById("reel-3").innerHTML = reel3;
  if(reel1 === reel2 && reel2 === reel3){
    return "win"
  }else{
    return "loss"
    }
}
winCheck()

function reelspin(){
  let result = Math.ceil(Math.random()*5)  
  if (result===1){
    return "CAR"
  }else if (result===2){
    return "BUS"
  }else if (result===3){
    return "PLANE"
  }else if (result===4){
    return "TRAIN"
  }else if (result===5){
    return "BIKE"
  }
}
