/* Build a simple slot machine with minimum 5 items per reel and 3 reels
the pictures in the slot machine should visablly shuffle before one is selected  -
user should be able to bet min or max and have their total update aka how much money they have won or lost.
 two buttons or a drop down selector for how much the user wants to bet
 Min bet does $5 and Max bet does $50. They should start with $1000.
 track how much money is had through subtracting the bet from total
  Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet
  if three pictures dont match up the user will lose the money that they put up to bet
  when balance reaches 0 a message alerts the user that theyve lost
*/

let total = document.querySelector('#total')
let left = document.querySelector('#aRealOne')
let mid = document.querySelector('#community')
let right = document.querySelector('#mentorship')
let result = document.querySelector('#result')


document.querySelector('#spin').addEventListener('click' , spinSlots)

// let pics= document.querySelectorAll("images")

let choices = ["images/community.png", "images/snitching.png", "images/job.png", "images/leon.png", "images/mentorship.png"]


// let remainder = parseInt(total.innerHTML)

let remainder = 1000
total.innerText = `$${remainder}`
let money = bet.value

function spinSlots() {
    
    document.querySelector('#spin').src = "images/slotLever.gif"


    // let remainder = parseInt(total.innerHTML)
    let bet = document.querySelector('#bet')
    let money = bet.value

    console.log(money);
    // const slot1 = Math.floor(Math.random() *5)

    let leftReel = choices[Math.floor(Math.random() * choices.length )]
    let midReel = choices[Math.floor(Math.random() * choices.length )]
    let rightReel = choices[Math.floor(Math.random() * choices.length )]

    left.src = leftReel
    mid.src = midReel
    right.src = rightReel



    if (remainder <=0 ){
        alert('Don\t Give Up, Come Back Later')
    }
    else if (leftReel === midReel &&  leftReel === rightReel && midReel === rightReel ){
        console.log(leftReel, midReel, rightReel);
        remainder = remainder + (money*10)
        total.innerHTML = remainder 
        result.innerHTML = 'You Won'
    }
    else{ 
        console.log(leftReel, midReel, rightReel);
        remainder = remainder - money
        total.innerHTML = remainder 
        result.innerHTML = 'You Lost'
    }

}



