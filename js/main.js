let balance = 1500
const result = document.querySelector("#horray")
result.innerText = balance
let reelOne = document.querySelector("#sugar")
let reelTwo = document.querySelector("#spice")
let reelThree = document.querySelector("#everythingNice")
let message = document.querySelector("#sweet")

// image varibles
let photos = ["<img src ='img/one.png'>", "<img src ='img/two.png'>", "<img src ='img/three.png'>", "<img src ='img/four.png'>", "<img src ='img/five.png'>"]

// make a function that tells the button to bet
// make a varible that provides bet amount from the select bar
// randomize photos in each reel
// inset photos into reels
// add conditionals for when you win/ loose
// message for when you win/ loose
// add conditional for zero balance

document.querySelector("#noSweat").addEventListener("click", bet)

function bet(){
    let betAmount = Number(document.querySelector("#lucky").value)
    
    if(balance <= 0){
    return alert("Rotten!")
    }
    
    
    let firstPic = Math.floor(Math.random()*5)
    let secondPic = Math.floor(Math.random()*5)
    let thirdPic = Math.floor(Math.random()*5)
    
    
    
    
    reelOne.innerHTML = photos[firstPic]
    reelTwo.innerHTML = photos [secondPic]
    reelThree.innerHTML = photos [thirdPic]

    if(firstPic === secondPic && firstPic === thirdPic){
        balance = balance + betAmount
        result.innerText = balance
        message.innerText = "You win!"
    }

    else{
        balance = balance - betAmount
        result.innerText = balance
        message.innerText = "You lose!"
    }
















}