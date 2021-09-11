//Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet



let amount = document.querySelector('h2').innerText = 1000

document.querySelector('#betFive').addEventListener('click', betMin)
document.querySelector('#betFifty').addEventListener('click', betMax)



function betMin() {

    if ((amount < 5) || (amount == 'ERROR: INSUFFICIENT FUNDS')) {
        document.querySelector('h2').innerText = 'ERROR: INSUFFICIENT FUNDS'
    } else {
        let reel1 = Math.random()
        
            if (reel1 <= .2) {
                reel1 = 'option1'
            } else if (reel1 <= .4) {
                reel1 = 'option2'
            } else if (reel1 <= .6) {
                reel1 = 'option3'
            } else if (reel1 <= .8) {
                reel1 = 'option4'
            } else {
                reel1 = 'option5'
            }

        let reel2 = Math.random()
            if (reel2 <= .2) {
                reel2 = 'option1'
            } else if (reel2 <= .4) {
                reel2 = 'option2'
            } else if (reel2 <= .6) {
                reel2 = 'option3'
            } else if (reel2 <= .8) {
                reel2 = 'option4'
            } else {
                reel2 = 'option5'
            }

        let reel3 = Math.random()
            if (reel3 <= .2) {
                reel3 = 'option1'
            } else if (reel3 <= .4) {
                reel3 = 'option2'
            } else if (reel3 <= .6) {
                reel3 = 'option3'
            } else if (reel3 <= .8) {
                reel3 = 'option4'
            } else {
                reel3 = 'option5'
            }

        if ((reel1 == reel2) && (reel2 == reel3)) {
            amount += 50
        } else {
            amount -= 5
        }
        document.querySelector('h2').innerText = amount
    }
}



function betMax() {

    if ((amount < 50) || (amount == 'ERROR: INSUFFICIENT FUNDS')) {
        document.querySelector('h2').innerText = 'ERROR: INSUFFICIENT FUNDS'
    } else {
        let reel1 = Math.random()
        
            if (reel1 <= .2) {
                reel1 = 'option1'
            } else if (reel1 <= .4) {
                reel1 = 'option2'
            } else if (reel1 <= .6) {
                reel1 = 'option3'
            } else if (reel1 <= .8) {
                reel1 = 'option4'
            } else {
                reel1 = 'option5'
            }

        let reel2 = Math.random()
            if (reel2 <= .2) {
                reel2 = 'option1'
            } else if (reel2 <= .4) {
                reel2 = 'option2'
            } else if (reel2 <= .6) {
                reel2 = 'option3'
            } else if (reel2 <= .8) {
                reel2 = 'option4'
            } else {
                reel2 = 'option5'
            }

        let reel3 = Math.random()
            if (reel3 <= .2) {
                reel3 = 'option1'
            } else if (reel3 <= .4) {
                reel3 = 'option2'
            } else if (reel3 <= .6) {
                reel3 = 'option3'
            } else if (reel3 <= .8) {
                reel3 = 'option4'
            } else {
                reel3 = 'option5'
            }

        if ((reel1 == reel2) && (reel2 == reel3)) {
            amount += 500
        } else {
            amount -= 50
        }
        document.querySelector('h2').innerText = amount
    }
}