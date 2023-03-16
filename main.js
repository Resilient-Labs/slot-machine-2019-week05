const images = document.querySelector('#slot-img')
let icons = ['diamond', 'horseshoe', 'bar', 'seven', 'lemon']
let slotOne
let slotTwo
let slotThree
document.querySelector('#spin').addEventListener('click', insertSlot)

function insertSlot(){
    let slotOne = Math.round(Math.random()*(4-0)+0)
    let slotTwo = Math.round(Math.random()*(4-0)+0)
    let slotThree = Math.round(Math.random()*(4-0)+0)
    document.querySelector('#slotL').innerHTML = `
        <img src="assets/${icons[slotOne]}.png">  
    `
    document.querySelector('#slotM').innerHTML = `
    <img src="assets/${icons[slotTwo]}.png">  
    `
    document.querySelector('#slotR').innerHTML = `
    <img src="assets/${icons[slotThree]}.png">  
    `
}