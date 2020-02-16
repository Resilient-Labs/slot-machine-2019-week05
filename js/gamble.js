
//randomnize - we need to randomize the possibility of getting 1 out of 5 items in one reel
function randomnize(){
  let result = Math.random()
    if (result < 0.2){
     return "A";
   }else if (result < 0.5){
      return "B"
    }else if (result < 0.7){
      return "C"
    }else if (result < 0.8){
      return "D"
    }else if (result < 1){
      return "E"
    }
}
//document.getElementById Win allows us to have an element on the page that will change and show us that the balance or the value of the function has changed
//Leaving doc...Win empty at the beginning clears the Win text each time the function is ran
//Investigate what innerText does exectly ( it is a string)
function runTheReel(){
  document.getElementById("Win").innerText=""
  let reel1 = randomnize()
    reel1 = document.getElementById("reel1").innerHTML=reel1;
  let reel2 = randomnize()
    reel2 = document.getElementById("reel2").innerHTML=reel2;
  let reel3 = randomnize()
    reel3 = document.getElementById("reel3").innerHTML=reel3;
    if (reel1 === reel2 && reel2 === reel3){
      //update bank has  parameter win will be the value of the parameter, if you pass in win, win will be true. This is telling update bank what to do when it is true.
      updateBank(true)
      document.getElementById("Win").innerText="winner"
    }
    else {
      updateBank(false)
    }
}
document.getElementById("button").addEventListener('click',runTheReel); //.onClick =runTheReel();
//inputs have values if you dont do anymthing with those values then nothing will happen
//we made a new varible and used .value and .innerHTML in string
function updateBank(win){
  let bankEl = document.getElementById("bank")
  let betEl = document.getElementById("bet")
  let bet = parseInt(betEl.value)
  let bank = parseInt(bankEl.innerText)
  //isNaN() is function to check if something is not a number
//what is the correct parameters for the bet
  if (isNaN(bet) || bet<5){
    bet = 5
  }
  else if (bet>50){
    bet = 50
  }
  else if (bet > bank){
    bet = bank
  }
//what is in the bank
  if (win) {
    bank += (bet * 10); //bank = bank + bet {idiomadic programing, using +=,etc..}
  }
  else {
    bank -= bet;
  }
  bankEl.innerText = bank
}



//if(runTheReel() === true){
//  bank
//calculating functio would be initiated by run the reel
