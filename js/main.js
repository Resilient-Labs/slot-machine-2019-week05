// grabbing elements from html make event listener for bet 1/2/3
document.querySelector('#bet10').addEventListener('click', bet10)
document.querySelector('#bet20').addEventListener('click', bet20)
document.querySelector('#bet100').addEventListener('click', bet100)
// assigned initial value for the user
// balance is hating from outside the club
let balance = 1000
// store image in a variable
let slot1 = document.querySelector('#slot1')
let slot2 = document.querySelector('#slot2')
let slot3 = document.querySelector('#slot3')
// array of images
// images are replacing slot images
// image tag but not randomized
let allIcons = [
    '<img src="img/pikachu.png"></img>',
    '<img src="img/char.png"></img>',
    '<img src="img/kirby.png"></img>',
    '<img src="img/magikarp.png"></img>',
    '<img src="img/squirtle.png"></img>'
]
function bet10() {
    // function random number generator assigned to image 
    let box1 = allIcons[Math.floor(Math.random() * allIcons.length)]
    let box2 = allIcons[Math.floor(Math.random() * allIcons.length)]
    let box3 = allIcons[Math.floor(Math.random() * allIcons.length)]
    // replace html image with random image
    // .innerHTML was required
    slot1.innerHTML = box1
    slot2.innerHTML = box2
    slot3.innerHTML = box3
    // conditional message to display 
    if (balance < 10 || balance === 0) {
        bet10.disable === true
    } else if (box1 === box2 && box1 === box3) {
        document.querySelector('#results').innerText = "Winner!"
        balance = balance + 10
        document.querySelector('#balance').innerText = balance
    } else {
        document.querySelector('#results').innerText = "Loser!"
        balance = balance - 10
        document.querySelector('#balance').innerText = balance
    }
}
function bet20(){
       // function random number generator assigned to image 
       let box1 = allIcons[Math.floor(Math.random() * allIcons.length)]
       let box2 = allIcons[Math.floor(Math.random() * allIcons.length)]
       let box3 = allIcons[Math.floor(Math.random() * allIcons.length)]
       // replace html image with random image
       // .innerHTML was required
       slot1.innerHTML = box1
       slot2.innerHTML = box2
       slot3.innerHTML = box3
       // conditional message to display 
       if (balance < 20 || balance === 0) {
           bet20.disable === true
       } else if (box1 === box2 && box1 === box3) {
           document.querySelector('#results').innerText = "Winner!"
           balance = balance + 20
           document.querySelector('#balance').innerText = balance
       } else {
           document.querySelector('#results').innerText = "Loser!"
           balance = balance - 20
           document.querySelector('#balance').innerText = balance
       }
}
function bet100(){
       // function random number generator assigned to image 
       let box1 = allIcons[Math.floor(Math.random() * allIcons.length)]
       let box2 = allIcons[Math.floor(Math.random() * allIcons.length)]
       let box3 = allIcons[Math.floor(Math.random() * allIcons.length)]
       // replace html image with random image
       // .innerHTML was required
       slot1.innerHTML = box1
       slot2.innerHTML = box2
       slot3.innerHTML = box3
       // conditional message to display 
       if (balance < 100 || balance === 0) {
           bet100.disable === true
       } else if (box1 === box2 && box1 === box3) {
           document.querySelector('#results').innerText = "Winner!"
           balance = balance + 100
           document.querySelector('#balance').innerText = balance
       } else {
           document.querySelector('#results').innerText = "Loser!"
           balance = balance - 100
           document.querySelector('#balance').innerText = balance
       }
}


