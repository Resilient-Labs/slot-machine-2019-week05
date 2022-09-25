// casino javascript


// an organized container of things that I care about

const imgArray = ['gastly.jpg', 'haunter.jpeg', 'gengar.jpeg', 'pokeball.png', 'teamrocket.jpeg']


const slotOne = document.querySelector('#slotOne')


const slotTwo = document.querySelector('#slotTwo')


const slotThree = document.querySelector('#slotThree')


let totalRupees = 50000

//change these variables and relabel to make sense
let addTwentyThousand = 20000
let addOneThousand = 1000

document.querySelector('#minBet').addEventListener('click', activeBet)
document.querySelector('#maxBet').addEventListener('click', activeBet)


document.querySelector('#amount').innerText = totalRupees

// create bet

function activeBet(event) {

    lostRupees = Number(event.target.value)

    if (totalRupees < lostRupees) {
        alert('You\'ve lost all of your Rupees! You feel the room spinning as you collapse into the darkness...')
        document.querySelector('#seeTotal').innerText = ''

    } else {
        //total rupees = (equal to the value of) total rupees - lost rupees
        totalRupees -= lostRupees

        document.querySelector('#currentRupees').innerText = totalRupees
        cyclePhotos()

    }

}
// this creates the random number to assign to each picture
function randomNumber() {
    let oneThroughFive = Math.floor(Math.random() * 5)
    return oneThroughFive
    
    //return allows you to use the value of that answer and work with it further in the code

}

// imgArray[1] let test = imgArray[1]

function cyclePhotos() {
    let firstNumber = randomNumber()
    let secondNumber = randomNumber()
    let thirdNumber = randomNumber()


    slotOne.src = imgArray[firstNumber]
    slotTwo.src = imgArray[secondNumber]
   slotThree.src = imgArray[thirdNumber]

    winner(firstNumber, secondNumber, thirdNumber)
    
    //winner is described in the function below. it doesnt signify an actual winner.
}

function winner(firstNumber, secondNumber, thirdNumber) {
    if (firstNumber === secondNumber && secondNumber === thirdNumber) {

        document.querySelector('#seeTotal').innerText = 'You\'ve won the grand prize! Congratulations! You\'ve won a shiny gym badge!'
        addMoney()
    } else {
        document.querySelector('#seeTotal').innerText = 'How many hospitals will we have to visit in this reigon?!?!'
    }

}

function winnerTotal() {
    totalRupees += addTwentyThousand
    document.querySelector('#amount').innerText = totalRupees


}

