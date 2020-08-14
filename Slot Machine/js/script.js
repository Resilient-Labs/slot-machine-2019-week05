let bets = document.getElementsByClassName("betBtn");
let wheel = document.getElementsByClassName("wheel");
let display = document.getElementsByClassName("betDisplay")[0];
let wheelDisplay = [1, 2, 3, 4, 5]

display.innerHTML = "$1000";

for (let i = 0; i < bets.length; i++){
    bets[i].addEventListener("click", play);
};

function ranNum(max){
    return Math.floor(Math.random() * Math.floor(max));
};

function play(e){
    let presentCash = parseInt(display.innerHTML.split("$")[1]);
    let bet = e.target.innerHTML.split("$")[1];
    for (let i = 0; i < 3; i++){
        wheel[i].innerHTML = wheelDisplay[ranNum(wheelDisplay.length)];
    }
    if(wheel[0].innerHTML === wheel[1].innerHTML && wheel[0].innerHTML === wheel[2].innerHTML){
        presentCash += bet * 10;
        display.innerHTML = `$${presentCash}`;
        for (let i = 0; i < 3; i++){
            wheel[i].classList.add("win");
        }
    }else{
        presentCash -= bet;
        display.innerHTML = `$${presentCash}`;
        for (let i = 0; i < 3; i++){
            wheel[i].classList.remove("win");
        }
    }
};
