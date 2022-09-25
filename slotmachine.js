//SLOT MACHINE
//ADD EVENT LISTENER
const imageArray = ['mrkrabs.png', 'patrick.png', 'spongebob.png', 'squidward.png', 'plankton.png' ]

const firstImage = document.querySelector('#firstImage')
const secondImage = document.querySelector('#secondImage')
const thirdImage = document.querySelector('#thirdImage')

let yoBread = 500;
let oneHundred = 100
let five = 5

document.querySelector('#five').addEventListener('click', theBet);
document.querySelector('#hundred').addEventListener('click', theBet);
//set monetary value

document.querySelector('#amount').innerText = yoBread

function theBet(event) {
    lostBread = Number(event.target.value)
 if (yoBread < lostBread) {
    alert('Take yo broke ass Home!!')
    document.querySelector('#seeTotal').innerText = ''
 } else {
    yoBread -= lostBread
    document.querySelector('#coins').innerText = yoBread
    cyclePhotos()
 }
}
  //this creates the random number to assign to each picture
function randomNumber() {
    let oneThroughFive = Math.floor(Math.random() * 5)
    return oneThroughFive
}

function cyclePhotos() {
   //these variables below this comment run this randmon number function three times and take the results and put it in a variable.
    let firstNumber = randomNumber()
    let secondNumber = randomNumber()
    let thirdNumber = randomNumber()
   //go into array and assign these random numbers to images to display in the dom.
    firstImage.src = imageArray [firstNumber]
    secondImage.src = imageArray [secondNumber]
    thirdImage.src = imageArray [thirdNumber]
    
    winner(firstNumber, secondNumber, thirdNumber)
}

function winner(firstNumber, secondNumber, thirdNumber) {
    if (firstNumber === secondNumber && secondNumber === thirdNumber)  {
        document.querySelector('#seeTotal').innerText = 'A message from DJ KHALED...YOU DA BEST!!!'
        winning()
    } else {
        document.querySelector('#seeTotal').innerText = 'PLEASE GIVE ME MORE MONEY'
    }

}

function winning() {
    yoBread += oneHundred
    document.querySelector('#amount').innerText = yoBread
}






/*function bet50() {
  const valueFifty = (document.querySelector(".fifty").value = 50);
    if (yoBread > noBread) {
        yoBread -= valueFifty
        console.log(yoBread)
    }else if(yoBread === noBread){
        document.querySelector('.finish').innerText = yoBread
        console.log('You are out of money')
    }
}*/

/*function bet100() {
  const valueHundred = (document.querySelector(".hundred").value = 100);
    if (yoBread > noBread) {
        yoBread -= valueHundred
        console.log(yoBread)
    }else if(yoBread === noBread){
        document.querySelector('.finish').innerText = yoBread
        console.log('You are out of money')
    }
}*/
