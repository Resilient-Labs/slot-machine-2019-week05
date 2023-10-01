// CREATE A SLOT MACHINE WITH 5 ITEMS PER REEL AND 3 REELS. THE USER SHOULD BE ABLE TO BET MIN OR MAX AND HAVE THEIR TOTAL UPDATE
// VARS (smurf tools)
// Balance & Bets 
const minBet = 50 // The smallest amount of money you can bet is 50.
const maxBet = 100 // The largest amount of money you can bet is 100.
let balance = 1000 // You start with 1000 dollars in your account.
const userBalance = document.querySelector('#userBalance') // shows you update balance.
const result = document.querySelector('#result') // shows you if you win or lose.
// REELS
// put the cats/classes names in an array to be picked at random
let reel = ['platano', 'nestor', 'chicken', 'wednesday', 'villanelle']

// EVENT LISTENERS (smurfs)
document.querySelector('#minBet').addEventListener('click', minPicked) // smurfs listen for a click to see if you click minBet
document.querySelector('#maxBet').addEventListener('click', maxPicked) // smurfs listen for a click to see if you click maxBet

// show your initial balance on the screen
userBalance.innerText = `$${balance}`

// FUNCTIONS
// MIN BET PICKED
function minPicked() {
    // If you have enough money in your account...
    if (balance >= minBet) {
        balance -= minBet // Take away 50 dollars from your account.
    }
    pickSlots() // pick cats at random from the reel
}

// MAX BET PICKED
function maxPicked() {
    // If you have enough money in your account...
    if (balance >= maxBet) {
        balance -= maxBet // Take away 100 dollars from your account.
    }
    pickSlots() // pick cats at random from the reel
}

function pickSlots() {
    // Pick random pictures for each reel.
    // Reel 1
    let catOne = Math.floor(Math.random() * reel.length) // randomly pick a cat from the reel
    let slotOne = (reel[catOne]) // the cat randomly picked is assigned to "slotOne."
    document.querySelector('#slotOne').className = '' // Clear any previous cat picture.
    document.querySelector('#slotOne').classList.toggle(slotOne) // Show the cat picture you stopped at on the first reel.

    // Reel 2
    // Repeat the same process for the second and third reels.
    let catTwo = Math.floor(Math.random() * reel.length)
    let slotTwo = (reel[catTwo])
    document.querySelector('#slotTwo').className = ''
    document.querySelector('#slotTwo').classList.toggle(slotTwo)

    // Reel 3
    let catThree = Math.floor(Math.random() * reel.length)
    let slotThree = (reel[catThree])
    document.querySelector('#slotThree').className = ''
    document.querySelector('#slotThree').classList.toggle(slotThree)
    
    compareSlots(slotOne, slotTwo, slotThree) // compare the three cats to see if you won or lost the jackpot.
}

// Check if you won or lost.
function compareSlots(slotOne, slotTwo, slotThree) {
    // If all three pictures are the same...
    if (slotOne === slotTwo && slotTwo === slotThree) {
        // If you still have some money...
        if (balance > 0) { 
            balance += 1000 // Add 1000 dollars to your account.
        }
        result.innerText = 'Jackpot!' // Show that you won the jackpot!
    } else { 
        // If the pictures are not the same...
        result.innerText = 'You Lose!' // Show that you lost.
    }

    userBalance.innerText = `$${balance}`; // Update your balance on the screen.
}