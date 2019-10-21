// build 3 reels with 5 items in each
// min and max bet with update of current amount won or lost
// min is $5 and max is $50, start at $1000
// match of all 3 wins 10x the Bet
let options = ["CHERRY", "7", "GRAPES", "ALARM", "3BARS"]

document.getElementById('spin').onclick = spin
let current = document.getElementById('money').innerHTML = 1000

function spin() {

  let selectbet = document.getElementById("bet").value;


  let val = Math.random();
  if (val < 0.2) {
    document.getElementById("reelOneItem").innerHTML = options[0]
  } else if(val < 0.4){
    document.getElementById("reelOneItem").innerHTML = options[1]
  } else if(val < 0.6){
    document.getElementById("reelOneItem").innerHTML = options[2]
  } else if(val < 0.8){
    document.getElementById("reelOneItem").innerHTML = options[3]
  } else {
    document.getElementById("reelOneItem").innerHTML = options[4]
  }


  let valTwo = Math.random();
  if (valTwo < 0.2) {
    document.getElementById("reelTwoItem").innerHTML = options[0]
  } else if(valTwo < 0.4){
    document.getElementById("reelTwoItem").innerHTML = options[1]
  } else if(valTwo < 0.6){
    document.getElementById("reelTwoItem").innerHTML = options[2]
  } else if(valTwo < 0.8){
    document.getElementById("reelTwoItem").innerHTML = options[3]
  } else {
    document.getElementById("reelTwoItem").innerHTML = options[4]
  }

  let valThree = Math.random();
  if (valThree < 0.2) {
    document.getElementById("reelThreeItem").innerHTML = options[0]
  } else if(valThree < 0.4){
    document.getElementById("reelThreeItem").innerHTML = options[1]
  } else if(valThree < 0.6){
    document.getElementById("reelThreeItem").innerHTML = options[2]
  } else if(valThree < 0.8){
    document.getElementById("reelThreeItem").innerHTML = options[3]
  } else {
    document.getElementById("reelThreeItem").innerHTML = options[4]
  }

  let itemOne = document.getElementById("reelOneItem").innerHTML;
  let itemTwo = document.getElementById("reelTwoItem").innerHTML;
  let itemThree = document.getElementById("reelThreeItem").innerHTML;

    if (selectbet == "five") {
      if (itemOne == itemTwo && itemTwo == itemThree) {
        document.getElementById("money").innerHTML = current+=45
      } else {
        document.getElementById("money").innerHTML = current-=5
      }
    }


    if (selectbet == "fifty") {
      if (itemOne == itemTwo && itemTwo == itemThree) {
        document.getElementById("money").innerHTML = current+=450
      } else {
      document.getElementById("money").innerHTML = current-=50
      }
    }
  }
