let spin = document.querySelector('.spin')
let betMax = document.querySelector('.betUp')
let betMin = document.querySelector('.betDown')
let budget = document.querySelector('.budget')
let yourBet = document.querySelector('.yourBet')
let imgTag = document.querySelectorAll('.imgs')
// let spinReelLeft = document.querySelector('.wheel1')
// let spinReelMid = document.querySelector('.wheel2')
// let spinReelRight = document.querySelector('.wheel3')

let arrayImages = ['jason.jpg','freddy.jpg', 'chucky.png','mikey.jpg','pig.jpg']
let score = 1000
let bet = 0

budget.innerHTML = score
yourBet.innerHTML= bet
// imgTag[0].src = arryImages[2]
// imgTag[5].src = arryImages[2]
// imgTag[10].src = arryImages[2]
// imgTag.style.display = 'block'


function addBet(e){
    if(bet <= 495){
        score -= 5 
        bet += 5
        budget.innerHTML = score
        yourBet.innerHTML= bet
}
}
function subBet(e){
    if(bet >= 5 ){
        score += 5 
        bet -= 5
        budget.innerHTML = score
        yourBet.innerHTML= bet
    }
}
function spinReel(){
    let spinReelLeft =  Math.floor(Math.random(.4)* arrayImages.length)
    let spinReelMid = Math.floor(Math.random(.6) * arrayImages.length)
    let spinReelRight = Math.floor(Math.random(.5) * arrayImages.length)
    console.log(Math.floor(Math.random(.1)))
    console.log('hello random' ,Math.random(.1))
    console.log('hello array' ,arrayImages.length)
    console.log('hello math floor' ,Math.floor(Math.random(.1)* arrayImages.length))

    imgTag[0].src = arrayImages[spinReelLeft]
    imgTag[5].src = arrayImages[spinReelMid]
    imgTag[10].src = arrayImages[spinReelRight]

    if(imgTag[0].src === imgTag[5].src && imgTag[0].src === imgTag[10].src ){

      score += bet * 10
       console.log(score , bet)
    }
    else{
        score -= bet 
        
    }
    budget.innerHTML = score
    
}

spin.addEventListener('click',spinReel)
betMax.addEventListener('click',addBet)
betMin.addEventListener('click',subBet)