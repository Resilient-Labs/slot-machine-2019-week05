let sum = 60

let lowbetBtn = document.querySelector(".lowbet")
let highbetBtn = document.querySelector(".highbet")
let spinBtn = document.querySelector(".spin")
let first = document.querySelector(".first")
let second = document.querySelector(".second")
let third = document.querySelector(".third")
let total = document.querySelector(".total")

lowbetBtn.addEventListener("click", runLow)
highbetBtn.addEventListener("click", runHigh)
spinBtn.addEventListener("click", runSpin)

let lowbetBtnClicked = false 
let highbetBtnClicked = false 

function runLow(){
    lowbetBtnClicked = true 
    highbetBtnClicked = false
}

function runHigh(){
    highbetBtnClicked = true 
    lowbetBtnClicked = false
}


function runSpin(){
    if (lowbetBtnClicked || highbetBtnClicked){
        let betAmt = lowbetBtnClicked ? 5 : 20
        if (sum >= betAmt){
            let numberOne = Math.floor((Math.random()*5)+1)
            first.innerText = numberOne

            let numberTwo = Math.floor((Math.random()*5)+1)
            second.innerText = numberTwo

            let numberThree = Math.floor((Math.random()*5)+1)
            third.innerText = numberThree

            if(numberOne == numberTwo && numberOne == numberThree){
                sum += betAmt
                 
            }

            else{
                sum -= betAmt
            }

            total.innerText = "$" + sum
        }
        else{
            alert("No money!!!")
        }
    }

    else{
        alert("Make a bet amount") 
    }

    lowbetBtnClicked=false
    highbetBtnClicked=false
}

// bet amt instead of clicked 