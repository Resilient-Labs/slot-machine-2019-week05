//Vonds (who is an amzaing Human T.T) helped me with coding my Javascript for slot machine
let betScore = 100

//variables for each item that the user will be interacting with and seeing
const slots1 = document.querySelector('#img1')
const slots2 = document.querySelector('#img2')
const slots3 = document.querySelector('#img3')
const slots4 = document.querySelector('#img4')
const slots5 = document.querySelector('#img5')
const btn1Input = document.querySelector('#dollarBtn')
const btn2Input = document.querySelector('#fifteenBtn')
const btn3Input = document.querySelector('#twentyFiveBtn')
const btn4Input = document.querySelector('#fiftyBtn')
const h3 = document.querySelector('#wins')

// variable that holds all of my images
const images = ['IMG/rightlegForbiddenOne.jpg' , 'IMG/rightArmForbiddenOne.jpg' , 'IMG/exodia head.webp' , 'IMG/leftArmForbiddenOne.jpg' , 'IMG/leftlegForbiddenOne.jpg', 'IMG/blueEyesultimatedragon.jpg' , 'IMG/darkMGirl.webp' , 'IMG/timewizard.jpg' , 'IMG/dark_magician.jpg' , 'IMG/blueeyes.jpg' , 'IMG/kuriboh.jpg' , 'IMG/celtic.jpg' ]       


function slotMachine(){
    const ranNum1 = Math.floor(Math.random() * images.length)
    const ranNum2 = Math.floor(Math.random() * images.length)
    const ranNum3 = Math.floor(Math.random() * images.length)
    const ranNum4 = Math.floor(Math.random() * images.length)
    const ranNum5 = Math.floor(Math.random() * images.length)
    slots1.src = images[ranNum1]
    slots2.src = images[ranNum2]
    slots3.src = images[ranNum3]
    slots4.src = images[ranNum4]
    slots5.src = images[ranNum5]

}







//functions for my scores
////////////////////////betting a dollar///////////////////////////
function betDollar(){
    if( betScore <= 0) return alert('NO CRAB LEGS FOR YOU')
    slotMachine()
    if (slots1.src === slots2.src && slots1.src === slots3.src & slots1.src === slots4.src && slots1.src === slots5.src){
        console.log('hello im working')
        giveDollar()
    }else{
        console.log('ari does not respect me')
        takeDollar()
    }
}
function giveDollar(){
    betScore = betScore + 1
    h3.innerText=betScore 
}
function takeDollar(){
    betScore = betScore - 1
    h3.innerText=betScore    
}
//////////////////////////////betting fifteen///////////////////////
function betFifteen(){
    if( betScore <= 0) return alert('NO CRAB LEGS FOR YOU')
    slotMachine()
    if (slots1.src === slots2.src && slots1.src === slots3.src & slots1.src === slots4.src && slots1.src === slots5.src){
        giveFifteen()
    }else{
        takeFifteen()
    }
}
function giveFifteen(){
    betScore = betScore + 15
    h3.innerText=betScore
}
function takeFifteen(){
    betScore = betScore - 15
    h3.innerText=betScore
}

///////////////////////betting twentyfive///////////////////////////
function betTwentyFive(){
    if( betScore <= 0) return alert('NO CRAB LEGS FOR YOU')
    slotMachine()
    if (slots1.src === slots2.src && slots1.src === slots3.src & slots1.src === slots4.src && slots1.src === slots5.src){
        giveTwentyFive()
    }else{
        takeTwentyFive()
    }
}
function giveTwentyFive(){
    betScore = betScore + 25
    h3.innerText=betScore
}
function takeTwentyFive(){
    betScore = betScore - 25
    h3.innerText=betScore
}

///////////////////////////betting fifty////////////////////////////
function betFifty(){
    if( betScore <= 0) return alert('NO CRAB LEGS FOR YOU')
    slotMachine()
    if (slots1.src === slots2.src && slots1.src === slots3.src & slots1.src === slots4.src && slots1.src === slots5.src){
        giveFifty()
    }else{
        takeFifty()
    }
}
function giveFifty(){
    betScore = betScore + 50
    h3.innerText=betScore
}
function takeFifty(){
    betScore = betScore - 50
    h3.innerText=betScore
}


/////////////////////////addEventListener///////////////////////////
btn1Input.addEventListener('click', betDollar)
btn2Input.addEventListener('click', betFifteen )
btn3Input.addEventListener('click', betTwentyFive)
btn4Input.addEventListener('click', betFifty)












