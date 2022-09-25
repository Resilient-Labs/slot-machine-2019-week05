//simple slot machine
let reels = Array.from(document.querySelectorAll("#reel"));
let reel1 = document.querySelector(".reel1"); 
let reel2 = document.querySelector(".reel2");
let reel3 = document.querySelector(".reel3");

document.querySelector("form").addEventListener("submit",spin);
//make 3 reels with 5 numbers
//math.random x # of items in each reel
function spin(event) {
    event.preventDefault() //prevents form from refreshing
    for (let reel of reels) {
    reel.innerText = Math.floor(Math.random() * 5);
  }
  let left = reel1.innerText;
  let middle = reel2.innerText;
  let right = reel3.innerText;

  win(left === middle && middle === right);
}


//assign radio input value as bet
function win(winning) {
  let balance = document.querySelector(".balance");
  let bet = document.querySelector('input[name="bet"]:checked').value;
//if they win it’s 10x on their bet
//otherwise the bet is subtracted from balance
  if (winning) {
    balance.innerText = Number(balance.innerText) + (Number(bet) * 10);
    document.querySelector("#seeResult").innerText = "Congrats! You won 🤑"
  } else {
    balance.innerText = balance.innerText - bet;
    document.querySelector("#seeResult").innerText = "Better luck next time 😿"
  }
}