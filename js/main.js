// <!-- Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update -->
// 		<!-- 5 vacation spots - colombia, italy, japan, thailand, copadoccia -->


//assign images variables
let colombia = document.querySelector(".colombia");
let italy = document.querySelector(".italy");
let japan= document.querySelector(".japan");
let thailand = document.querySelector(".thailand");
let cappodocia = document.querySelector(".cappodocia");

// // create total amount, min bet amount , and starting total
let startingTotal = 5000
// let bet10 = 10;
// let bet50 = 50;

//  create array for images
let images = [
    '<img src="img/penol.jpeg"></img>',
	'<img src="img/amalficoast.jpeg"></img>',
	'<img src="img/mtkilajapan.webp"></img>',
	'<img src="img/Pulau-Phi-Phi3.jpg"></img>',
	'<img src="img/capodoccia.avif"></img>',
]

// grab elements and give them variables to work
const bet10Button = document.querySelector('.bet10');
const bet50Button = document.querySelector('.bet50');
const reelOne = document.querySelector('.reel1')
const reelTwo = document.querySelector('.reel2')
const reelThree = document.querySelector('.reel3')
let resultTextDisplay = document.querySelector('#resultText');
let totalDisplay = document.querySelector('#updatedTotal');
const reels = document.querySelectorAll('.reels');

//create click event for when user bets 10 and bets 50
bet10Button.addEventListener('click', bet10Func)
bet50Button.addEventListener('click', bet50Func)

// create function to generate random image index
function randomIndex() {
  return Math.floor(Math.random() * 5);
}

function bet10Func() {
    reelOne.innerHTML = images[Math.floor(Math.random() * 5)]
    reelTwo.innerHTML = images[Math.floor(Math.random() * 5)]
    reelThree.innerHTML = images[Math.floor(Math.random() * 5)]

    if (reelOne.innerHTML === reelTwo.innerHTML && reelTwo.innerHTML === reelThree.innerHTML) {
        totalDisplay.innerText = 'Bank: ' + (Number(startingTotal += 100))
        document.querySelector('#resultText').innerText = "Where's My Super Suit!?! +100 Congrats winner!"
    } else {
        totalDisplay.innerText = 'Bank: ' + (Number(startingTotal -= 10))
        document.querySelector('#resultText').innerText = "You don't like fun?"
    }
}
    function bet50Func () {
        reelOne.innerHTML = images[Math.floor(Math.random() * 5)]
        reelTwo.innerHTML = images[Math.floor(Math.random() * 5)]
        reelThree.innerHTML = images[Math.floor(Math.random() * 5)]
    
        if (reelOne.innerHTML === reelTwo.innerHTML && reelTwo.innerHTML === reelThree.innerHTML) {
            totalDisplay.innerText = 'Bank: ' + (Number(startingTotal += 3000))
            document.querySelector('#resultText').innerText = "Where's My Super Suit!?! +$3000 Congrats winner!"
        } else {
            totalDisplay.innerText = 'Bank: ' + (Number(startingTotal -= 300))
            document.querySelector('#resultText').innerText = "Look's Like Staycation's Only For You"
        }
    // document.querySelector('#updatedTotal').innerText = total

    // if (total <= 0) {
    //     document.querySelector('#resultText').innerText = "Looks Like Vacation Will Have To Wait Until Next Year. You Lost!"
    // }
}