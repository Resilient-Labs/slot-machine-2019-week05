// //*Pseudo Code and Wireframes: 
// Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet *//

//*need 3 reels 
//5 items per reel
//bet min $5 or max $50
//total to update on bet
//start with $1000
// on 3 match, wins 10x their bet.


document.querySelector('#fiveDollarBet').addEventListener('click', fiveDollarBetButton)
document.querySelector('#fiftyDollarBet').addEventListener('click', fiftyDollarBetButton)
document.querySelector('#resetGame').addEventListener('click', resetButton)


let images = ["images/luckySeven.png", "images/banana.png", "images/bigWin.png", "images/cherry.png", "images/orange.png"]

let counter = 1000

//5 BET
function fiveDollarBetButton(){
    let bet = 5
    counter -= 5
    let boxOneSpinner= images[Math.floor(Math.random() * 5)]
    let boxTwoSpinner= images[Math.floor(Math.random() * 5)]
    let boxThreeSpinner= images[Math.floor(Math.random() * 5)]

    console.log(boxOneSpinner)
    console.log(boxTwoSpinner)
    console.log(boxThreeSpinner)

    if(counter < bet){
        document.querySelector('h3').innerText = "Out of Money"
        document.querySelector('h2').innerText = 0
        return (counter = 5)

    }else if(boxOneSpinner == boxTwoSpinner && boxTwoSpinner == boxThreeSpinner && boxThreeSpinner == boxOneSpinner){ 

        document.querySelector('#slotOne').src = boxOneSpinner
        document.querySelector('#slotTwo').src = boxTwoSpinner
        document.querySelector('#slotThree').src = boxThreeSpinner
        
        console.log("YOU WIN!")
        let text = document.querySelector('h3')
        text.innerText = "YOU WIN!"
        text.style.fontSize = '6em'
        text.style.color = 'rgb(209,177,72)'       
        counter += bet * 10 + 5

    } else{    
        document.querySelector('#slotOne').src = boxOneSpinner
        document.querySelector('#slotTwo').src = boxTwoSpinner
        document.querySelector('#slotThree').src = boxThreeSpinner

        let text = document.querySelector('h3')
        text.innerText = "Sorry, Try Again"
        text.style.fontSize = '3em'
        text.style.color = 'black'
    }   
    document.querySelector('h2').innerHTML = counter 
    console.log(counter)   
}
//50 BET
function fiftyDollarBetButton(){
    let bet = 50
    counter -= 50
    let boxOneSpinner= images[Math.floor(Math.random() * 5)]
    let boxTwoSpinner= images[Math.floor(Math.random() * 5)]
    let boxThreeSpinner= images[Math.floor(Math.random() * 5)]

    console.log(boxOneSpinner)
    console.log(boxTwoSpinner)
    console.log(boxThreeSpinner)

    if(counter < bet){
        document.querySelector('h3').innerText = "Out of Money"
        document.querySelector('h2').innerText = counter
        return (counter = 50)
       

    }else if(boxOneSpinner == boxTwoSpinner && boxTwoSpinner == boxThreeSpinner && boxThreeSpinner == boxOneSpinner){ 

        document.querySelector('#slotOne').src = boxOneSpinner
        document.querySelector('#slotTwo').src = boxTwoSpinner
        document.querySelector('#slotThree').src = boxThreeSpinner

        
        console.log("YOU WIN!")
        let text = document.querySelector('h3')
        text.innerText = "YOU WIN!"
        text.style.fontSize = '6em'
        text.style.color = 'rgb(209,177,72)'      
        counter += bet * 10 + 50

    } else{    

        document.querySelector('#slotOne').src = boxOneSpinner
        document.querySelector('#slotTwo').src = boxTwoSpinner
        document.querySelector('#slotThree').src = boxThreeSpinner

        let text = document.querySelector('h3')
        text.innerText = "Sorry, Try Again"
        text.style.fontSize = '3em'
        text.style.color = 'black'
        counter == bet
    }   
    document.querySelector('h2').innerHTML = counter 
    console.log(counter)   
}
//RESET
function resetButton(){
    counter = 1000
    document.querySelector('h2').innerHTML= counter
    location.reload()

}




