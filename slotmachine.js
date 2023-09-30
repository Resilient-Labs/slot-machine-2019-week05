// add event listeners to each bet button. They will listen for a click and then run a function that will subtract a dollar amount from the starting balance of $100

//the event listener on the reset button button will refresh the page so the game resets
//also add event listeners to the buttons to change the balance as the user bets

document.querySelector('#five').addEventListener('click', subtract5)
document.querySelector('#fifty').addEventListener('click', subtract50)
document.querySelector('.reset').addEventListener('click', reset)

// Make a variable that stores an array to store the image path for each picture in the reel
let imageArray = ["imgs/aang.png" , "imgs/katara.png" , "imgs/sokka.png" , "imgs/toph.png" , "imgs/zuko.png"]


//declare variables to hold the total amount of money on the table and the user's winning. User starts w/ 100 min
let balance = 1000


//resets the game
function reset(){
    window.location.reload();
}

// The next 2 functions determine if there is enough money in the pot to bet so the balance doesn't go below zero. If there is enough it will either subtract 5 if the min bet button was clicked or subtract 50 if the max bet button was clicked. Each function has the ability to invoke the turnReels function

function subtract5(){

    if (balance < 5){
        document.querySelector('.bet5').classList.add('hidden')
        
    } else{

    balance -= 5
    turnReels1()
    
    }
    
}


function subtract50(){

    if (balance < 50){
        document.querySelector('.bet50').classList.add('hidden')
    } else{

    balance -= 50
    turnReels2()
    
    }
}


// turnReels uses math random to index into the arrays, then change the DOM by adding the image path to each empty src tag on each reel.

//This turn reels is for the min bet. The user will get a lower multiplier if there's 3 of a kind because the player bet with lowe risk

function turnReels1(){

    let number1 = Math.floor(Math.random() * 5)
    let number2 = Math.floor(Math.random() * 5)
    let number3 = Math.floor(Math.random() * 5)

    document.querySelector('#reel1').src = imageArray[number1]
    document.querySelector('#reel2').src = imageArray[number2]
    document.querySelector('#reel3').src = imageArray[number3]


//make if statements that determines the user's winnings. The user gets special points if they get 3 Aangs, in other words, if all 3 random numbers equals 0. If all 3 numbers equal 1, 3, or 4 (Katara, Toph, or Zuko) they earn 2 times their current balance. If all 3 equal 2 (Sokka), the user loses all their money. 


        if (number1 === 0 && number2 === 0 && number3 === 0 ){
            
            document.querySelector('h2').innerText = "You spun the Avatar, master of all elements, 3 times, you win big bucks!"
            balance *= 3
            
        }  else if (number1 === 2 && number2 === 2 && number3 === 2 ){
            document.querySelector('h2').innerText = "Sokka doesn't have any bending power and now you don't have any money!"
            balance = 0

        
        } else if (number1 === 1 && number2 === 1 && number3 === 1 ){
            document.querySelector('h2').innerText = "Katara the fabulous water bender! You win some, but to win big you'll need to hit 3 Avatars. Do you dare to keep trying?"
            balance *= 2

        } else if (number1 === 3 && number2 === 3 && number3 === 3 ){

            document.querySelector('h2').innerText = "Toph is as tough as a rock! You win some... congrats. If you're tough too you'll try to get 3 Avatars."
            balance *= 2

        } else if (number1 === 4 && number2 === 4 && number3 === 4 ){
            document.querySelector('h2').innerText = "Zuko is red hot! You win some... do you dare to go through the fire to win big?"

            balance *= 2

        } else{
            document.querySelector('h2').innerText = `Spin again. Lets see if you can hit 3 of a kind!`
        }


    document.querySelector('h4').innerText = `Your balance is ${balance}`


}



//This function will change the score by a higher multiplier if there's 3 of a kind because the player bet with higher risk

function turnReels2(){

    let number1 = Math.floor(Math.random() * 5)
    let number2 = Math.floor(Math.random() * 5)
    let number3 = Math.floor(Math.random() * 5)

    document.querySelector('#reel1').src = imageArray[number1]
    document.querySelector('#reel2').src = imageArray[number2]
    document.querySelector('#reel3').src = imageArray[number3]


//make if statements that determines the user's winnings. The user gets 15 their balance if they get 3 Aangs, in other words, if all 3 random numbers equals 0. If all 3 numbers equal 1, 3, or 4 (Katara, Toph, or Zuko) they earn 10 times their current balance. If all 3 equal 2 (Sokka), the user loses all their money. 


        if (number1 === 0 && number2 === 0 && number3 === 0 ){
            
            document.querySelector('h2').innerText = "You spun the Avatar, master of all elements, 3 times, you win big bucks!"
            balance *= 15
            
        }  else if (number1 === 2 && number2 === 2 && number3 === 2 ){
            document.querySelector('h2').innerText = "Sokka doesn't have any bending power and now you don't have any money!"
            balance = 0

        
        } else if (number1 === 1 && number2 === 1 && number3 === 1 ){
            document.querySelector('h2').innerText = "Katara the fabulous water bender! You win some, but to win big you'll need to hit 3 Avatars. Do you dare to keep trying?"
            balance *= 10

        } else if (number1 === 3 && number2 === 3 && number3 === 3 ){

            document.querySelector('h2').innerText = "Toph is as tough as a rock! You win some... congrats. If you're tough too you'll try to get 3 Avatars."
            balance *= 10

        } else if (number1 === 4 && number2 === 4 && number3 === 4 ){
            document.querySelector('h2').innerText = "Zuko is red hot! You win some... do you dare to go through the fire to win big?"

            balance *= 10

        } else{
            document.querySelector('h2').innerText = `Spin again. Lets see if you can hit 3 of a kind!`
        }

    
    document.querySelector('h4').innerText = `Your balance is ${balance}`
    

}