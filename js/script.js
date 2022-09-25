const imageURLs = ["./images/mario.png", "./images/link.png", "./images/lucina.png", "./images/dk.png", "./images/pikachu.png"]
let total = 99999
document.querySelector('#current').innerText = `Current Total 銭${total}`

document.querySelector('#min').addEventListener('click', spinSlotsMin)
document.querySelector('#max').addEventListener('click', spinSlotsMax)


function spinSlotsMin() {
    if (total < 2000) {
        alert("You don't have enough money!")
    }
    else {

        reelOne.src = imageURLs[Math.floor(Math.random() * 5)]
        reelTwo.src = imageURLs[Math.floor(Math.random() * 5)]
        reelThree.src = imageURLs[Math.floor(Math.random() * 5)]

        if (reelOne.src === reelTwo.src && reelOne.src === reelThree.src) {
            total = total + 2000
        }
        else total = total - 2000

        document.querySelector('#current').innerText = `Current Total 銭${total}`
    }
}

function spinSlotsMax() {
    if (total < 10000) {
        alert("You don't have enough money!")
    }

    else {
        reelOne.src = imageURLs[Math.floor(Math.random() * 5)]
        reelTwo.src = imageURLs[Math.floor(Math.random() * 5)]
        reelThree.src = imageURLs[Math.floor(Math.random() * 5)]

        if (reelOne.src === reelTwo.src && reelOne.src === reelThree.src) {
            total = total + 10000
        }
        else total = total - 10000

        document.querySelector('#current').innerText = `Current Total 銭${total}`
    }
}