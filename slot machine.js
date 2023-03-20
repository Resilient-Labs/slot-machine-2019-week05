// Worked with Will 







const imagesReels = ['krabs1.jpg', 'krabs2.jpeg', 'patrick.jpg', 'krabs3.jpeg', 'spongebob.jpg']
// image slots
const imageOne = document.querySelector('#pickOne')

const imageTwo = document.querySelector('#pickTwo')

const imageThree = document.querySelector('#pickThree')
//variables with values
let moneyBag = 1000
let max = 50
let min = 25
let jackpot = 1000

//create eventlisteners and display money
document.querySelector('#amount').innerText = moneyBag
document.querySelector('#maxBet').addEventListener('click', pullLever)
document.querySelector('#minBet').addEventListener('click', pullLever)


//functions

// create bet and tell function randomPics to start.
// checks if you have enough to bet 
// Also subtract losses
function pullLever(event){
    lostMoney = Number(event.target.value)
    if(moneyBag < lostMoney){
        alert('You are  BROKE AF')
        document.querySelector('#display').innerText = ''
    }else{moneyBag -= lostMoney
        document.querySelector('#currentMoney').innerText = moneyBag
        randomPics()

    }
}

// returns a random number to assign to each picture
function randomNumbers(){
    let oneThroughFive = Math.floor(Math.random()*5)
    return oneThroughFive
}

//runs the function random number three times and assigns it to a variable
function randomPics(){
    let firstNumber = randomNumbers()
    let secondNumber = randomNumbers()
    let thirdNumber = randomNumbers()

//Assigning a random number to our images in the slots  
    pickOne.src = imagesReels[firstNumber]
    pickTwo.src = imagesReels[secondNumber]
    pickThree.src = imagesReels[thirdNumber]
// prepares ti display win or lose
    win(firstNumber, secondNumber, thirdNumber)
}

//checks if its the images match 
function win(firstNumber, secondNumber, thirdNumber){
        if(firstNumber === secondNumber && secondNumber === thirdNumber){
            document.querySelector('#display').innerText = 'You got lucky'
            bagSecured()
        }else{document.querySelector('#display').innerText = 'I Robbed You'}
}

// gives the user the prize
function bagSecured(){
        moneyBag += jackpot
        document.querySelector('#amount').innerText = moneyBag

}