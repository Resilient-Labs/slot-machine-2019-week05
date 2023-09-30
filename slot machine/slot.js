const slotOne = document.querySelector('.slotOne')
const slotTwo = document.querySelector('.slotTwo')
const slotThree = document.querySelector('.slotThree')

//total and place to display it
let total = 1000
document.querySelector('#placeToPutBet').innerText = total


//creating a variable to hold all images
const slotOneArray = slotOne.querySelectorAll('img')
const slotTwoArray = slotTwo.querySelectorAll('img')
const slotThreeArray = slotThree.querySelectorAll('img')


document.querySelector('#min').addEventListener('click', spinningOne)
document.querySelector('#max').addEventListener('click', spinningOne)



document.querySelector('#min').addEventListener('click', addMin)
document.querySelector('#max').addEventListener('click', addMax)


// this function starts by getting 5 random numbers between 0-4
// we use math.floor to create whole integers
//we then select all the images that are not hidden and create a for loop that runs the length of firstImages
//this would then hide the images we have showing and display a new three

function spinningOne() {
    let randomNum;
    randomNum = Math.floor(Math.random() * 5)
    const chosenImageOne = slotOneArray[randomNum]

    let randomNum2;
    randomNum2 = Math.floor(Math.random() * 5)
    const chosenImageTwo = slotTwoArray[randomNum2]

    let randomNum3;
    randomNum3 = Math.floor(Math.random() * 5)
    const chosenImageThree = slotThreeArray[randomNum3]

    if (document.querySelector('img:not(.hidden)')) {
        let firstImages = document.querySelectorAll('img:not(.hidden)')
        console.log(document.querySelectorAll('img:not(.hidden)'))
        for (let i = 0; i < firstImages.length; i++) {
            firstImages[i].classList.add('hidden')
        }
    }
    chosenImageOne.classList.toggle('hidden')
    chosenImageTwo.classList.toggle('hidden')
    chosenImageThree.classList.toggle('hidden')
    result(chosenImageOne, chosenImageTwo, chosenImageThree)
}


// this function checks if all three images are the same
// if they are the same display winner
// if not the same image display loser

function result(imgOne, imgTwo, imgThree) {
    if (imgOne.src === imgTwo.src && imgOne.src === imgThree.src) {
        document.querySelector('#placeToPutResult').innerText = 'Winner'
    } else {
        document.querySelector('#placeToPutResult').innerText = 'Loser'
    }
}


// function takes 5 from total which is the bet
// then displays the new total in DOM
// then we check if the user own if so we add double the original bet of 5

function addMin() {
    let images = document.querySelectorAll('img:not(.hidden)')
    console.log(images)
    if (images[0].src === images[1].src && images[0].src === images[2].src) {
        total = total + 10
        document.querySelector('#placeToPutBet').innerText = total
    } else {
        total = total - 5
        document.querySelector('#placeToPutBet').innerText = total
        console.log(total)
    }

}


// function takes 50 from total which is the bet
// then displays the new total in DOM
// then we check if the user own if so we add double the original bet of 50
function addMax() {
    let images = document.querySelectorAll('img:not(.hidden)')
    console.log(images)
    if (images[0].src === images[1].src && images[0].src === images[2].src) {
        total = total + 100
        document.querySelector('#placeToPutBet').innerText = total
    } else {
        total = total - 50
        document.querySelector('#placeToPutBet').innerText = total
        console.log(total)
    }
}
