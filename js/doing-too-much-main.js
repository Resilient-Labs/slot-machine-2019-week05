// Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update


// grab things in the dom
const bet1Btn = document.querySelector('#bet1')
const bet5Btn = document.querySelector('#bet5')
const totalMonies = document.querySelector('#dollas')
const firstNumber = document.querySelector('#n1')
const secondNumber = document.querySelector('#n2')
const thirdNumber = document.querySelector('#n3')
const resultText = document.querySelector('#result')

//change to add event listener to run on click -- why does this run when the page loads?

bet1Btn.addEventListener('click', bet(1))
// bet5Btn.addEventListener('click', bet(5))

// create a function for betting
function bet(wager) {
    // randomly generate values for each reel number
    // Math.floor rounds intergers down rather than up
    firstNumber.innerText = Math.floor(Math.random() * 10)
    secondNumber.innerText = Math.floor(Math.random() * 10)
    thirdNumber.innerText = Math.floor(Math.random() * 10)
    let cash = totalMonies.innerText 
    // let wager = 

    //create a conditional that says if the first number is equal to both the second And the third number -- 10x wager amount, add to cash, and say you win weeeee
    //else subtract cash - wager and display losing message
    if (firstNumber.innerText === secondNumber.innerText && firstNumber.innerText === thirdNumber.innerText) {
        cash = cash + wager
        resultText.innerText = 'YOU WIN! YOUR MOM WAS WRONG ABOUT YOU. YOU\'RE SO GOOD WITH MONEY!'
    } else {
        cash = cash - wager
        resultText.innerText = 'ain\'t that just the way'
    }
    totalMonies.innerText = cash
}

// duplicate first function and switch out name/wager amount 

