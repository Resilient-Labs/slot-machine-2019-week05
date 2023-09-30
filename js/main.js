//Create the starting pot amount for player and show that amount in the DOM

let moneyPot = 1000;
document.querySelector('#heartchamber').innerHTML = 'Heart Chamber:' + ' ' + moneyPot

//Global variables that hold the containers that the images will be in

let slotOne = document.querySelector('#slotone')
let slotTwo = document.querySelector('#slottwo')
let slotThree = document.querySelector('#slotthree')

//Create an array for the randomizer to run through of the images I want to match

let angelArray = ['<img src = "images/atsuko.jpg">', '<img src = "images/Canary.jpg">', '<img src = "images/michiko.jpg">', '<img src = "images/miyuki.jpg"></img>', '<img src = "images/Yoruichi.jpg"></img>']


//Create event listeners for when player clicks the betting amount it runs one of the functions

document.getElementById('fivehearts').addEventListener('click', fiveHearts)
document.getElementById('fiftyhearts').addEventListener('click', fiftyHearts)
document.getElementById('allhearts').addEventListener('click', allHearts)

function fiveHearts() {
    //Update the amount of money in the pot after player makes bet

    //If there is no money in the pot make it so that the user cannot run the slot machine and it displays no funds availiable 
    if (moneyPot < 5) {
        document.getElementById('winlose').innerText = 'Not Enough Funds'

         //if the pot has money then allow user to bet 5 hearts from the pot and run the function to randomize the angels

    } else if (moneyPot >= 5) {
        moneyPot = moneyPot - 5;
        document.querySelector('#heartchamber').innerHTML = 'Heart Chamber:' + ' ' + moneyPot
        getRandomAngel()

         //if the angels match then it should player will win and will add 150 hearts to the their pot

        if (slotOne === slotTwo && slotOne === slotThree) {
            moneyPot = moneyPot + 150;
            document.querySelector('#heartchamber').innerHTML = 'Heart Chamber:' + ' ' + moneyPot
            document.getElementById('winlose').innerText = 'You Win'
            // if angels dont match, player loses, and they're heartbroken
        } else {
            document.getElementById('winlose').innerText = 'You Lose'
        }


    }
}

function fiftyHearts() {
    //Update the amount of money in the pot after player makes bet

    //If there is no money in the pot make it so that the user cannot run the slot machine and it displays no funds availiable 
    if (moneyPot < 50) {
        document.getElementById('winlose').innerText = 'Not Enough Funds'

        //if the pot has money then allow user to bet 50 hearts from the pot and run the function to randomize the angels
    } else if (moneyPot >= 50) {
        moneyPot = moneyPot - 50;
        document.querySelector('#heartchamber').innerHTML = 'Heart Chamber:' + ' ' + moneyPot
        getRandomAngel()

         //if the angels match then it should player will win and will add 200 hearts to the their pot

        if (slotOne === slotTwo && slotOne === slotThree) {
            moneyPot = moneyPot + 200;
            document.querySelector('#heartchamber').innerHTML = 'Heart Chamber:' + ' ' + moneyPot
            document.getElementById('winlose').innerText = 'You Win'
            // if angels dont match, player loses, and they're heartbroken
        } else {
            document.getElementById('winlose').innerText = 'You Lose'
        }


    }

}

function allHearts() {
    //Update the amount of money in the pot after player makes bet

    //If there is no money in the pot make it so that the user cannot run the slot machine and it displays no funds availiable 
    if (moneyPot <= 0) {
        document.getElementById('winlose').innerText = 'Not Enough Funds'

        //if the pot has money then allow user to bet all their hearts CURRENTLY in the pot and run the function to randomize the angels
    } else if (moneyPot > 0) {
        let currentPot = moneyPot
        moneyPot = moneyPot - currentPot;
        document.querySelector('#heartchamber').innerHTML = 'Heart Chamber:' + ' ' + moneyPot
        getRandomAngel()

        //if the angels match then it should player will hit the jackpot doubling the amount they played
        if (slotOne === slotTwo && slotOne === slotThree) {
            moneyPot = currentPot * 2;
            document.querySelector('#heartchamber').innerHTML = 'Heart Chamber:' + ' ' + moneyPot
            document.getElementById('winlose').innerText = 'YOU WIN THE ANGELS\' HEARTS'

            // if angels dont match, player loses, and they're heartbroken
        } else {
            document.getElementById('winlose').innerText = 'Heartbroken'
        }


    }
    //
}


//create a function tow randomize the angel images that are saved to the angelArray. Then place randomized image in respective slot div

function getRandomAngel() {
    slotOne = angelArray[Math.floor(Math.random() * angelArray.length)]
    slotTwo = angelArray[Math.floor(Math.random() * angelArray.length)]
    slotThree = angelArray[Math.floor(Math.random() * angelArray.length)]
    document.getElementById('slotone').innerHTML = slotOne
    document.getElementById('slottwo').innerHTML = slotTwo
    document.getElementById('slotthree').innerHTML = slotThree

}


//Call randomizer function to have player start with randomized start reels on refresh of page
getRandomAngel()