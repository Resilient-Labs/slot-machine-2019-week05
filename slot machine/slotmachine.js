// alex docanto, william sanchez and i worked on this one together

const imgArray = ['eli1.jpg','omar.png','julian.png','will.png','alex.png']

const firstImage = document.querySelector('#firstImage')
const secondImage = document.querySelector('#secondImage')
const thirdImage = document.querySelector('#thirdImage')


let totalLives = 100000

let addTwentyThousand = 50000
let addFiveThousand = 5000


document.querySelector('#minBet').addEventListener('click', actingBet)
document.querySelector('#maxBet').addEventListener('click', actingBet)



document.querySelector('#seeAmountHere').innerText= totalLives



function actingBet(event){

    betMe = Number(event.target.value)

    if (totalLives < betMe){
        alert('You really have some bad luck...')
        document.querySelector('#seeTotal').innerText= 'You\'ve done well keep going.'
    }
    else{
        totalLives -= betMe
        document.querySelector('#currentLives').innerText = totalLives
        changePictures()
    }
}

//this creates the random number to assign to each picture. it also
function randomNumber(){
    let oneThroughFive = Math.floor(Math.random() * 5)
    return oneThroughFive
    }

    function changePictures(){
        let firstNumber = randomNumber()
        let secondNumber = randomNumber ()
        let thirdNumber = randomNumber ()
    
        firstImage.src = imgArray[firstNumber]
        secondImage.src = imgArray[secondNumber]
        thirdImage.src = imgArray [thirdNumber]

        whoWins(firstNumber, secondNumber, thirdNumber)

 }

 function whoWins(firstNumber, secondNumber, thirdNumber){
     if(firstNumber === secondNumber && secondNumber === thirdNumber){
         document.querySelector('#seeTotal').innerText = 'Congrats, You won!'
         sendBreesh()
     }
     else{
         document.querySelector('#seeTotal').innerText = 'You\'re Losing Money'
     }
 }
function sendBreesh(){
    totalLives +=  addTwentyThousand
    document.querySelector('#seeAmountHere').innerText = totalLives
}
