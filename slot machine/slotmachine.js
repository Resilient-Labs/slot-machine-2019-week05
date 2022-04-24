//GOT HELP FROM MEMBERS OF HOUSE CASS

const imgArray = ['./images/attacktitan.gif','./images/armoured1.png','./images/beasttitan1.png','./images/jawtitan.png','./images/warhammer.png']

const firstImage = document.querySelector('#firstImage')
const secondImage = document.querySelector('#secondImage')
const thirdImage = document.querySelector('#thirdImage')


let totalLives = 100000

let addFiftyThousand = 50000
let addFiveThousand = 5000


document.querySelector('#minBet').addEventListener('click', actingBet)
document.querySelector('#maxBet').addEventListener('click', actingBet)




document.querySelector('#seeAmountHere').innerText= totalLives


//this would create the betting event
function actingBet(event){

    betMe = Number(event.target.value)

    if (totalLives < betMe){
        alert('The deaths of many are now on your conscious to bear...')
        document.querySelector('#seeTotal').innerText= 'You\'ve wiped out an entire city... so ruthless.'
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
         document.querySelector('#seeTotal').innerText = 'CONGRATS, YOU ARE A TITAN SHIFTER!'
         sendBreesh()
     }
     else{
         document.querySelector('#seeTotal').innerText = '  WHY DO YOU CONTINUE?'
     }
 }
function sendBreesh(){
    totalLives +=  addFiftyThousand
    document.querySelector('#seeAmountHere').innerText = totalLives
}
