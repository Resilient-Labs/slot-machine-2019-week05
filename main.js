//Ttile section
//images 
//win or loss section
let bet = document.querySelector("span")
let slider = document.querySelector("#slider")
slider.oninput = function () { bet.innerHTML = this.value };
document.querySelector("#play").addEventListener('click', play)
let playersMoney = 1000


function play() {
    let result = document.querySelector("#result")
    let updateResult = document.querySelector("#gameResult")
    let bank = document.querySelector("#bank")
    let itemOne = chooseItem()
    let itemTwo = chooseItem()
    let itemThree = chooseItem()
    let gameResult


    if (playersMoney <= 0) {
        alert("It may be time to go home.Come again, maybe...")
        playersMoney = 1000
    }


    if (itemOne === itemTwo && itemOne === itemThree) {
        gameResult = "You Won"
        playersMoney = playersMoney + (slider.value * 10)
    } else {
        gameResult = "You Lost"
        playersMoney = playersMoney - slider.value
    }
    updateResult.innerHTML = gameResult
    result.innerHTML = `${itemOne} - ${itemTwo} - ${itemThree}`
    bank.innerHTML = playersMoney
}

function chooseItem() {
    const items = ["Pizza", "cheeseburger", "Brownie", "Soda", "Turkey"];
    return items[Math.floor(Math.random() * items.length)]

}

