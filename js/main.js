// started working on this with my boyfriend and wanted to create a single function with the wager as a parameter and have it perform differently dependent on the function call but I talked to Joyce and we decided that was too ambitious -- she helped me add some things I was missing

// Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update


// grab things in the dom
const bet1Btn = document.querySelector('#bet1')
const bet5Btn = document.querySelector('#bet5')
const totalMonies = document.querySelector('#dollas')
const firstNumber = document.querySelector('#n1')
const secondNumber = document.querySelector('#n2')
const thirdNumber = document.querySelector('#n3')
const resultText = document.querySelector('#result')

// define what the starting amount of money is and where to adjust that amount
let cash = 1000

document.querySelector('#dollas').innerText = cash


// create a function for betting
function bet1D() {
    // randomly generate values for each reel number
    firstNumber.innerText = Math.ceil(Math.random() * 5)
    secondNumber.innerText = Math.ceil(Math.random() * 5)
    thirdNumber.innerText = Math.ceil(Math.random() * 5)
    let wager = 1

    //create a conditional that says if the first number is equal to both the second And the third number -- 10x wager amount, add to cash, and say you win weeeee
    //else subtract cash - wager and display losing message
    if (firstNumber.innerText === secondNumber.innerText && firstNumber.innerText === thirdNumber.innerText) {
        cash = cash + (wager * 10)
        document.querySelector('#dollas').innerText = cash
        resultText.innerText = 'YOU WIN! YOUR MOM WAS WRONG ABOUT YOU. YOU\'RE SO GOOD WITH MONEY!'
    } else {
        cash = cash - wager
        document.querySelector('#dollas').innerText = cash
        resultText.innerText = 'ain\'t that just the way'
    }
    totalMonies.innerText = cash
}

// duplicate first function and switch out name/wager amount 

function bet5D() {
    firstNumber.innerText = Math.ceil(Math.random() * 5)
    secondNumber.innerText = Math.ceil(Math.random() * 5)
    thirdNumber.innerText = Math.ceil(Math.random() * 5)
    let wager = 5

    if (firstNumber.innerText === secondNumber.innerText && firstNumber.innerText === thirdNumber.innerText) {
        cash = cash + (wager * 10)
        document.querySelector('#dollas').innerText = cash
        resultText.innerText = 'YOU WIN! YOUR MOM WAS WRONG ABOUT YOU. YOU\'RE SO GOOD WITH MONEY!'
    } else {
        cash = cash - wager
        document.querySelector('#dollas').innerText - cash
        resultText.innerText = 'ain\'t that just the way'
    }
    totalMonies.innerText = cash
}

//add event listener to run each function on click
bet1Btn.addEventListener('click', bet1D)
bet5Btn.addEventListener('click', bet5D)

