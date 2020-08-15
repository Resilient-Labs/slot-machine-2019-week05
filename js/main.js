// /*
// Build a simple slot machine with minimum 5 items per reel and 3 reels - user
// should be able to bet min or max and have their total update



// ****Pseudo Code***
// array = "cherry", lemon, orange, grapes, apple
// array with 3 objects that have a value
// array that holds 5 objects? easier holds a for loop
// make one reel and reuse
// one to hold each value
//input person bet 10 options and update the dom starting the reel spin
// step 2- right a variable for list of items cherry,lemon, etc.
// math random to choose an item from variable write out three times
// button for max
// button for minBet
// have total update the DOM
// how can the js know what is slected for the bet amount? value bet? from html
// place img in html and tag with an id
// name of the array math.random.length Math.floor(Math.random() * Math.floor(max));
// why use a literal ${} and back ticks

// show if someone has won
// be able to show results in three boxes

// If statment should include the following
// if player bets and loses deduct bet amount from total update DOM
// if player wins add 10x bet to total update DOM

// Help from Mentor Sam.
const  slotItems = ["img/ruby.png","img/diamond.png", "img/yellow.png", "img/green.png","img/pearl.png"];
let bank = 1000;
let currentCash = document.getElementById("cash");


function play(){
  const betValue = document.getElementById("bets").value;
  console.log(betValue)
  let items = [];
  for (let i = 0; i<3; i++){
    let result = getRandomSlot(slotItems.length);
    // console.log(slotItems[result])
    document.getElementsByTagName("img")[i].src = slotItems[result]
    items.push(slotItems[result]);
    console.log(items)
    if(items[0]== items[1] && items[0]== items[2]){
      //increase bet value amount and add to bank
      bank += betValue * 10;
      currentCash.innerHTML = bank;
      document.getElementsByTagName("h1")[0].innerHTML = "Congrat's You Won!!!"
      // console.log("winner")
    } else {
      // decrease bank by bet value
      bank -= betValue;
      currentCash.innerHTML = bank;
      document.getElementsByTagName("h1")[0].innerHTML = "Sorry, You lost."
      // console.log("loser")
    }
  }

}




function getRandomSlot(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
