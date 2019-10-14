// // How much money we got
// let playerMoney = 1000;
//
// document.querySelectorAll(".playButton").forEach((el) => {
//   el.addEventListener("click", () => {
//
//     let bet, // Variable to store bet in
//         reelValues = [0, 0, 0]; // Array to store Reel Values in
//
//     // using event.target.id, figure out if 'Minimum Bet' or 'Maximum Bet' was pressed.
//     // If it was Minimum, bet is 5. If it was Maximum, bet is 50.
//     bet = event.target.id === "betMinimum" ? 5 : 50;
//
//     // Spend the Bet Money
//     playerMoney -= bet;
//
//     document.querySelectorAll(".reel").forEach((el, index) => {
//       let reelPick = Math.floor(Math.random() * 5); // Pick a number for the reel
//       reelValues[index] = reelPick; // Assign the number to the current Reel's spot in the reels list
//       switch(reelPick) { // Do an action based on the number picked.
//         case 0: // if the number picked is 0, show a 7
//           el.style.backgroundImage = 'url("img/Lucky 7s")';
//           break;
//         case 1: // if the number picked is 1, show a Banana
//           el.style.backgroundImage = 'url("img/diamond.png")';
//           break;
//         case 2: // if the number picked is 2, show "Big Win"
//           el.style.backgroundImage = 'url("img/HoreShoe.png")';
//           break;
//         case 3: // if the number picked is 3, show a Cherry
//           el.style.backgroundImage = 'url("img/Cherry.png")';
//           break;
//         case 4: // if the number picked is 4, show a Lemon
//           el.style.backgroundImage = 'url("img/Oranges.png")';
//           break;
//         default: // this default should never be reached. if it is, we did something wrong
//           alert("THERE WAS AN ERROR!");
//           playerMoney += bet;
//           return; // give back the betted money and do not proceed
//       }
//     })
//
//     // if all three values in reelValues are equal, then the bet has been won.
//     if(reelValues[0] === reelValues[1] && reelValues[1] === reelValues[2]) {
//       playerMoney += bet * 10;
//     }
//
//     // Update the player's money in the DOM.
//     document.querySelector("#playerMoney").innerHTML = `Player Money: \$${playerMoney}`;
//
//   });
// });
//
//
//
//
//
//
//
//















let total = 1000

const buttons = document.querySelectorAll("button")

buttons.forEach((el)=>{

  el.addEventListener("click", ()=> {

    const spin1 = spinReel(),
          spin2 = spinReel(),
          spin3 = spinReel()

    const winOrLoss = checkIfWin(spin1,spin2,spin3)

    calculateTotalAmount(event.target.id, winOrLoss)

    updateDom()

  })
})

function spinReel(){

  let chance = Math.random()

  let result

  if( chance < .2 ){
    result = "HorseShoe.png"
    // document.querySelector("#reel1").style.background= url("HorseShoe.png")

  }else if( chance < .4 ){
    result = "Oranges.png"

  }else if ( chance < .6 ){
    result = "Cherry.png"

  }else if ( chance < .8 ){
    result = "diamond.png"

  }else{
    result = "Lucky 7s.png "
  }

  return result
}

function checkIfWin(result1,result2,result3){

  if( result1 === result2 && result2 === result3 ){

    return true

  }else{

    return false
  }
}

function calculateTotalAmount(bet, result){

  if(result){

    if(bet === "min"){

      total += 50

    }else{

      total += 500
    }

  }else{

    if(bet === "min"){

      total -= 5

    }else{

      total -= 50
    }
  }
}

function updateDom(){

  document.querySelector("#total").innerHTML = total
}
