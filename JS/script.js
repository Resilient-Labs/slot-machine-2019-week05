// Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update
    //note: there's only 1 player, but they can use two buttons to bet a low amount or high amount

//create a variable for the starting money
let bank = 100
document.querySelector('#bank').innerHTML = bank

//areas where images will show
let resultOne = document.querySelector('#resultOne')
let resultTwo = document.querySelector('#resultTwo')
let resultThree = document.querySelector('#resultThree')


//create an event listener for the lower bet
//create an event listener for the higher bet
document.querySelector('#lowBet').addEventListener('click', betFive)
document.querySelector('#highBet').addEventListener('click', betFifteen)

let imgItems = [
    '<img src="Images/cats1.jpeg"></img>',
    '<img src="Images/cats2.avif"></img>',
    '<img src="Images/cats3.jpeg"></img>',
    '<img src="Images/cats4.jpeg"></img>',
    '<img src="Images/cats5.jpeg"></img>',
]

function randomReel(){
    resultOne = imgItems[Math.floor(Math.random() * imgItems.length)]
    resultTwo = imgItems[Math.floor(Math.random() * imgItems.length)]
    resultThree = imgItems[Math.floor(Math.random() * imgItems.length)]
    document.querySelector('#resultOne').innerHTML = resultOne
    document.querySelector('#resultTwo').innerHTML = resultTwo
    document.querySelector('#resultThree').innerHTML = resultThree
}

//create a function for the lower bet 
    //another fuction needs to be called in here that will randomizeItems on click
    // create conditional; if all 3 reels match user will get a winning message and $50
function betFive() {
    bank = bank - 5
    document.querySelector('#bank').innerHTML = bank
    randomReel()
    if(resultOne === resultTwo && resultTwo === resultThree){
        document.querySelector('#win').innerText = 'You won'
        bank = bank + 50
    } else if (resultOne !== resultTwo || resultTwo !== resultThree || resultTwo !== resultThree){
        document.querySelector('#win').innerText = 'You lose'
    } document.querySelector('#bank').innerText = bank
}

//this is the same function for above, but with higher bet - they will win 100
function betFifteen() {
    bank = bank - 15
    document.querySelector('#bank').innerHTML = bank
    randomReel()
    if(resultOne === resultTwo && resultTwo === resultThree){
        document.querySelector('#win').innerText = 'You won'
        bank = bank + 50
    } else if (resultOne !== resultTwo || resultTwo !== resultThree || resultTwo !== resultThree){
        document.querySelector('#win').innerText = 'You lose'
    } document.querySelector('#bank').innerText = bank
}

