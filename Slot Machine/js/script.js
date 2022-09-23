// 3 slots with 5 items 
// min max 
// total 

// Worked together with Thao and Joshua F

let images = ['css/one.png', 'css/two.jpg', 'css/three.jpg', 'css/four (2).png', 'css/five (2).png']


document.querySelector('.move').addEventListener('click', ()=>{
    console.log(document.querySelector('#bet').value)
    if (document.querySelector('#bet').value > parseInt(document.querySelector('.balance').innerText)) { 
        alert('You don\'t have enough money!')
    }
    else if (document.querySelector('#bet').value === '') {
        alert('You need to put in a bet')
    }
    else if(document.querySelector('#bet').value <= 49){
        alert('Min bets are 50! Step it up bud')
    }
    else {
        let bets = document.querySelector('#bet').value;
        let randomChoice1 = Math.floor(Math.random() * 5)
        let randomChoice2 = Math.floor(Math.random() * 5)
        let randomChoice3 = Math.floor(Math.random() * 5)

        document.querySelector('.wheel1').src = images[randomChoice1]
        document.querySelector('.wheel2').src = images[randomChoice2]
        document.querySelector('.wheel3').src = images[randomChoice3]

        if ((document.querySelector('.wheel1').src === document.querySelector('.wheel2').src) && (document.querySelector('.wheel2').src === document.querySelector('.wheel3').src)){
            let winnings = bets * 2
            document.querySelector('.balance').innerText = parseInt(document.querySelector('.balance').innerText) + winnings
            
        }
        else {
            document.querySelector('.balance').innerText = parseInt(document.querySelector('.balance').innerText) - bets
        }
    }
})
    
document.querySelector('.min').addEventListener('click', ()=>{
    console.log(document.querySelector('.min'))
    if (50 > parseInt(document.querySelector('.balance').innerText)) { 
        alert('You don\'t have enough money!')
    }
    else {
        let bets = 50
        let randomChoice1 = Math.floor(Math.random() * 5)
        let randomChoice2 = Math.floor(Math.random() * 5)
        let randomChoice3 = Math.floor(Math.random() * 5)

        document.querySelector('.wheel1').src = images[randomChoice1]
        document.querySelector('.wheel2').src = images[randomChoice2]
        document.querySelector('.wheel3').src = images[randomChoice3]

        if ((document.querySelector('.wheel1').src === document.querySelector('.wheel2').src) && (document.querySelector('.wheel2').src === document.querySelector('.wheel3').src)){
            let winnings = bets * 2
            document.querySelector('.balance').innerText = parseInt(document.querySelector('.balance').innerText) + winnings
            
        }
        else {
            document.querySelector('.balance').innerText = parseInt(document.querySelector('.balance').innerText) - bets
        }
    }
    
})
document.querySelector('.max').addEventListener('click', ()=>{
    console.log(document.querySelector('.max'))
    if (1000 > parseInt(document.querySelector('.balance').innerText)) { 
        alert('You don\'t have enough money!')
    }
    else {
        let bets = 1000
        let randomChoice1 = Math.floor(Math.random() * 5)
        let randomChoice2 = Math.floor(Math.random() * 5)
        let randomChoice3 = Math.floor(Math.random() * 5)

        document.querySelector('.wheel1').src = images[randomChoice1]
        document.querySelector('.wheel2').src = images[randomChoice2]
        document.querySelector('.wheel3').src = images[randomChoice3]

        if ((document.querySelector('.wheel1').src === document.querySelector('.wheel2').src) && (document.querySelector('.wheel2').src === document.querySelector('.wheel3').src)){
            let winnings = bets * 2
            document.querySelector('.balance').innerText = parseInt(document.querySelector('.balance').innerText) + winnings
            
        }
        else {
            document.querySelector('.balance').innerText = parseInt(document.querySelector('.balance').innerText) - bets
        }
    }
    
})

