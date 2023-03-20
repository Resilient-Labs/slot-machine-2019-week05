// //make variable for
// //buttons
// //random number
// //your money left

// //create function for if bet5 is picked
// function play5() {
//     Picknumbers()
//     //reference function random with a variable
//     //reference check function
//     // Check5(rando) 
//     //enter function random variable (stated earlier) as an argument in the parameter

//edited code with Chat GPT

const bet5 = document.getElementById('butt5') //button to bet 5
const bet50 = document.getElementById('butt50') //button to bet 50
const num1 = document.querySelector('#num1') //random numbers that need to be generated span
const num2 = document.querySelector('#num2')
const num3 = document.querySelector('#num3')
const comm = document.querySelector('#comm')
let munleft = document.querySelector('#munleft')
let amount = Number(munleft.innerText)

function play5() {
    let [n1, n2, n3] = Picknumbers()
    Check5(n1, n2, n3) 
}

function play50() {
    let [n1, n2, n3] = Picknumbers()
    Check50(n1, n2, n3) 
}

function Check5(n1, n2, n3) {    
    // I purposely changed the && to || so that user could win more.
    if(n1 === n2 || n2 === n3) { 
        amount += 10
        comm.innerText = 'We have a winner!'
    } else {
        amount -= 5
        comm.innerText = 'Aw dang! Try again?'
    }
    munleft.innerText = amount.toString()
}

function Check50(n1, n2, n3) {
    if(n1 === n2 || n2 === n3) {
        amount += 100
        comm.innerText = 'We have a winner!'
    } else {
        amount -= 50
        comm.innerText = 'Aw dang! Try again?'
    }
    munleft.innerText = amount.toString()
}

function Picknumbers() {
    let n1 = Math.floor(Math.random() * 5)
    let n2 = Math.floor(Math.random() * 5)
    let n3 = Math.floor(Math.random() * 5)
    num1.innerText = n1.toString()
    num2.innerText = n2.toString()
    num3.innerText = n3.toString()

    return [n1, n2, n3]
}

bet5.addEventListener('click', play5)
bet50.addEventListener('click', play50)
