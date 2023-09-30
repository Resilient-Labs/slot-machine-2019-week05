
const slotColumn1 = document.querySelector('#slotcolumn1')
const slotColumn2 = document.querySelector('#slotcolumn2')
const slotColumn3 = document.querySelector('#slotcolumn3')

const columnOneArray = slotColumn1.querySelectorAll('img')
const columnTwoArray = slotColumn2.querySelectorAll('img')
const columnThreeArray = slotColumn3.querySelectorAll('img')

let total = 10000
document.querySelector('#balance-update').innerText = total;


//User clicks button to initiate one of two functions//
document.querySelector('#min-bet').addEventListener('click', betFun50)
document.querySelector('#max-bet').addEventListener('click', betFun200)



//function provides 3 images randomly with math.random() method;. Use only one function for all three columns cause if more than one is used then you can lose variables that arent within scope. //


function betFun50() {
    let randomNumber1 = Math.floor(Math.random() * 5)
    let randomNumber2 = Math.floor(Math.random() * 5)
    let randomNumber3 = Math.floor(Math.random() * 5)

    const randImageOne = columnOneArray[randomNumber1]
    const randImageTwo = columnTwoArray[randomNumber2]
    const randImageThree = columnThreeArray[randomNumber3]

    //code below generated with the help of Ayman and Erica //
    if (document.querySelector('img:not(.hidden)')) {
        let notHiddenImages = document.querySelectorAll('img:not(.hidden)')
        console.log("notHiddenImages:", notHiddenImages)
        for (let i = 0; i < notHiddenImages.length; i++) {
            notHiddenImages[i].classList.add('hidden')
        }
    }
    //code above generated with the help of Ayman and Erica//
    function resultMin() {
        if (randImageOne.src === randImageTwo.src && randImageOne.src === randImageThree.src) {
            document.querySelector('#win-status').innerText = 'Won!'
            total = total + 250
            document.querySelector('#balance-update').innerText = total

        }
        else {
            document.querySelector('#win-status').innerText = 'Lost Bet'
            total = total - 50
            document.querySelector('#balance-update').innerText = total
        }
    }


    randImageOne.classList.toggle('hidden')
    randImageTwo.classList.toggle('hidden')
    randImageThree.classList.toggle('hidden')

    resultMin(randImageOne, randImageTwo, randImageThree)



}

function betFun200() {
    let randomNumber1 = Math.floor(Math.random() * 5)
    let randomNumber2 = Math.floor(Math.random() * 5)
    let randomNumber3 = Math.floor(Math.random() * 5)

    const randImageOne = columnOneArray[randomNumber1]
    const randImageTwo = columnTwoArray[randomNumber2]
    const randImageThree = columnThreeArray[randomNumber3]

    //code below generated with the help of Ayman and Erica //
    if (document.querySelector('img:not(.hidden)')) {
        let notHiddenImages = document.querySelectorAll('img:not(.hidden)')
        console.log("notHiddenImages:", notHiddenImages)
        for (let i = 0; i < notHiddenImages.length; i++) {
            notHiddenImages[i].classList.add('hidden')
        }
    }
    //code above generated with the help of Ayman and Erica//
    function resultMax() {
        if (randImageOne.src === randImageTwo.src && randImageOne.src === randImageThree.src) {
            document.querySelector('#win-status').innerText = 'Won!'
            total = total + 1000
            document.querySelector('#balance-update').innerText = total

        }
        else {
            document.querySelector('#win-status').innerText = 'Lost Bet'
            total = total - 200
            document.querySelector('#balance-update').innerText = total
        }
    }


    randImageOne.classList.toggle('hidden')
    randImageTwo.classList.toggle('hidden')
    randImageThree.classList.toggle('hidden')

    resultMax(randImageOne, randImageTwo, randImageThree)



}





//if three of a kind show up simultaneously then show winning win status//






//winning result gives 2000 for max bet win and 500 for min bet win.//


//update balance after showing slot image results depending on win or lose status//

//for some reason max bet win applies when hitting min bet button too???????????????????????????????????????????????????????//
// function minusMinBet() {
//     let minBet = 50
//     total = total - `${minBet}`
//     document.querySelector('#balance-update').innerText = total
// }




//add function so that when total gets to zero you cannot bet anymore//
// function totalGone() {
//     if (total <= 0)
//         alert('You are out of money!')
// }
// totalGone()






//FOR LOOP SOMEWHERE IN HERE TO STOP CODE FROM RUNNING AGAIN INSTEAD OF ERASING EVERYTHING AND GENERATING NEW RESULTS??????//

//Set math.Random to choose an image in each column's array of images instead of using it as a way to just get one image from one column?//







//Note: use math.random in conjunction with array of images for each column//

























































// function resultMatchMin() {
//     if (bomb1 === true && bomb2 === true && bomb3 === true) {
//         document.querySelector('#balance-update').innerText = balance
//         balance += minBetWin
//     }
// }
// resultMatchMin()
// return









// function minBetFun() {
//     function minBetFun1() {
//         let randomNumber = Math.random()
//         if (randomNumber < 0.20) {
//             let bomb1 = true
//             document.querySelector('#heart1').style.display = 'none'
//             document.querySelector('#star1').style.display = 'none'
//             document.querySelector('#fire1').style.display = 'none'
//             document.querySelector('#lemon1').style.display = 'none'
//             return
//         }
//         else if (randomNumber < 0.40) {
//             let heart1 = true
//             document.querySelector('#bomb1').style.display = 'none'
//             document.querySelector('#star1').style.display = 'none'
//             document.querySelector('#fire1').style.display = 'none'
//             document.querySelector('#lemon1').style.display = 'none'
//             return
//         }
//         else if (randomNumber < 0.60) {
//             let star1 = true
//             document.querySelector('#bomb1').style.display = 'none'
//             document.querySelector('#heart1').style.display = 'none'
//             document.querySelector('#fire1').style.display = 'none'
//             document.querySelector('#lemon1').style.display = 'none'
//             return
//         }
//         else if (randomNumber < 0.80) {
//             let fire1 = true
//             document.querySelector('#bomb1').style.display = 'none'
//             document.querySelector('#star1').style.display = 'none'
//             document.querySelector('#heart1').style.display = 'none'
//             document.querySelector('#lemon1').style.display = 'none'
//             return
//         }
//         else {
//             let lemon1 = true
//             document.querySelector('#bomb1').style.display = 'none'
//             document.querySelector('#star1').style.display = 'none'
//             document.querySelector('#fire1').style.display = 'none'
//             document.querySelector('#heart1').style.display = 'none'
//             return
//         }
//         return
//     }

//     minBetFun1();

//     function minBetFun2() {
//         let randomNumber = Math.random()
//         if (randomNumber < 0.20) {
//             let bomb2 = true
//             document.querySelector('#heart2').style.display = 'none'
//             document.querySelector('#star2').style.display = 'none'
//             document.querySelector('#fire2').style.display = 'none'
//             document.querySelector('#lemon2').style.display = 'none'
//             return
//         }
//         else if (randomNumber < 0.40) {
//             let heart2 = true
//             document.querySelector('#bomb2').style.display = 'none'
//             document.querySelector('#star2').style.display = 'none'
//             document.querySelector('#fire2').style.display = 'none'
//             document.querySelector('#lemon2').style.display = 'none'
//             return
//         }
//         else if (randomNumber < 0.60) {
//             let star2 = true
//             document.querySelector('#bomb2').style.display = 'none'
//             document.querySelector('#heart2').style.display = 'none'
//             document.querySelector('#fire2').style.display = 'none'
//             document.querySelector('#lemon2').style.display = 'none'
//             return
//         }
//         else if (randomNumber < 0.80) {
//             let fire2 = true
//             document.querySelector('#bomb2').style.display = 'none'
//             document.querySelector('#star2').style.display = 'none'
//             document.querySelector('#heart2').style.display = 'none'
//             document.querySelector('#lemon2').style.display = 'none'
//             return
//         }
//         else {
//             let lemon2 = true
//             document.querySelector('#bomb2').style.display = 'none'
//             document.querySelector('#star2').style.display = 'none'
//             document.querySelector('#fire2').style.display = 'none'
//             document.querySelector('#heart2').style.display = 'none'
//             return
//         }
//         return
//     }
//     minBetFun2()

//     function minBetFun3() {
//         let randomNumber = Math.random()
//         if (randomNumber < 0.20) {
//             let bomb3 = true
//             document.querySelector('#heart3').style.display = 'none'
//             document.querySelector('#star3').style.display = 'none'
//             document.querySelector('#fire3').style.display = 'none'
//             document.querySelector('#lemon3').style.display = 'none'
//             return
//         }
//         else if (randomNumber < 0.40) {
//             let heart3 = true
//             document.querySelector('#bomb3').style.display = 'none'
//             document.querySelector('#star3').style.display = 'none'
//             document.querySelector('#fire3').style.display = 'none'
//             document.querySelector('#lemon3').style.display = 'none'
//             return
//         }
//         else if (randomNumber < 0.60) {
//             let star3 = true
//             document.querySelector('#bomb3').style.display = 'none'
//             document.querySelector('#heart3').style.display = 'none'
//             document.querySelector('#fire3').style.display = 'none'
//             document.querySelector('#lemon3').style.display = 'none'
//             return
//         }
//         else if (randomNumber < 0.80) {
//             let fire3 = true
//             document.querySelector('#bomb3').style.display = 'none'
//             document.querySelector('#star3').style.display = 'none'
//             document.querySelector('#heart3').style.display = 'none'
//             document.querySelector('#lemon3').style.display = 'none'
//             return
//         }
//         else {
//             let lemon3 = true
//             document.querySelector('#bomb3').style.display = 'none'
//             document.querySelector('#star3').style.display = 'none'
//             document.querySelector('#fire3').style.display = 'none'
//             document.querySelector('#heart3').style.display = 'none'
//             return
//         }
//         return;
//     }
//     minBetFun3()
