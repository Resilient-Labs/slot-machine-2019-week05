//Third Revision of Slotmachine,

/* Write two smurfs that are going to listen for a "click" on Min-bet / Max-bet & run the function Of (yet to be made)

write a function that updates the Win or Loss
write a function that updates the Balance, After winning or losing

Declare a variable for the initial balance of 1000


Declare a variable for the current bet(s)
Set a default

Declare a function that will remove the betting buttons after the balance is under the bet amounts
*/
// --------------------------
//1ST Write two smurfs that are going to listen for a "click" on Min-bet / Max-bet & run the function Of (yet to be made)

// 2ND write a function that updates the Win or Loss
// ------------------------------------

 //Create a function that stops the user that will not allow them to bet once the balance is less then the current bet

//Create a function that checks if images match to make a win & run appropiate function





document.addEventListener('DOMContentLoaded', () => {
    const reels = document.querySelectorAll('.reel');
    const winLose = document.getElementById('winLose');
    const finalBalance = document.getElementById('money');
   
    let userBalance = 1000;
    let currentBet = 0;
    //set balance & default bet


    //arrays are simpler to list then writing the con

    //constant variable that contains an Array with a list of images Try to use proper terminology to explain things better
    const symbols = ['./css/Cartoon-Burrito-1-580x386.jpg', './css/download (1).png', './css/download.png', './css/sand.jpg', './css/taco.png'];

    const minBetButton = document.querySelector('.minBet');
    const maxBetButton = document.querySelector('.maxBet');

    minBetButton.addEventListener('click', () => {
        if (userBalance >= 20) {
            currentBet = 20;
            roll();
        }
    });

    maxBetButton.addEventListener('click', () => {
        if (userBalance >= 200) {
            currentBet = 200;
            roll();
        }
    });

    function userLoses() {
        winLose.innerText = 'You Lose';
        winLose.style.color = "red"
        userBalance -= currentBet;
        updateBalance();
    }

    function updateBalance() {
        finalBalance.innerText = `Balance: ¥${userBalance}`;
    }

    function spinReels() {
        const results = [];     //Justin, chat solution for the reel spinning conditonal
        for (const reel of reels) {
            const randomIndex = Math.floor(Math.random() * symbols.length);
            const symbol = symbols[randomIndex];
            reel.innerHTML = `<img src="${symbol}">`;
            results.push(symbol);
        }

        return results;
    }
    
    function checkWin(results) {
        console.log(results)
        // console.log(results[0])
        const firstSymbol = results[0];
        const isWin = results.every(symbol => symbol === firstSymbol);
        //every method is like a for( Loop ) goes through every element 
        return isWin;
    }


    //Create a function that stops the user that will not allow them to bet once the balance is less then the current bet
    function roll() {
        if (userBalance < currentBet) {
            winLose.innerText = 'Not enough balance';
            return;
        }

        const results = spinReels();



        //Checks the matching 3 images & displays 'you win'
        //need to make the prompt of win display it in green text
        //user balance is added with the current bet & multiplyr
        //if the function does not run its because they lost
        //display loss if else
        setTimeout(() => {
            if (checkWin(results)) {
                winLose.innerText = 'You Win';
                winLose.style.color = "green";
                userBalance += currentBet * 2;
            } else {
                userLoses();            //Else user has lost
            }
            currentBet = 0;
            updateBalance();            //balance update 
        });
    }

    updateBalance();
});







//New Methods & functionality used in this project Math.Floor









// document.addEventListener('DOMContentLoaded', (event) => {
//     balance();
// });

// let userBalance = 1000;
// let currentBet = 0;

// let winLose = document.getElementById('winLose')
// let finalBalance = document.getElementById('money')

// document.querySelector('.minBet').addEventListener('click', minBet);
// document.querySelector('.maxBet').addEventListener('click', maxBet);

// function minBet(){
//     currentBet = 20;
//     roll()
// }

// function maxBet(){
//     currentBet = 200;
//     roll()
// }

// function userLoses(){
//     winLose.innerText='You Lose';
//     userBalance -= currentBet;
// }

// function balance(){
//     finalBalance.innerText=`Balance ¥${userBalance}`;
// }




// function roll(){
//     if (Math.random() < 1/5){
//         winLose.innerText='You Won';
        
//         if (currentBet === 20) {
//             userBalance += currentBet * 2;  // Example multiplier
//         } else if (currentBet === 200) {
//             userBalance += currentBet * 4;  // Example multiplier
//         }
//     }   else {
//         userLoses();
//     }

//     currentBet = 0
//     balance();
    
// }

// balance()