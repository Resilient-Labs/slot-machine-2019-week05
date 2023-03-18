//create smirf for BUTTON!!!
//make random number funtion
//assign random number to variables
//display innerText in designated spaces
//conditionals for winning streak
// display message



document.querySelector('#bet10').addEventListener('click', bet10)
document.querySelector('#bet20').addEventListener('click', bet20)

let total= 100

let thanksJoyce = [
    '<img src="img/astro2.webp"></img>',
    '<img src="img/astro3.avif"></img>',
    '<img src="img/astro4.webp"></img>',
    '<img src="img/astro5.avif"></img>',
    '<img src="img/astro6.avif"></img>'
]
let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
let img3 = document.querySelector('#img3')

function bet10(){
    let box1 = thanksJoyce[Math.floor(Math.random() * 5)] ;
    let box2 = thanksJoyce[Math.floor(Math.random() * 5)] ;
    let box3 = thanksJoyce[Math.floor(Math.random() * 5)] ;
    document.querySelector('#img1').innerHTML = box1
    document.querySelector('#img2').innerHTML = box2
    document.querySelector('#img3').innerHTML = box3
    if(total < 10 || total===0){
        bet10.disable = true
    }else if(box1===box2 && box1===box3){
        document.querySelector('#placeToSee').innerText = "You win"
        total = total + 10 * 10
        document.querySelector('#balance').innerText = total
    }else {
        document.querySelector('#placeToSee').innerText = "You Lose"
        total= total - 10
        document.querySelector('#balance').innerText= total
    } 
    
}

function bet20(){
    let box1 = thanksJoyce[Math.floor(Math.random() * 5)];
    let box2 = thanksJoyce[Math.floor(Math.random() * 5)];
    let box3 = thanksJoyce[Math.floor(Math.random() * 5)];
    document.querySelector('#img1').innerHTML = box1
    document.querySelector('#img2').innerHTML = box2
    document.querySelector('#img3').innerHTML = box3
    if(total < 20 || total===0){
        bet20.disable = true

    } else if(box1===box2 && box1===box3){
        document.querySelector('#placeToSee').innerText = "You win"
        total = total + 20 * 10
        document.querySelector('#balance').innerText = total

    } else {
        document.querySelector('#placeToSee').innerText = "You Lose"
        total = total- 20
        document.querySelector('#balance').innerText= total

    }
      if(box1===box2 && box1===box3){
        document.querySelector('#placeToSee').innerText = "You win"
    }else {
        document.querySelector('#placeToSee').innerText = "You Lose"
    }
    
   
}

// if(box1===box2 && box1===box3){
//     document.querySelector('#placeToSee').innerText = "You win"
// }else {
//     document.querySelector('#placeToSee').innerText = "You Lose"
// }


 // if(n1===n2 && n1===n3){
    //     document.querySelector('#placeToSee').innerText = "You win"
    // }else {
    //     document.querySelector('#placeToSee').innerText = "You Lose"
    // }
// function jackpot(){
//     let n1 = getRandom()
//     let n2 = getRandom()
//     let n3 = getRandom()

//     document.querySelector('#firstSlot').innerText = n1
//     document.querySelector('#secondSlot').innerText = n2
//     document.querySelector('#thirdSlot').innerText = n3

  

