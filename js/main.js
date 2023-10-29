//variables
let buttonClickStart = document.getElementById('reelButton')
let buttonClickClear = document.getElementById('buttonClear')
let reel1 = document.getElementById('slot1')
let reel2 = document.getElementById('slot2')
let reel3 = document.getElementById('slot3')

//event listeners
buttonClickStart.addEventListener('click',spinWheel,scores)
buttonClickClear.addEventListener('click',startOver)


//function that spins the wheels
function spinWheel()
{
    let x = Math.floor((Math.random() * 5) + 1)
    if (x == 5)
    {
        reel1.innerText = '🎀'
        console.log(x)
    }
    else if (x == 4)
    {
        reel1.innerText = '🔔'
        console.log(x)
    }
    else if (x == 3)
    {
        reel1.innerText = '💰'
        console.log(x)
    }
    else if (x == 2)
    {
        reel1.innerText = '💯'
        console.log(x)
    }
    else if (x == 1)
    {
        reel1.innerText = '🍒'
        console.log(x)
    }
    else
    {
        console.log('failed')
    }

    let y = Math.floor((Math.random() * 5) + 1)
    if (y == 5)
    {
        reel2.innerText = '🎀'
        console.log(y)    }
    else if (y == 4)
    {
        reel2.innerText = '🔔'
        console.log(y)    }
    else if (y == 3)
    {
        reel2.innerText = '💰'
        console.log(y)
    }
    else if (y == 2)
    {
        reel2.innerText = '💯'
        console.log(y)
    }
    else if (y == 1)
    {
        reel2.innerText = '🍒'
        console.log(y)
        
    }
    else
    {
        console.log('failed')
    }

    let z = Math.floor((Math.random() * 5) + 1)
    if (z == 5)
    {
        reel3.innerText = '🎀'
        console.log(z)
    }
    else if (z == 4)
    {
        reel3.innerText = '🔔'
        console.log(z)
    }
    else if (z == 3)
    {
        reel3.innerText = '💰'
        console.log(z)
    }
    else if (z == 2)
    {
        reel3.innerText = '💯'
        console.log(z)
    }
    else if (z == 1)
    {
        reel3.innerText = '🍒'
        console.log(z)
    }
    else
    {
        console.log('failed')
    }
    scores(x,y,z)
}

//function that prints message to try again
function scores(reel1, reel2, reel3)
{
    let playerScore = document.getElementById('holdResult')
    let playerBet = document.getElementById('betAmount')
    let playerResult = Number(playerScore.innerHTML)

    if (playerResult < Number(playerBet.value))
    {
        alert('BANKRUPT--NO MONEY ON YOUR CARD')
        return   
    }
    else if (reel1 === reel2 && reel1 === reel3)
    {
        playerResult += Number(playerBet.value)
        displayCompleteMessage(" JACKPOT")
        console.log('you won')
    }
    else
    {
        playerResult -= Number(playerBet.value)
        displayCompleteMessage(" HIT AGAIN")
        console.log('you lost')
    }
    
    playerScore.innerHTML = playerResult
}

function startOver()
{
    reel1.innerText = ''
    reel2.innerText = ''
    reel3.innerText = ''
    holdResult.innerHTML = '500'
    document.getElementById("status").innerHTML='';
    console.log('SUCCESS')
}

function displayCompleteMessage(msg)
{
	document.getElementById("status").innerHTML=msg;
}