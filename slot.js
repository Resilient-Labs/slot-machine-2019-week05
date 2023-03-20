
let bankAmount = 15000;
let betAmount;
const total = document.querySelector('#barbsTotal');
total.innerText = bankAmount;
document.querySelector('#barbsPick').addEventListener('change', makeMoney);
document.querySelector('#spin').addEventListener('click', makeMoney)
document.querySelector('#minBet').addEventListener('click' , mini)
document.querySelector('#maxBet').addEventListener('click', maxi)
let logos = ['<img src="img/barb1.png" width="150px" height= "150px">', '<img src="img/barb2.png" width="200px" height="150px">', '<img src="img/barb3.png" width="200px" height="250px">', '<img src="img/barb4.png" width="200px" height="250px">', '<img src="img/barb5.png" width="200px" height="250px">'];

let rowOne = document.querySelector('#s1');
let rowTwo = document.querySelector('#s2');
let rowThree = document.querySelector('#s3');
let message = document.querySelector('#result');


function makeMoney() {
    if (bankAmount <= 0) {
        return alert('andddd you are DONE');
    }
    let betAmount = Number(document.querySelector('#barbsPick').value);

    let reelOne = Math.floor(Math.random() * 5);
    let reelTwo = Math.floor(Math.random() * 5);
    let reelThree = Math.floor(Math.random() * 5);
    

    rowOne.innerHTML = logos [reelOne];
    rowTwo.innerHTML = logos [reelTwo];
    rowThree.innerHTML = logos [reelThree];

    if (reelOne === reelTwo && reelOne === reelThree) {
        bankAmount = bankAmount + betAmount;
        total.innerText = bankAmount;
        message.innerText = 'You won!';
    } 
    else {
        bankAmount = bankAmount - betAmount;
        total.innerText = bankAmount;
        message.innerText = 'You lose!';
    }
}
function mini() {
    betAmount = 20
    let reelOne = Math.floor(Math.random() * 5);
    let reelTwo = Math.floor(Math.random() * 5);
    let reelThree = Math.floor(Math.random() * 5);
    

    rowOne.innerHTML = logos [reelOne];
    rowTwo.innerHTML = logos [reelTwo];
    rowThree.innerHTML = logos [reelThree];

    if (reelOne === reelTwo && reelOne === reelThree) {
        bankAmount = bankAmount + betAmount;
        total.innerText = bankAmount;
        message.innerText = 'You won!';
    } 

     else if (bankAmount <= 0) {
        return alert('andddd you are DONE');
    }
    else {
        bankAmount = bankAmount - betAmount;
        total.innerText = bankAmount;
        message.innerText = 'You lose!';
    }
}
function maxi(){
    betAmount = 1000
    let reelOne = Math.floor(Math.random() * 5);
    let reelTwo = Math.floor(Math.random() * 5);
    let reelThree = Math.floor(Math.random() * 5);
    

    rowOne.innerHTML = logos [reelOne];
    rowTwo.innerHTML = logos [reelTwo];
    rowThree.innerHTML = logos [reelThree];

    if (reelOne === reelTwo && reelOne === reelThree) {
        bankAmount = bankAmount + betAmount;
        total.innerText = bankAmount;
        message.innerText = 'You won!';
    }

     else if (bankAmount <= 0) {
        return alert('andddd you are DONE');
    }
     else {
        bankAmount = bankAmount - betAmount;
        total.innerText = bankAmount;
        message.innerText = 'You lose!';
    }
}

