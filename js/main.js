//Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet
let total = 1000
let reelLeft = 0,reelMiddle = 0 ,reelRight = 0
const items = ['cherry.png', 'clubs.png', 'crown.png', 'money.png', 'heart.png']

const betFive = document.querySelector('#five')
const betFifty = document.querySelector('#fifty')

betFive.addEventListener('click', function(event){
    bet(5)
})

betFifty.addEventListener('click', function(event){
    bet(50)
})

function bet(amount){
    spin()
    if(reelLeft === reelMiddle  && reelMiddle === reelRight){
        total += amount * 10
        // document.querySelector('#gameMsg').innerHTML = 'WINNER WINNER CHICKEN DINNER!!!'
    }else{
        total -= amount
        // document.querySelector('#gameMsgLoser').innerHTML = 'Try again buddy!'
    }
    document.querySelector('#total').innerHTML = total
}
function spin(){
    reelLeft = Math.ceil(Math.random() * 5)
    reelMiddle = Math.ceil(Math.random() * 5)
    reelRight = Math.ceil(Math.random() * 5)
    document.querySelector('#reelLeft').innerHTML = `<img src = images/${items[reelLeft-1]}>`
    document.querySelector('#reelMiddle').innerHTML = `<img src = images/${items[reelMiddle-1]}>`
    document.querySelector('#reelRight').innerHTML = `<img src = images/${items[reelRight-1]}>`
    console.log(reelLeft,reelMiddle, reelRight)
}   
 document.querySelector('#total').innerHTML = total