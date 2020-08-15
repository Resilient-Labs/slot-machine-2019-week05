let reel1 = document.getElementById('reel1');
let reel2 = document.getElementById('reel2');
let reel3 = document.getElementById('reel3');
let outcome = document.getElementById("outcome");

let choices = ['<i class="fas fa-pepper-hot fa-4x"></i>', '<i class="fas fa-dollar-sign fa-4x"></i>', '<i class="fas fa-skull-crossbones fa-4x"></i>', '<i class="fas fa-bell fa-4x"></i>', '<i class="fas fa-glass-martini-alt fa-4x"></i>'];
let money = 1000;

function roll5(){
  bet = 5;
}

function roll50(){
  bet = 50;
}

function roll(){
  money -= bet;
  reel1 = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById("reel1").innerHTML = reel1;
  reel2 = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById("reel2").innerHTML = reel2;
  reel3 = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById("reel3").innerHTML = reel3;

  if (reel1 === reel2 && reel1 === reel3) {
    money += bet*10;
    outcome.innerHTML = ('Congratulations! You WON!');
  }else if (reel1 === reel2 || reel2 === reel3){
    outcome.innerHTML = ('Close, but no cigar');
  }else{
    outcome.innerHTML = ('As per usual, The House Always Wins');
  }

  document.getElementById("moneyAndBet").innerHTML = money;

  if (money == 0){
    alert("You're all out of money. You can go into debt if you like!")
  }
}
