// <!-- Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update -->
// 		<!-- 5 vacation spots - colombia, italy, japan, thailand, copadoccia -->


//assign images variables
let colombia = document.querySelector(".colombia");
let italy = document.querySelector(".italy");
let japan= document.querySelector(".japan");
let thailand = document.querySelector(".thailand");
let cappodocia = document.querySelector(".cappodocia");

// // create total amount, min bet amount , and starting total
// let total = 1000
// let bet10 = 10;
// let bet50 = 50;

//  create array for images
let images = [
    '<img src="img/penol.jpeg"></img>',
	'<img src="img/amalficoast.jpeg"></img>',
	'<img src="img/mtkilajapan.webp"></img>',
	'<img src="img/Pulau-Phi-Phi3.jpg"></img>',
	'<img src="img/capodoccia.avif"></img>',
]

// grab elements and give them variables to work
const bet10Button = document.querySelector('.bet10');
const bet50Button = document.querySelector('.bet50');
const reelOne = document.querySelector('.reel1')
const reelTwo = document.querySelector('.reel2')
const reelThree = document.querySelector('.reel3')
let resultTextDisplay = document.querySelector('#resultText');
let totalDisplay = document.querySelector('#updatedTotal');
const reels = document.querySelectorAll('.reels');

//create click event for when user bets 10 and bets 50
bet10Button.addEventListener('click', bet10Func)
bet50Button.addEventListener('click', bet50Func)

// create function to generate random image index
function randomIndex() {
  return Math.floor(Math.random() * 5);
}

function bet10Func() {
    reelOne.innerHTML = images[Math.floor(Math.random() * 5)]
    reelTwo.innerHTML = images[Math.floor(Math.random() * 5)]
    reelThree.innerHTML = images[Math.floor(Math.random() * 5)]

    if (reelOne === reelTwo && reelTwo === reelThree) {
        totalDisplay.innerText = Number(totalDisplay += 10)
        document.querySelector('#resultText').innerText = "WHERE'S MY SUPER SUIT!?! Congrats winner!"
    } else {
        totalDisplay.innerText = Number(totalDisplay -= 10)
        document.querySelector('#resultText').innerText = "Look's Like Staycation's Only For You"
    }
}
    function bet50Func () {
        reelOne.innerHTML = images[Math.floor(Math.random() * 5)]
        reelTwo.innerHTML = images[Math.floor(Math.random() * 5)]
        reelThree.innerHTML = images[Math.floor(Math.random() * 5)]
    
        if (reelOne === reelTwo && reelTwo === reelThree) {
            totalDisplay.innerText = Number(totalDisplay + 50)
            document.querySelector('#resultText').innerText = "WHERE'S MY SUPER SUIT!?! Congrats winner!"
        } else {
            totalDisplay.innerText = Number(totalDisplay - 50)
            document.querySelector('#resultText').innerText = "You don't like fun?"
        }
    // document.querySelector('#updatedTotal').innerText = total

    // if (total <= 0) {
    //     document.querySelector('#resultText').innerText = "Looks Like Vacation Will Have To Wait Until Next Year. You Lost!"
    // }
}


// // we want to click on a button, makes 1 of 5, 1 of 5 , and 1 of 5 images appear, if images === to each other you win, if images do not === you lose
// // 

// // create function to display results, use text content instead of inner text because it will grab elements 
// function updateDisplay(result) {
//   resultDisplay.textContent = result;
//   betDisplay.textContent = bet;
// }

// // Step 5: Function to handle spinning
// function spin() {
//   if (bet > totalAmount) {
//     alert("You don't have enough balance!");
//     return;
//   }
  
//   totalAmount -= bet; // Deduct the bet from total amount
  
//   // Generate random image indices for each reel
//   const indices = [];
//   for (let i = 0; i < 3; i++) {
//     indices.push(RandomIndex());
//   }

//   // Set the src attribute of images based on the random indices
//   for (let i = 0; i < reels.length; i++) {
//     reels[i].children[0].children[0].src = `image${indices[i] + 1}.jpg`;
//   }

//   // Determine the result
//   const uniqueIndices = new Set(indices);
//   const result = uniqueIndices.size === 1 ? "Jackpot! You Win!" : "Try Again!";
  
//   // Update the total amount and display
//   totalAmount += (uniqueIndices.size === 1) ? bet * 10 : 0; // If it's a jackpot, add 10 times the bet amount
//   updateDisplay(result);
// }

// // Step 6: Add event listeners for buttons
// spinButton.addEventListener('click', spin);

// minBetButton.addEventListener('click', function() {
//   bet = 10;
//   updateDisplay('');
// });

// maxBetButton.addEventListener('click', function() {
//   bet = 300;
//   updateDisplay('');
// });

// // Step 7: Initial display update
// updateDisplay('');